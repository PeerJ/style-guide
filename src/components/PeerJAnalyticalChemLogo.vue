<template>
  <Logo
    :logoCutoutSvg="logoCutoutSvg"
    :logoCutoutSubtextSvg="logoCutoutSubtextSvg"
    :logoTextSvg="logoTextSvg"
    :logoSubtextSvg="logoSubtextSvg"
    :bgColor="bgColor"
    v-bind="$attrs"
  />
</template>
<script>
import Logo from "./Logo.vue";
import LogoCutout from "../assets/peerj-analytical-chem-cutout-black.svg";
import LogoText from "../assets/peerj-analytical-chem-text.svg";
import LogoSubtext from "../assets/peerj-analytical-chem-subtext.svg";
import LogoCutoutSubtext from "../assets/peerj-analytical-chem-cutout-subtext.svg";
import peerJColors from "../journal-colors.js";

const colors = new peerJColors();

export default {
  name: "PeerJAnalyticalChemLogo",
  components: {
    Logo,
  },
  data() {
    return {
      bgColor: colors.analyticalChem,
      logoCutoutSvg: LogoCutout,
      logoCutoutSubtextSvg: LogoCutoutSubtext,
      logoTextSvg: LogoText,
      logoSubtextSvg: LogoSubtext,
    };
  },
};
</script>
