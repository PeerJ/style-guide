import vuetify from "@/plugins/vuetify";
import { VApp } from "vuetify/lib";

// see: https://github.com/storybookjs/storybook/issues/6364#issuecomment-485651328
import "!style-loader!css-loader!sass-loader!../../src/scss/variables.scss";
import "!style-loader!css-loader!sass-loader!../../src/scss/type-styles.scss";

// see https://stackoverflow.com/questions/59771565/vuetify-in-storybook-gets-error-undefined-is-not-an-object-evaluating-this-v
export const decorators = [
  () => ({
    components: { VApp },
    template: `<v-app :style="{background: 'transparent'}"><story /></v-app>`,
    vuetify,
  }),
];

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
