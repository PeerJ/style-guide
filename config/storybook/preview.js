console.log("preview.js loaded");

export const globalTypes = {
  backgroundMode: {
    name: "Color Layers",
    description: "Layer Display Mode for Showing Transparency",
    defaultValue: "normal",
    toolbar: {
      icon: "circlehollow",
      items: ["normal", "banner"],
    },
  },
};

// .storybook/preview.js

export const parameters = {
  backgrounds: {
    default: "white",
    values: [
      {
        name: "white",
        value: "#fff",
      },
      {
        name: "black",
        value: "#000",
      },
      {
        name: "Lime Green",
        value: "lime",
      },
    ],
  },
};
