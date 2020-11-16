import Vuetify, { VBtn } from "vuetify/lib";
import { translucentDecorator } from "./decorators.js";
import StylePrimaryButton from "../components/StylePrimaryButton";
import StyleBasicButton from "../components/StyleBasicButton";
import StyleSubmitArticleButton from "../components/StyleSubmitArticleButton";
import StylePrimarySearch from "../components/StylePrimarySearch";

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

export const BasicButton = () => ({
  components: { StyleBasicButton },
  template: `<StyleBasicButton>Label</StyleBasicButton>`,
});

export const SubmitManuscriptButton = () => ({
  components: { StyleSubmitArticleButton },
  template: `<StyleSubmitArticleButton>Upload Manuscript</StyleSubmitArticleButton>`,
});

export const PrimarySearch = () => ({
  components: { StylePrimarySearch },
  template: `<StylePrimarySearch>Search</StylePrimarySearch>`,
});
