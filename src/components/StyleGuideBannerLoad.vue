<template>
  <div>
    <div
      class="banner"
      :style="{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }"
    >
      <img
        src="../assets/Misc_pollen.jpg"
        :style="{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }"
      />
      <div
        class="banner__cover-overlay"
        :style="{
          backgroundColor: '#408CDA',
          mixBlendMode: 'multiply',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          animationDuration: '.75s',
          animationName: 'slidedown',
          animationDelay: '1s',
          animationTimingFunction: 'ease-out',
          animationFillMode: 'both',
        }"
      ></div>
      <div
        class="banner__cover-overlay-2"
        :style="{
          backgroundColor: '#0C3055',
          mixBlendMode: 'lighten',
          opacity: '80%',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          animationDuration: '1s',
          animationName: 'slidedown',
          animationDelay: '1.25s',
          animationTimingFunction: 'ease-out',
          animationFillMode: 'both',
        }"
      ></div>
    </div>

    <div
      :style="{
        top: '40px',
        position: 'absolute',
        left: '10%',
        animationDuration: '.75s',
        animationName: 'slidedown',
        animationDelay: '1.25s',
        animationTimingFunction: 'ease-out',
        animationFillMode: 'both',
      }"
    >
      <PeerJLogo :size="200" :translucent="true" :mask="true" />
    </div>
    <h2
      class="text-h2 primary--text"
      :style="{ position: 'absolute', left: '20%' }"
    >
      Publishing high-impact research from the world's top academics and
      institutions
    </h2>
  </div>
</template>
<style>
@keyframes slidedown {
  from {
    margin-top: -100vh;
  }
  to {
    margin-top: 0;
  }
}
</style>
<script>
import PeerJLogo from "./PeerJLogo.vue";

export default {
  name: "style-guide-banner-load",
  components: { PeerJLogo },
};
</script>
