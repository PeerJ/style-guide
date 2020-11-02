<template>
  <div class="peerj-chemistry-logo-stack" :style="{ position: 'absolute' }">
    <!-- having a parent with transparency style prop creates a mixBlendMode context so that the mixBlendModes don't interact with Bg -->
    <div :style="{ opacity: view === 'normal' && translucent ? 0.89 : 0.99 }">
      <!-- <div
        :style="{
          background: view === 'normal' ? 'transparent' : 'black',
          position: 'absolute',
          width: `${size}px`,
          height: `${size * 0.93}px`,
          opacity: view === 'normal' ? '0' : '0',
          transition: 'background 1s',
        }"
      ></div> -->

      <div class="peerj-chemistry-logo-stack__layer" :style="getLayerStyle(1)">
        <PeerJPhysicalChemLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="multiply"
          :showSubtext="getshowSubtextProp(1)"
          :mask="mask"
          :translucent="translucent"
        />
      </div>
      <div class="peerj-chemistry-logo-stack__layer" :style="getLayerStyle(2)">
        <PeerJOrganicChemLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="multiply"
          :showSubtext="getshowSubtextProp(2)"
          :mask="mask"
          :translucent="translucent"
        />
      </div>
      <div class="peerj-chemistry-logo-stack__layer" :style="getLayerStyle(3)">
        <PeerJInorganicChemLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="multiply"
          :showSubtext="getshowSubtextProp(3)"
          :mask="mask"
          :translucent="translucent"
        />
      </div>
      <div class="peerj-chemistry-logo-stack__layer" :style="getLayerStyle(4)">
        <PeerJAnalyticalChemLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="multiply"
          :showSubtext="getshowSubtextProp(4)"
          :mask="mask"
          :translucent="translucent"
        />
      </div>
      <div class="peerj-chemistry-logo-stack__layer" :style="getLayerStyle(5)">
        <PeerJMaterialsScienceLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="multiply"
          :showSubtext="getshowSubtextProp(5)"
          :mask="mask"
          :translucent="translucent"
        />
      </div>
      <div class="peerj-chemistry-logo-stack__layer" :style="getLayerStyle(0)">
        <PeerJChemistryLogo
          :size="size"
          :sizeUnit="sizeUnit"
          mixBlendMode="screen"
          :mask="false"
          :translucent="translucent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PeerJAnalyticalChemLogo from "../components/PeerJAnalyticalChemLogo.vue";
import PeerJPhysicalChemLogo from "../components/PeerJPhysicalChemLogo.vue";
import PeerJOrganicChemLogo from "../components/PeerJOrganicChemLogo.vue";
import PeerJInorganicChemLogo from "../components/PeerJInorganicChemLogo.vue";
import PeerJMaterialsScienceLogo from "../components/PeerJMaterialsScienceLogo.vue";
import PeerJChemistryLogo from "../components/PeerJChemistryLogo.vue";

export default {
  name: "PeerJChemistryLogoStack",
  components: {
    PeerJPhysicalChemLogo,
    PeerJOrganicChemLogo,
    PeerJInorganicChemLogo,
    PeerJMaterialsScienceLogo,
    PeerJChemistryLogo,
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
  },
  methods: {
    getLayerStyle(index) {
      if (this.view === "normal" && index > 0) {
        return {
          top: `0`,
          left: `0`,
          opacity: `1`,
        };
      } else if (this.view === "expanded" && index > 0) {
        if (this.direction === "vertical") {
          return {
            top: `calc(${index} * (${this.size * 0.93}${
              this.sizeUnit
            }) + ${index} * (${this.marginSize}${this.marginSizeUnit}))`,
            left: `0`,
            opacity: `1`,
          };
        } else {
          return {
            top: "0",
            left: `calc(${index} * (${this.size}${this.sizeUnit}) + ${index} * (${this.marginSize}${this.marginSizeUnit}))`,
            opacity: `1`,
          };
        }
      }
    },
    getshowSubtextProp(index) {
      if (this.view === "normal") {
        return false;
      } else {
        return true;
      }
    },
    getMaskProp(index) {},
  },
};
</script>
<style scoped>
.peerj-chemistry-logo-stack__layer {
  position: absolute;
  transition: all 1s ease;
}
</style>
