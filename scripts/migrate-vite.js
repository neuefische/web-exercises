/* 
1. list all session for migration
2. create new package.json with dynamic project name.
  - use template
  - parse old package.json and extract dependencies remove react-scripts
  - add type: module
  - add vite, vite-plugin-eslint, vite-plugin-react devDependencies
  - remove react scripts
3. rename .js files to .jsx 
4. create new index.html in root, delete old one in /public
5. create vite.config.js
*/
import { $, Glob } from "bun";
import { readdir } from "fs-extra";

const glob = new Glob("src/**/*.js");
const sessions = ["react-basics"];

for (const session of sessions) {
  const sessionPath = `./sessions/${session}`;
  const challenges = await readdir(sessionPath);

  for (const challenge of challenges.slice(0, 1)) {
    const challengePath = `${sessionPath}/${challenge}`;
    console.log("--------");
    console.log("Path: ", challengePath);
    const files = [...glob.scanSync(challengePath)];

    files.forEach(async (file) => {
      const oldPath = `${challengePath}/${file}`;
      const newPath = oldPath + "x";
      await $`mv ${oldPath} ${newPath}`;
    });
  }
}
