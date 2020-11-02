<template>
  <Logo
    :logoCutoutSvg="logoCutoutSvg"
    :logoCutoutSubtextSvg="logoCutoutSubtextSvg"
    :logoTextSvg="logoTextSvg"
    :logoSubtextSvg="logoSubtextSvg"
    :bgColor="color"
    v-bind="$attrs"
    :size="size"
    :sizeUnit="sizeUnit"
    :textColor="textColor"
  >
    <div
      class="logo__section"
      :style="{
        position: 'absolute',
        left: `${size * 0.125}${sizeUnit}`,
        right: `${size * 0.125}${sizeUnit}`,
        top: '75%',
        bottom: `${size * 0.1}${sizeUnit}`,
        color: textColor ? textColor : 'white',
        fontFamily: 'Helvetica Neue, Roboto, Sans Serif',
        fontSize: `${size * 0.065}${sizeUnit}`,
        lineHeight: `${size * 0.065}${sizeUnit}`,
        letterSpacing: '.0125em',
        display: 'flex',
        alignItems: 'center',
        opacity: showSection ? '1' : '0',
        transition: 'all 1s',
      }"
    >
      {{ section }}
    </div>
  </Logo>
</template>
<script>
import Logo from "./Logo.vue";
import LogoCutout from "../assets/peerj-bio-cutout-black.svg";
import LogoBg from "../assets/peerj-bg.svg";
import LogoText from "../assets/peerj-bio-text.svg";
import LogoSubtext from "../assets/peerj-bio-subtext.svg";
import LogoCutoutSubtext from "../assets/peerj-bio-cutout-subtext.svg";
import peerJColors from "../journal-colors.js";

const colors = new peerJColors();

export default {
  name: "PeerJBioLogo",
  components: {
    Logo,
  },
  props: {
    section: String,
    showSection: { type: Boolean, default: true },
    size: Number,
    sizeUnit: { type: String, default: "px" },
    bgColor: Object,
    textColor: String,
  },
  data() {
    return {
      color: this.bgColor ? this.bgColor : colors.bio,
      logoCutoutSvg: LogoCutout,
      logoCutoutSubtextSvg: LogoCutoutSubtext,
      logoTextSvg: LogoText,
      logoSubtextSvg: LogoSubtext,
    };
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s linear;
  /* transition-delay: 0.25s; */
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
