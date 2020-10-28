import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { translucentDecorator } from "./decorators.js";

import ChemColorStudy from "../components/ChemColorStudy.vue";
import PeerJChemistryLogoStack from "../components/PeerJChemistryLogoStack.vue";
import PeerJColorTest from "../components/PeerJColorTest.vue";
import PeerJBioLogoStack from "../components/PeerJBioLogoStack.vue";

export default {
  title: "Logo Stacks",
  decorators: [withKnobs, translucentDecorator],
};

export const ChemistryLogoStudy = () => ({
  components: { ChemColorStudy },
  template: `<ChemColorStudy :size="200"/>`,
});

export const PeerJLogoStudy = () => ({
  components: { PeerJColorTest },
  template: `
  <div :style="{width: '500px', display: 'flex', justifyContent: 'space-between'}">
    <PeerJColorTest :size="200" blendMode="multiply" :layers="12" :rgb="{ r: 2, g: 167, b: 252 }"/>
    <PeerJColorTest :size="200" blendMode="screen" :layers="12" :rgb="{ r: 2, g: 167, b: 252 }"/>
  </div>
    `,
});

export const BioLogoStack = () => ({
  components: { PeerJBioLogoStack },
  template: `<PeerJBioLogoStack :size="200" :view="view" :translucent="translucent"/>`,
  props: {
    view: {
      default: select("view", ["normal", "expanded"], "normal"),
    },
    translucent: boolean("transludent", true),
  },
});

export const ChemistryLogoStack = () => ({
  components: { PeerJChemistryLogoStack },
  template: `<PeerJChemistryLogoStack :size="200" :view="view" :translucent="translucent"/>`,
  props: {
    view: {
      default: select("view", ["normal", "expanded"], "normal"),
    },
    translucent: { default: boolean("transludent", true) },
  },
});
