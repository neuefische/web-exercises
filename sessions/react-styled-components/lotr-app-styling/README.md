# Styled Components: Lord of the Rings

In this challenge you will finally style the LotR-Fanpage with the help of `styled-components`!

> 💡 You can use this template as a starting point. But if you are far enough along with your own LotR-Fanpage App, please use that instead.

## Task

Use `styled-components` to create the design you can find in the [design files for the LotR-Fanpage](./README.md#resources).

Before you start, follow the instructions to add all necessary files to your project.

### Details Page

You might start with the details page. Note that the background colors for each volume are given in the [`data.js`](./lib/data.js) file.

How could one style a component depending on a prop again?

#### Google Font

There are font variables already prepared in the [styles.css file](./README.md#resources), but the design suggest to use the Lora font.

> 💡 `@next/font` is already preinstalled in this template.

- Import the Lora font into your `styles.js`.
- Create a variable to define the `subsets` and `style` key from Lora, like so:

```js
const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});
```

- Finally, expand the `--font-family` variable to `${lora.style.fontFamily}, serif;`

You should now be able to use all font variables! 🎉

> 💡 If you get an error message, read it carefully: you might need to run `npm run dev` again and **save the styles file again** (without actually changing anything).

#### SVG

The [design files](./README.md#resources) also provide three svg files with arrows which you should have placed in an `icons` folder by now.

In order to use the SVGs as React components, you need to install the [npm package SVGR](https://react-svgr.com/docs/next/) first. Follow the instructions given in the docs.

To be sure how to adapt the `next.config.js` file, simply add the `webpack` function without a key:

```js
const nextConfig = {
  // {...}
  images: {
    domains: ["upload.wikimedia.org"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
```

### All Volumes Page

To create the box shadow of the books, you can use the predefined variables.

> 💡 If you are working in your own app, note that the random book button (bonus challenge of the last session) is not part of the design anymore. You can safely delete it.

### Dark Mode

Implement the light and dark mode theme. Use the predefined color variables.

- To make the `Link` component inherit the current theme color, use `color: unset`.

## Resources

⬇️ You can [download the design files and assets for the LotR-Fanpage App here](../../nextjs-basics-and-routing/lotr-app/design-resources.zip?raw=true).

- Unzip the file to get the resources folder.
- You can use the `[abc] Page [xyz].png` files as a reference for the design.
- If you like you can reference the original Figma design file: `lotr_app_design.fig`.
- The `variables.css` file contains the colors, fonts, and box shadows used in the design as CSS variables. Copy them into the `styles.js` of your project.
- Use the `arrow-left.svg`, `arrow-right.svg`, and `chevron-left.svg` files for the respective icon buttons. Place them in an `icons` folder at the root of your project and import them in your components directly. You can use the [npm package SVGR](https://react-svgr.com/docs/next/) for that.

## Development

### CodeSandbox

Select the "Browser" tab to view this project. If this project contains tests, select the "Tests" tab to check your progress.

> 💡 Please note that Next.js support on CodeSandbox is not great.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
