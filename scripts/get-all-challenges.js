import { readdir } from "node:fs/promises";

// read all the files in the current directory
const sessions = await readdir(import.meta.dir + "/../sessions");

const nestedChallenges = await Promise.all(
  sessions
    .filter((session) => !session.startsWith("."))
    .flatMap(async (session) => ({
      name: session,
      challenges: await readdir(import.meta.dir + "/../sessions/" + session),
    }))
);

const challengesAndSolutions = nestedChallenges.reduce(
  (acc, session) => [
    ...acc,
    ...session.challenges
      .filter((challenge) => !challenge.includes("demo"))
      .map((challenge) => session.name + "_" + challenge),
  ],
  []
);

const challenges = challengesAndSolutions.reduce((acc, challenge) => {
  const name = challenge.replace("_solution", "");
  const hasSolution = acc[name] !== undefined;

  return {
    ...acc,
    [name]: hasSolution,
  };
}, {});

const challengeStrings = Object.entries(challenges)
  .toSorted()
  .map(([name, hasSolution]) => {
    const [session, challenge] = name.split("_");
    return hasSolution
      ? `- [x] [${name}](https://github.com/neuefische/web-exercises/tree/solutions/sessions/${session}/${challenge}_solution)`
      : `- [ ] ${name}`;
  });

console.log(challengeStrings.join("\n"));
