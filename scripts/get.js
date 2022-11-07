import branchName from "branch-name";
import clipboard from "clipboardy";
import fs from "fs-extra";
import fuzzy from "fuzzy";
import { globby } from "globby";
import inquirer from "inquirer";
import inquirerPrompt from "inquirer-autocomplete-prompt";

inquirer.registerPrompt("autocomplete", inquirerPrompt);

function getPrMarkdown({ sessionName, exerciseName, branchName }) {
  const path = `${sessionName}/${exerciseName}`;

  const doThis = exerciseName.includes("demo")
    ? "Use this demo"
    : sessionName.includes("recap")
    ? "Use this starter"
    : "Solve this challenge";

  // get the challenge template from ./get/challenge-template.md
  const challengeMd = fs
    .readFileSync("./scripts/get/challenge-template.md", "utf8")
    .replace(/PATH/g, path)
    .replace(/DO_THIS/g, doThis);

  // get the pr template from ./get/pr-template.md
  const prMd = fs
    .readFileSync("./scripts/get/pr-template.md", "utf8")
    .replace(/PATH/g, path)
    .replace(/BRANCH_NAME/g, branchName)
    .replace(/CHALLENGE_MARKDOWN/g, "````md\n" + challengeMd + "````");

  return prMd;
}

try {
  const exercises = await globby("*/*", {
    onlyDirectories: true,
    expandDirectories: false,
    cwd: "./sessions",
  });

  // split into sessions
  const sessionsObj = exercises.reduce((sessions, exercise) => {
    const [session, name] = exercise.split("/");
    sessions[session] = sessions[session] || [];
    sessions[session].push(name);
    return sessions;
  }, {});

  const sessions = Object.keys(sessionsObj);

  const currentBranch = await branchName.get();

  const input = await inquirer.prompt([
    {
      type: "autocomplete",
      name: "sessionName",
      message: "Session name",
      async source(answers, input = "") {
        return fuzzy.filter(input, sessions).map((el) => el.original);
      },
    },
    {
      type: "autocomplete",
      name: "exerciseName",
      message: "Exercise name",
      when: (answers) => sessionsObj[answers.sessionName]?.length > 1,
      async source(answers, input = "") {
        return fuzzy
          .filter(input, sessionsObj[answers.sessionName])
          .map((el) => el.original);
      },
    },
  ]);

  const sessionName = input.sessionName;
  const exerciseName = input.exerciseName || sessionsObj[sessionName][0];

  const md = getPrMarkdown({
    sessionName,
    exerciseName,
    branchName: currentBranch,
  });

  clipboard.writeSync(md);

  console.log("PR Markdown copied to clipboard!");
} catch (error) {
  console.error(error);
  process.exit(1);
}

process.exit(0);
