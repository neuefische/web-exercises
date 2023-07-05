export default {
  name: "next",
  description: "Next.js (incl. Styled Components and Jest)",
  cmd: [
    "npx",
    [
      "-y",
      "create-next-app@13.4",
      "--js",
      "--eslint",
      "--use-npm",
      "--no-tailwind",
      "--no-src-dir",
      "--no-app",
      "--import-alias",
      "@/*",
      ".",
      "my-app",
    ],
  ],
  async beforeFiles({ cwd, spinner }) {
    spinner.text = "Cooking next — Installing SVGR…";
    await installSvgr({ cwd });

    spinner.text = "Cooking next — Installing Styled Components…";
    await installStyledComponents({ cwd });

    spinner.text = "Cooking next — Installing Jest…";
    await installJest({ cwd });

    spinner.text = "Cooking next — Deleting unnecessary files…";
    await deleteUnnecessaryFiles({ cwd });
  },
};

async function installSvgr({ cwd }) {
  const { execa } = await import("execa");

  await execa("npm", ["install", "--save-dev", "@svgr/webpack"], { cwd });
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
  packageJson.scripts.test = "jest --watchAll";
  await fs.writeJSON(packageJsonPath, packageJson);
}

async function deleteUnnecessaryFiles({ cwd }) {
  const fs = (await import("fs-extra")).default;
  const { join } = await import("node:path");

  await fs.rm(join(cwd, "public", "vercel.svg"), { force: true });
  await fs.rm(join(cwd, "public", "next.svg"), { force: true });
  await fs.rm(join(cwd, "styles"), { force: true, recursive: true });
  await fs.rm(join(cwd, "pages", "api"), { force: true, recursive: true });
}
