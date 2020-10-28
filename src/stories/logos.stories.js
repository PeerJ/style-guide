// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
} from "@storybook/addon-knobs";

import { translucentDecorator } from "./decorators.js";
import PeerJLogo from "../components/PeerJLogo.vue";
import PeerJBioLogo from "../components/PeerJBioLogo.vue";
import PeerJAnalyticalChemLogo from "../components/PeerJAnalyticalChemLogo.vue";
import PeerJPhysicalChemLogo from "../components/PeerJPhysicalChemLogo.vue";
import PeerJOrganicChemLogo from "../components/PeerJOrganicChemLogo.vue";
import PeerJInorganicChemLogo from "../components/PeerJInorganicChemLogo.vue";
import PeerJMaterialsScienceLogo from "../components/PeerJMaterialsScienceLogo.vue";
import PeerJChemistryLogo from "../components/PeerJChemistryLogo.vue";

export default {
  component: PeerJLogo,
  title: "PeerJ Logos",
  decorators: [withKnobs, translucentDecorator],
};

function getSharedProps() {
  return {
    size: { default: number("size", 300) },
    showPeerJLogo: { default: boolean("showPeerJLogo", true) },
    showSubtext: { default: boolean("showSubtext", true) },
    mask: {
      default: boolean("mask", false),
    },
    translucent: { default: boolean("translucent", false) },
    // textColor: select("Text Color", ["white", "transparent"], "transparent"),
    mixBlendMode: {
      default: select(
        "mixBlendMode",
        ["normal", "screen", "multiply"],
        "normal"
      ),
    },
  };
}

export const Peerj = () => ({
  components: { PeerJLogo },
  props: getSharedProps(),
  template: `<PeerJLogo :size='size' :mask="mask"  :mixBlendMode="mixBlendMode" :translucent='translucent' :showPeerJLogo='showPeerJLogo' />`,
});

export const PeerjLifeAndEnvironment = () => ({
  components: { PeerJBioLogo },
  props: Object.assign(getSharedProps(), {
    section: {
      default: select(
        "section",
        [
          " ",
          "Aquatic Biology",
          "Biochemistry, Biophysics and Molecular Biology",
          "Biodiversity and Conservation",
          "Bioinformatics and Genomics",
          "Brain and Cognition",
          "Ecology",
          "Environmental Science",
          "Microbiology",
          "Paleontology and Evolutionary Science",
          "Plant Biology",
          "Zoological Science",
        ],
        " "
      ),
    },
  }),
  template: `<PeerJBioLogo :size='size' :section="section" :mask="mask" :mixBlendMode="mixBlendMode" :translucent='translucent' :showPeerJLogo='showPeerJLogo' :showSubtext='showSubtext'/>`,
});

export const PeerjPhysicalChemistry = () => ({
  components: { PeerJPhysicalChemLogo },
  props: getSharedProps(),
  template: `<PeerJPhysicalChemLogo :size='size' :mask="mask"  :mixBlendMode="mixBlendMode" :translucent='translucent' :showPeerJLogo='showPeerJLogo' :showSubtext='showSubtext'/>`,
});

export const PeerjOrganicChemistry = () => ({
  components: { PeerJOrganicChemLogo },
  props: getSharedProps(),
  template: `<PeerJOrganicChemLogo :size='size' :mask="mask"  :mixBlendMode="mixBlendMode" :translucent='translucent' :showPeerJLogo='showPeerJLogo' :showSubtext='showSubtext'/>`,
});

export const PeerjInorganicChemistry = () => ({
  components: { PeerJInorganicChemLogo },
  props: getSharedProps(),
  template: `<PeerJInorganicChemLogo :size='size' :mask="mask"  :mixBlendMode="mixBlendMode" :translucent='translucent' :showPeerJLogo='showPeerJLogo' :showSubtext='showSubtext'/>`,
});

export const PeerjAnalyticalChemistry = () => ({
  components: { PeerJAnalyticalChemLogo },
  props: getSharedProps(),
  template: `<PeerJAnalyticalChemLogo :size='size' :mask="mask" :mixBlendMode="mixBlendMode" :translucent='translucent' :showPeerJLogo='showPeerJLogo' :showSubtext='showSubtext'/>`,
});

export const PeerjMaterialsScience = () => ({
  components: { PeerJMaterialsScienceLogo },
  props: getSharedProps(),
  template: `<PeerJMaterialsScienceLogo :size='size' :mask="mask" :mixBlendMode="mixBlendMode" :translucent='translucent' :showPeerJLogo='showPeerJLogo' :showSubtext='showSubtext'/>`,
});

export const PeerjChemistry = () => ({
  components: { PeerJChemistryLogo },
  props: getSharedProps(),
  template: `<PeerJChemistryLogo :size='size' :mask="mask" :mixBlendMode="mixBlendMode" :translucent='translucent' :showPeerJLogo='showPeerJLogo' :showSubtext='showSubtext'/>`,
});
