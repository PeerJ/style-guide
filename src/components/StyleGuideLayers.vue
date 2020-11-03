<template>
  <div class="style-guide-layers" @click="handleClick">
    <div class="style-guide-layers__bg">
      <img :src="imgSrc" class="style-guide-layers__bg-image" />
    </div>
    <div
      class="style-guide-layers__bg-overlay"
      :style="{
        width: chipSize,
        height: chipSize,
        left: layerOffset,
        top: layerOffset,
      }"
    ></div>
    <div class="style-guide-layers__bg-color"></div>
    <div class="style-guide-layers__logo-white"></div>
    <PeerJLogo
      class="style-guide-layers__logo"
      :size="200"
      :translucent="true"
      :mask="true"
      mixBlendMode="multiply"
    />
    <div class="style-guide-layers__logo-old"></div>
  </div>
</template>
<style scoped>
.style-guide-layers {
  padding: 80px;
  position: relative;
  width: 100vw;
  height: 100vh;
}
.style-guide-layers > * {
  margin-left: 0;
  transition: all 2s;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.075);
}
.style-guide-layers:hover > * {
  /* animation: 3s 1 alternate slidein; */
  /* animation-name: slidein; */
  /* animation-duration: 1s;
  animation-fill-mode: forwards; */
  /* left: 100px; */
  opacity: 0;
  margin-left: 400px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
}
.style-guide-layers__bg {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  /* margin-left: 0 !important; */
}
.style-guide-layers__bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.style-guide-layers__bg-overlay {
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: #408cda;
  mix-blend-mode: multiply;
  top: 20px;
  left: 20px;
  opacity: 1;
  animation-delay: 0.5s;
  transition-delay: 0.5s;
}
.style-guide-layers__bg-color {
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: #408cda;
  top: 40px;
  left: 40px;
  opacity: 0.3;
  animation-delay: 1s;
  transition-delay: 1s;
}
.style-guide-layers__logo-white {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: white;
  opacity: 0.85;
  top: 60px;
  left: 60px;
  /* animation-delay: 3s; */
  transition-delay: 3s;
  /* margin-left: 0 !important; */
  z-index: 90;
}
.style-guide-layers__logo {
  position: absolute !important;
  top: 80px;
  left: 80px;
  animation-delay: 2s;
  transition-delay: 2s;
  z-index: 100;
}
@keyframes slidein {
  from {
    margin-left: 100px;
    opacity: 0;
  }
  to {
    margin-left: 0;
    opacity: 1;
  }
}
</style>
<script>
import PeerJLogo from "./PeerJLogo.vue";

export default {
  name: "StyleGuideLayers",
  components: {
    PeerJLogo,
  },
  props: {
    layerOffset: { type: String, default: "20px" },
    chipSize: { type: String, default: "200px" },
  },
  data() {
    return { expanded: false };
  },
  computed: {
    imgSrc() {
      return require("../assets/Misc_pollen.jpg");
    },
  },
  methods: {
    handleClick() {},
  },
};
</script>
