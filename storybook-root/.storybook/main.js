/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {}
  },

  // ✅ Storybook Composition — add children Storybooks
  refs: {
    react: {
      title: "TP Framework : React",
      url: "http://localhost:6007",
    },
    vue: {
      title: "TP Framework : Vue",
      url: "http://localhost:6008",
    },
    css: {
      title: "TP CSS",
      url: "http://localhost:6006",
    },
  },
};

export default config;
