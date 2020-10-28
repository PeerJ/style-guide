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
import LogoCutout from "../assets/peerj-materials-science-cutout-black.svg";
import LogoText from "../assets/peerj-materials-science-text.svg";
import LogoSubtext from "../assets/peerj-materials-science-subtext.svg";
import LogoCutoutSubtext from "../assets/peerj-materials-science-cutout-subtext.svg";
import peerJColors from "../journal-colors.js";

const colors = new peerJColors();

export default {
  name: "PeerJMaterialsScienceLogo",
  components: {
    Logo,
  },
  data() {
    return {
      bgColor: colors.materialsScience,
      logoCutoutSvg: LogoCutout,
      logoCutoutSubtextSvg: LogoCutoutSubtext,
      logoTextSvg: LogoText,
      logoSubtextSvg: LogoSubtext,
    };
  },
};
</script>
