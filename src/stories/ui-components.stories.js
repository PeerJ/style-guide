import Vuetify, { VBtn } from "vuetify/lib";
import { translucentDecorator } from "./decorators.js";
import StylePrimaryButton from "../components/StylePrimaryButton";

export default {
  components: { VBtn },
  title: "UI Components",
  decorators: [
    () => ({ template: `<div :style="{padding: '40px'}"><story /></div>` }),
    translucentDecorator,
  ],
};

export const PrimaryButton = () => ({
  components: { StylePrimaryButton },
  template: `<StylePrimaryButton>Label</StylePrimaryButton>`,
});
