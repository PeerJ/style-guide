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
import LogoCutout from "../assets/peerj-chemistry-cutout-black.svg";
import LogoText from "../assets/peerj-chemistry-text.svg";
import LogoSubtext from "../assets/peerj-chemistry-subtext.svg";
import LogoCutoutSubtext from "../assets/peerj-chemistry-cutout-subtext.svg";
import peerJColors from "../journal-colors.js";

const colors = new peerJColors();

export default {
  name: "PeerJChemistryLogo",
  components: {
    Logo,
  },
  data() {
    return {
      bgColor: colors.chemistry,
      logoCutoutSvg: LogoCutout,
      logoCutoutSubtextSvg: LogoCutoutSubtext,
      logoTextSvg: LogoText,
      logoSubtextSvg: LogoSubtext,
    };
  },
};
</script>
