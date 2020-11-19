<template>
  <div class="peerj-logo-stack" :style="{ position: 'absolute' }">
    <!-- having a parent with transparency style prop creates a mixBlendMode context so that the mixBlendModes don't interact with Bg -->
    <div :style="{ opacity: 0.99 }">
      <div class="peerj-logo-stack__layer" :style="getLayerStyle(6)">
        <PeerJLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="normal"
          :showSubtext="true"
          :mask="mask"
          :translucent="translucent"
        />
      </div>

      <div class="peerj-logo-stack__layer" :style="getLayerStyle(5)">
        <PeerJBioLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="normal"
          :showSubtext="getshowSubtextProp(1)"
          :mask="mask"
          :translucent="translucent"
        />
      </div>

      <div class="peerj-logo-stack__layer" :style="getLayerStyle(4)">
        <PeerJPhysicalChemLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="normal"
          :showSubtext="true"
          :mask="mask"
          :translucent="translucent"
        />
      </div>
      <div class="peerj-logo-stack__layer" :style="getLayerStyle(3)">
        <PeerJOrganicChemLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="normal"
          :showSubtext="true"
          :mask="mask"
          :translucent="translucent"
        />
      </div>
      <div class="peerj-logo-stack__layer" :style="getLayerStyle(2)">
        <PeerJInorganicChemLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="normal"
          :showSubtext="true"
          :mask="mask"
          :translucent="translucent"
        />
      </div>
      <div class="peerj-logo-stack__layer" :style="getLayerStyle(1)">
        <PeerJAnalyticalChemLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="normal"
          :showSubtext="true"
          :mask="mask"
          :translucent="translucent"
        />
      </div>
      <div class="peerj-logo-stack__layer" :style="getLayerStyle(0)">
        <PeerJMaterialsScienceLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="normal"
          :showSubtext="true"
          :mask="mask"
          :translucent="translucent"
        />
      </div>
    </div>
  </div>
</template>

<script>
// TODO: https://animejs.com/
import PeerJLogo from "../components/PeerJLogo";
import PeerJBioLogo from "../components/PeerJBioLogo";
import PeerJAnalyticalChemLogo from "../components/PeerJAnalyticalChemLogo.vue";
import PeerJPhysicalChemLogo from "../components/PeerJPhysicalChemLogo.vue";
import PeerJOrganicChemLogo from "../components/PeerJOrganicChemLogo.vue";
import PeerJInorganicChemLogo from "../components/PeerJInorganicChemLogo.vue";
import PeerJMaterialsScienceLogo from "../components/PeerJMaterialsScienceLogo.vue";

export default {
  name: "PeerJLogoStack",
  components: {
    PeerJLogo,
    PeerJBioLogo,
    PeerJPhysicalChemLogo,
    PeerJOrganicChemLogo,
    PeerJInorganicChemLogo,
    PeerJMaterialsScienceLogo,
    PeerJAnalyticalChemLogo,
  },
  props: {
    size: { type: Number, default: 100 },
    sizeUnit: { type: String, default: "px" },
    marginSize: { type: Number, default: 20 },
    marginSizeUnit: { type: String, default: "px" },
    view: { type: String, default: "normal" },
    direction: { type: String, default: "horizontal" },
    mask: { type: Boolean, default: false },
    translucent: { type: Boolean, default: true },
    trails: { type: Boolean, default: false },
  },
  methods: {
    getLayerStyle(index) {
      const reverseIndex = 6 - index;
      const fadeTimeOffset = 0;
      if (this.view === "normal") {
        return {
          top: `0`,
          left: `0`,
          zIndex: index,
          opacity: index < 6 ? 0 : 1,
          transition:
            this.direction === "horizontal"
              ? `left 1s, opacity 1s ${reverseIndex * fadeTimeOffset}s`
              : `top 1s, opacity 1s ${index * fadeTimeOffset}s`,
        };
      } else if (this.view === "expanded") {
        console.log("direction", this.direction, this.view);
        if (this.direction === "horizontal") {
          return {
            top: "0px",
            left: `calc(${reverseIndex} * (${this.size}${this.sizeUnit}) + ${reverseIndex} * (${this.marginSize}${this.marginSizeUnit}))`,
            zIndex: index,
            opacity: index < 6 && this.trails ? 0 : 1,
            transition: `left  1s, opacity 1s ${index * fadeTimeOffset}s`,
          };
        } else {
          return {
            top: `calc(${reverseIndex} * (${this.size * 0.93}${
              this.sizeUnit
            }) + ${reverseIndex} * (${this.marginSize}${this.marginSizeUnit}))`,
            left: "0px",
            zIndex: index,
            opacity: index < 6 && this.trails ? 0 : 1,
            transition:
              this.direction === "horizontal"
                ? `left 1s, opacity 1s ${index * fadeTimeOffset}s`
                : `top 1s, opacity 1s ${index * fadeTimeOffset}s`,
          };
        }
      }
    },
    getshowSubtextProp(index) {
      return true;
    },
    getMaskProp(index) {},
  },
};
</script>
<style scoped>
.peerj-logo-stack__layer {
  position: absolute;
}
</style>
