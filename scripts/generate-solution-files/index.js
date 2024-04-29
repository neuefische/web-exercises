import { $, file, write } from "bun";
import { readdir } from "node:fs/promises";

const DEV = false;

const sessions = await readdir(import.meta.dir + "/../../sessions");

const sessionSolutions = await Promise.all(
  sessions
    .filter((session) => !session.startsWith("."))
    .map(async (session) => ({
      name: session,
      solutions: (
        await readdir(import.meta.dir + "/../../sessions/" + session)
      ).filter((files) => files.endsWith("_solution")),
    }))
);

const basePath = DEV
  ? "../../../web-curriculum/output/sessions"
  : "../../../web-curriculum/sessions";

sessionSolutions.forEach(async (session) => {
  if (session.solutions.length <= 0) return;

  await $`mkdir -p ${basePath}/${session.name}`;
  write(`${basePath}/${session.name}/solutions-${session.name}.md`, "");

  const solutionsFile = file(
    `${basePath}/${session.name}/solutions-${session.name}.md`
  ).writer();

  solutionsFile.write(`# Solutions: ${deSlug(session.name)}\n\n`);

  session.solutions.forEach((solution) => {
    const link = `https://github.com/neuefische/web-exercises/tree/main/sessions/${session.name}/${solution}`;
    const displayName = deSlug(solution.replace("_solution", ""));

    console.log(displayName);

    solutionsFile.write(`## ${displayName}\n\n`);
    solutionsFile.write(
      `A solution to this challenge can be found [here](${link}). Alternatively, you can download the code with the following command:\n\n`
    );
    solutionsFile.write(`\`\`\`bash\n`);
    solutionsFile.write(
      `npx ghcd@latest neuefische/web-exercises/tree/main/sessions/${session.name}/${solution}\n`
    );
    solutionsFile.write(`\`\`\`\n`);
  });

  solutionsFile.end();
});

function deSlug(string) {
  return string
    .split("-")
    .map((string) => {
      if (["a", "and", "with", "the"].includes(string)) return string;

      if (string === "js") return "JS";
      if (string === "css") return "CSS";
      if (string === "html") return "HTML";
      if (string === "api") return "API";
      if (string === "usestate") return "useState";

      return string[0].toUpperCase() + string.slice(1);
    })
    .join(" ");
}
