<template>
  <div
    class="logo"
    :style="{
      position: 'relative',
      width: `${size}px`,
      height: `${size * 0.93}px`,
      mixBlendMode: mixBlendMode,
    }"
  >
    <transition name="fade">
      <!-- Masked Full Logo -->
      <div
        v-if="mask && showSubtext && showPeerJLogo"
        class="logo__svg-container"
        :style="{
          fill: backgroundColor,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }"
      >
        <component
          :is="logoCutoutSvg"
          class="logo__svg"
          viewBox="0 0 100 93"
          :style="{ width: '100%', height: '100%' }"
        />
      </div>
    </transition>
    <!-- Cutout PeerJ Upper logo only -->
    <transition name="fade">
      <div
        v-if="mask && !showSubtext && showPeerJLogo"
        class="logo__svg-container"
        :style="{
          fill: backgroundColor,

          position: 'absolute',
          width: '100%',
          height: '100%',
        }"
      >
        <LogoCutoutSupertext
          class="logo__svg"
          viewBox="0 0 100 93"
          :style="{ width: '100%', height: '100%' }"
        />
      </div>
    </transition>
    <!-- Cutout subtext only -->
    <transition name="fade">
      <div
        v-if="mask && showSubtext && !showPeerJLogo"
        class="logo__svg-container"
        :style="{
          fill: backgroundColor,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }"
      >
        <component
          :is="logoCutoutSubtextSvg"
          class="logo__svg"
          viewBox="0 0 100 93"
          :style="{ width: '100%', height: '100%' }"
        />
      </div>
    </transition>
    <!-- Non-cutout full logo -->
    <transition name="fade">
      <div
        v-if="!mask && showSubtext && showPeerJLogo"
        class="logo__svg-container"
      >
        <LogoBg
          viewBox="0 0 100 93"
          :style="{
            width: '100%',
            height: '100%',
            position: 'absolute',
            fill: backgroundColor,
          }"
        />
        <component
          :is="logoTextSvg"
          class="logo__svg"
          viewBox="0 0 100 93"
          :style="{
            width: '100%',
            height: '100%',
            fill: textColor,
            position: 'absolute',
            transition: 'all 1s',
          }"
        />
      </div>
    </transition>
    <!-- Non-cutout PeerJ logo in upper position / no subtext -->
    <transition name="fade">
      <div
        v-if="!mask && showPeerJLogo && !showSubtext"
        class="logo__svg-container"
        :style="{
          fill: backgroundColor,

          position: 'absolute',
          width: '100%',
          height: '100%',
        }"
      >
        <LogoBg
          viewBox="0 0 100 93"
          :style="{
            width: '100%',
            height: '100%',
            position: 'absolute',
            fill: backgroundColor,
            transition: 'all 1s',
          }"
        />
        <LogoSupertext
          class="logo__svg"
          viewBox="0 0 100 93"
          :style="{
            width: '100%',
            height: '100%',
            fill: textColor,
            position: 'absolute',
            transition: 'all 1s',
          }"
        />
      </div>
    </transition>
    <!-- Non-cutout subtext only -->
    <div
      v-if="!mask && !showPeerJLogo && showSubtext"
      class="logo__svg-container"
      :style="{
        fill: backgroundColor,

        position: 'absolute',
        width: '100%',
        height: '100%',
      }"
    >
      <LogoBg
        viewBox="0 0 100 93"
        :style="{
          width: '100%',
          height: '100%',
          position: 'absolute',
          fill: backgroundColor,
        }"
      />
      <component
        :is="logoSubtextSvg"
        class="logo__svg"
        viewBox="0 0 100 93"
        :style="{
          width: '100%',
          height: '100%',
          fill: textColor,
          position: 'absolute',
          transition: 'all 1s',
        }"
      />
    </div>
    <!-- background only -->
    <div
      v-if="!showPeerJLogo && !showSubtext"
      class="logo__svg-container"
      :style="{
        fill: backgroundColor,

        position: 'absolute',
        width: '100%',
        height: '100%',
      }"
    >
      <LogoBg
        viewBox="0 0 100 93"
        :style="{
          width: '100%',
          height: '100%',
          position: 'absolute',
          fill: backgroundColor,
        }"
      />
    </div>
    <slot></slot>
  </div>
</template>
<script>
import LogoBg from "../assets/peerj-bg.svg";
import LogoSupertext from "../assets/peerj-supertext.svg";
import LogoCutoutSupertext from "../assets/peerj-cutout-supertext.svg";

export default {
  name: "Logo",
  components: { LogoBg, LogoSupertext, LogoCutoutSupertext },
  props: {
    size: { type: Number, default: 100 },
    mask: { type: Boolean, default: false },
    showPeerJLogo: { type: Boolean, default: true },
    showSubtext: { type: Boolean, default: true },
    logoCutoutSvg: { type: Object, required: true },
    logoCutoutSubtextSvg: { type: Object, required: true },
    logoTextSvg: { type: Object, required: true },
    logoSubtextSvg: { type: Object, required: true },
    textColor: { type: String, default: "white" },
    bgColor: { type: Object, required: true },
    mixBlendMode: { type: String, default: "normal" },
    translucent: { type: Boolean, default: false },
  },
  computed: {
    backgroundColor: (vm) =>
      vm.translucent ? vm.bgColor.rgba.string : vm.bgColor.rgb.string,
  },
  data() {
    return {};
  },
  methods: {
    getLogoBgStyle() {
      return {
        backgroundColor: this.textColor,
        width: "100%",
        height: "100%",
        position: "absolute",
      };
    },
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s linear;
  transition-delay: 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
