import branchName from "branch-name";
import clipboard from "clipboardy";
import fs from "fs-extra";
import { globby } from "globby";

try {
  const exercises = await globby("*/*", {
    onlyDirectories: true,
    expandDirectories: false,
    cwd: "./sessions",
  });

  const branch = (await branchName.get()) ?? "main";

  let out = "exercise,cloud,legacy,ghcd\n";

  for (const exercise of exercises) {
    const packageJson = await fs.readJSON(
      `./sessions/${exercise}/package.json`
    );
    const { name } = packageJson;
    out += `${name},`;
    out += `https://codesandbox.io/p/sandbox/github/neuefische/web-exercises/tree/${branch}/sessions/${exercise},`;
    out += `https://codesandbox.io/s/github/neuefische/web-exercises/tree/${branch}/sessions/${exercise},`;
    out += `npx -y ghcd@latest /neuefische/web-exercises/tree/${branch}/sessions/${exercise}`;
    out += "\n";
  }

  clipboard.writeSync(out);

  console.log("copied all exercise links to clipboard  as csv ✨");
} catch (error) {
  console.error(error);
  process.exit(1);
}

process.exit(0);
