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

sessionSolutions.forEach((session) => {
  session.solutions.forEach(async (solution) => {
    const project = await file(
      `../../sessions/${session.name}/${solution}/package.json`
    ).json();
    project.name = `${session.name}_${solution}`;

    await write(
      `../../sessions/${session.name}/${solution}/package.json`,
      JSON.stringify(project, null, 2)
    );
  });
});
