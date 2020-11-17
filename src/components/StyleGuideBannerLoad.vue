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
        top: '0',
        position: 'absolute',
        left: '0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        width: '100%',
        height: '100%',
        padding: '40px',
      }"
    >
      <div
        class="style-guide-banner__left"
        :style="{
          width: '15vw',
          height: '15vw',
          minWidth: '150px',
          minHeight: '150px',
          flex: '0 0 auto',
          animationDuration: '.75s',
          animationName: 'slidedown',
          animationDelay: '1.25s',
          animationTimingFunction: 'ease-out',
          animationFillMode: 'both',
          marginRight: '5vw',
        }"
      >
        <PeerJLogo :size="100" sizeUnit="%" :translucent="false" :mask="true" />
      </div>

      <div
        class="style-guide-banner__middle"
        :style="{
          flex: '1 1 50vw',
          top: '40px',
          minHeight: '200px',

          minWidth: '240px',
        }"
      >
        <h3
          class="style-guide-banner__heading text-h5 text-sm-h4 text-md-h3 primary--text"
          :style="{
            animationDuration: '1.25s',
            animationName: 'slidedown',
            animationDelay: '1.35s',
            animationTimingFunction: 'ease',
            animationFillMode: 'both',
            minHeight: '15vw',
            textShadow: '0 0 6px rgba(0,0,0,.4)',
          }"
        >
          Publishing high-impact research from the world's top academics and
          institutions
        </h3>
        <StylePrimarySearch
          class="my-16"
          :style="{
            animationDuration: '1.25s',
            animationName: 'slidedown',
            animationDelay: '1.15s',
            animationTimingFunction: 'ease',
            animationFillMode: 'both',
            marginRight: '5%',
          }"
        />
      </div>
      <div
        class="style-guide-banner__right"
        :style="{
          width: '15vw',
          height: '15vw',
          minWidth: '150px',
        }"
      />
    </div>
  </div>
</template>
<style>
@keyframes slidedown {
  from {
    transform: translateY(-100vh);
  }
  to {
    transform: translateY(0);
  }
}
</style>
<script>
import PeerJLogo from "./PeerJLogo.vue";
import StylePrimarySearch from "./StylePrimarySearch";

export default {
  name: "style-guide-banner-load",
  components: { PeerJLogo, StylePrimarySearch },
};
</script>
