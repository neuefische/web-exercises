export default {
  name: "next",
  description: "Next.js (incl. Styled Components, Jest, Storybook)",
  cmd: [
    "npx",
    ["create-next-app@latest", "--js", "--eslint", "--use-npm", "."],
  ],
  async beforeFiles({ cwd, spinner }) {
    spinner.text = "Installing Next.js Font…";
    await installNextjsFont({ cwd });

    spinner.text = "Installing Styled Components…";
    await installStyledComponents({ cwd });

    spinner.text = "Installing Jest…";
    await installJest({ cwd });

    spinner.text = "Installing Storybook…";
    await installAndConfigureStorybook({ cwd });

    spinner.text = "Deleting unnecessary files…";
    await deleteUnnecessaryFiles({ cwd });
  },
};

async function installNextjsFont({ cwd }) {
  const { execa } = await import("execa");

  await execa("npm", ["install", "@next/font"], { cwd });
}

async function installStyledComponents({ cwd }) {
  const { execa } = await import("execa");

  await execa("npm", ["install", "styled-components"], { cwd });
}

async function installJest({ cwd }) {
  const { execa } = await import("execa");
  const fs = (await import("fs-extra")).default;
  const { join } = await import("node:path");

  await execa(
    "npm",
    [
      "install",
      "--save-dev",
      "jest",
      "jest-environment-jsdom",
      "eslint-plugin-jest",
      "@testing-library/react",
      "@testing-library/jest-dom",
      "@testing-library/user-event",
    ],
    { cwd }
  );

  // add test script to package.json
  const packageJsonPath = join(cwd, "package.json");
  const packageJson = await fs.readJSON(packageJsonPath);
  packageJson.scripts.test = "jest --watch";
  await fs.writeJSON(packageJsonPath, packageJson);
}

async function installAndConfigureStorybook({ cwd }) {
  const { execa } = await import("execa");
  const fs = (await import("fs-extra")).default;
  const { join } = await import("node:path");

  await execa(
    "npx",
    ["storybook@latest", "init", "--yes", "--use-npm", "--skip-install"],
    {
      cwd,
      env: { CI: "true" },
    }
  );

  // remove the default stories
  await fs.rm(join(cwd, "stories"), { recursive: true, force: true });
}

async function deleteUnnecessaryFiles({ cwd }) {
  const fs = (await import("fs-extra")).default;
  const { join } = await import("node:path");

  await fs.rm(join(cwd, "public", "vercel.svg"), { force: true });
  await fs.rm(join(cwd, "styles"), { force: true, recursive: true });
  await fs.rm(join(cwd, "pages", "api"), { force: true, recursive: true });
}
