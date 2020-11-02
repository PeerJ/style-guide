<template>
  <div class="peerj-bio-logo-stack" :style="{ position: 'relative' }">
    <!-- having a parent with transparency style prop creates a mixBlendMode context -->
    <div :style="{ opacity: view === 'normal' && translucent ? 0.9 : 0.99 }">
      <div
        class="peerj-bio-logo-stack__section"
        :key="index"
        v-for="(section, index) in sections"
        :style="getLayerStyle(index)"
      >
        <PeerJBioLogo
          :size="size"
          :sizeUnit="sizeUnit"
          :section="section"
          :showSection="view === 'normal' ? false : true"
          :translucent="translucent"
          :bgColor="getMultiplyColor(index + 1)"
          mixBlendMode="multiply"
          :textColor="view === 'normal' ? 'white' : textColor"
          :mask="false"
        />
      </div>
      <!-- <PeerJBioLogo
      :size="size"
      :bgColor="getScreenColor(12)"
      mixBlendMode="screen"
      :style="{ position: 'absolute', top: 0 }"
    /> -->
    </div>
  </div>
</template>

<script>
import peerJColors, { journalColor } from "../journal-colors.js";
import PeerJBioLogo from "./PeerJBioLogo.vue";
const convert = require("color-convert");

const sections = [
  "",
  "Aquatic Biology",
  "Biochemistry, Biophysics and Molecular Biology",
  "Biodiversity and Conservation",
  "Bioinformatics and Genomics",
  "Brain and Cognition",
  "Ecology",
  "Environmental Science",
  "Microbiology",
  "Paleontology and Evolutionary Science",
  "Plant Biology",
  "Zoological Science",
];

const colors = new peerJColors();

export default {
  name: "PeerJBioLogoStack",
  components: { PeerJBioLogo },
  props: {
    size: { type: Number, default: 100 },
    sizeUnit: { type: String, default: "px" },
    marginSize: { type: Number, default: 20 },
    marginSizeUnit: { type: String, default: "px" },
    view: { type: String, default: "normal" },
    translucent: { type: Boolean, default: true },
    direction: { type: String, default: "horizontal" },
  },
  data() {
    return {
      sections: sections,
      textColor: colors.bio.rgb.string,
    };
  },
  methods: {
    getLayerStyle(index) {
      if (this.view === "normal" && index > 0) {
        return {
          top: `0`,
          left: `0`,
        };
      } else if (this.view === "expanded" && index > 0) {
        console.log("direction", this.direction, this.view);
        if (this.direction === "horizontal") {
          return {
            top: "0",
            left: `calc(${index} * (${this.size}${this.sizeUnit}) + ${index} * (${this.marginSize}${this.marginSizeUnit}))`,
          };
        } else {
          return {
            top: `calc(${index} * (${this.size * 0.93}${
              this.sizeUnit
            }) + ${index} * (${this.marginSize}${this.marginSizeUnit}))`,
            left: "0",
          };
        }
      }
    },
    getScreenColor: function(index) {
      const layerCount = this.sections.length + 1;
      const { r, g, b } = colors.bio.rgb;
      const hsl = convert.rgb.hsl.raw(r, g, b);
      const hRange = 45;
      const hStep = hRange / layerCount; // full range of h is 360
      const pivotPoint = hsl[0] / 360;
      const centeredIndex = layerCount * pivotPoint - index + 1;
      const h = hsl[0] + hStep * centeredIndex;
      const interHsl = [h * 1.04, hsl[1] * 0.92, hsl[2] * 0.21];
      const interRgb = convert.hsl.rgb(interHsl);
      const color = {
        rgb: { r: interRgb[0], g: interRgb[1], b: interRgb[2] },
        rgba: { r: interRgb[0], g: interRgb[1], b: interRgb[2], a: 1 },
      };
      const colorObj = new journalColor(color);
      return colorObj;
    },
    getMultiplyColor: function(index) {
      const layerCount = this.sections.length + 1;
      const rgb = colors.bio.rgb;
      const a = colors.bio.rgba.a;

      const { r, g, b } = rgb;
      const hsl = convert.rgb.hsl.raw(r, g, b);
      const hRange = 45;
      const hStep = hRange / layerCount; // full range of h is 360
      const pivotPoint = hsl[0] / 360;
      const centeredIndex = layerCount * pivotPoint - index + 1;
      const h = hsl[0] + hStep * centeredIndex;
      const interHsl = [h * 0.957, hsl[1] * 0.98, hsl[2] * 1.907];
      const interRgb = convert.hsl.rgb(interHsl);
      const color = {
        rgb: { r: interRgb[0], g: interRgb[1], b: interRgb[2] },
        rgba: { r: interRgb[0], g: interRgb[1], b: interRgb[2], a: a },
      };
      const colorObj = new journalColor(color);
      return colorObj;
    },
  },
};
</script>
<style scoped>
.peerj-bio-logo-stack__section {
  position: absolute;
  transition: all 1s ease;
}
</style>
