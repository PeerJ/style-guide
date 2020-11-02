<template>
  <Logo
    :logoCutoutSvg="logoCutoutSvg"
    :logoCutoutSubtextSvg="logoCutoutSvg"
    :logoTextSvg="logoTextSvg"
    :logoSubtextSvg="logoTextSvg"
    :bgColor="bgColor"
    v-bind="$attrs"
  />
</template>
<script>
import Logo from "./Logo.vue";
import LogoCutout from "../assets/peerj-cutout-black.svg";
import LogoText from "../assets/peerj-text.svg";
import peerJColors from "../journal-colors.js";

const colors = new peerJColors();

export default {
  name: "PeerJLogo",
  components: {
    Logo,
  },
  data() {
    return {
      bgColor: colors.peerj,
      logoCutoutSvg: LogoCutout,
      logoTextSvg: LogoText,
    };
  },
};
</script>
