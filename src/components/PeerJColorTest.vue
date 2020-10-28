<template>
  <div class="peerj-color-test">
    <div
      v-bind:class="{ 'logo-block': true, [`logo-block--${view}`]: true }"
      tabIndex="1"
      @click="handleClick"
    >
      <div class="logo-bg-layers">
        <div
          class="logo-bg-layer"
          v-for="(layer, index) in layers - 1"
          :key="index"
          v-bind:style="getBgLayerStyle(index)"
        />
      </div>
      <div class="logo-layers">
        <div
          class="logo-layer"
          v-for="(layer, index) in layers - 1"
          :key="index"
          v-bind:style="getLogoLayerStyle(index)"
        >
          <div class="logo-layer__color-info">
            {{ getBgColorString(index) }}
          </div>
          <PeerJBioLogotype class="logo-layer__svg" />
          <div class="logo-layer__name">{{ getSection(index) }}</div>
        </div>
      </div>
      <div class="primary-logo">
        <div class="logo-bg" v-bind:style="getPrimaryBgLayerStyle(0)" />
        <div class="logo" v-bind:style="getPrimaryLogoStyle(0)">
          <PeerJBioLogotype class="logo__svg" />
        </div>
      </div>
    </div>
    <div class="logo-ref-color" />
  </div>
</template>

<script>
import PeerJBioLogotype from "../assets/logo-bio-lockup-text.svg";
const convert = require("color-convert");
const sections = [
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

export default {
  name: "PeerJColorTest",
  components: {
    PeerJBioLogotype,
  },
  props: {
    msg: String,
    rgb: Object,
    layers: Number,
    blendMode: String,
  },
  data() {
    return { view: "collapsed" };
  },
  methods: {
    getSection(index) {
      return sections[index];
    },
    handleClick() {
      if (this.view === "collapsed") {
        this.view = "short";
      } else if (this.view === "short") {
        this.view = "long";
      } else {
        this.view = "collapsed";
      }
    },
    getPrimaryBgLayerStyle: function() {
      const rgb =
        this.blendMode === "screen"
          ? this.getScreenBgColor(0)
          : this.getMultiplyBgColor(0);
      const backgroundColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, 1)`;
      return {
        mixBlendMode: this.blendMode,
        top: `0px`,
        height: `200px`,
        backgroundColor: backgroundColor,
      };
    },
    getLayerStyle: function(color, layers, index) {
      if (this.blendMode === "screen") {
        return this.screenLayerStyle(color, layers, index);
      } else {
        return this.multiplyLayerStyle(color, layers, index);
      }
    },
    getPrimaryLogoStyle: function() {
      const mixBlendMode = this.view === "collapsed" ? "screen" : "normal";
      return {
        mixBlendMode: "screen",
        top: `0px`,
        height: `200px`,
      };
    },
    getLogoLayerStyle: function(index) {
      const layerHeight =
        this.view === "collapsed" ? 200 : this.view === "short" ? 40 : 200;
      const stackOffset = this.view === "collapsed" ? 0 : layerHeight * index;
      let backgroundColor = "white";
      let mixBlendMode = "normal";
      if (this.blendMode === "screen") {
        mixBlendMode = "screen";
      } else {
        mixBlendMode = "screen";
      }
      return {
        mixBlendMode: mixBlendMode,
        top: `${stackOffset}px`,
        height: `${layerHeight}px`,
      };
    },
    getBgLayerStyle: function(index) {
      const layerHeight =
        this.view === "collapsed" ? 200 : this.view === "short" ? 40 : 200;
      const stackOffset =
        this.view === "collapsed" ? 0 : 200 + layerHeight * index;

      let backgroundColor = "white";
      let mixBlendMode = "normal";
      if (this.blendMode === "screen") {
        const rgb = this.getScreenBgColor(index + 1);
        backgroundColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, 1)`;
        mixBlendMode = "screen";
      } else {
        const rgb = this.getMultiplyBgColor(index + 1);
        backgroundColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, 1)`;
        mixBlendMode = "multiply";
      }
      return {
        backgroundColor: backgroundColor,
        mixBlendMode: mixBlendMode,
        top: `${stackOffset}px`,
        height: `${layerHeight}px`,
      };
    },
    getBgColorString: function(index) {
      if (this.blendMode === "screen") {
        const rgb = this.getScreenBgColor(index + 1);
        return `rgba(${rgb[0]},${rgb[1]},${rgb[2]})`;
      } else {
        const rgb = this.getMultiplyBgColor(index + 1);
        return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
      }
    },
    getMultiplyBgColor: function(index) {
      const { r, g, b } = this.rgb;
      const hsl = convert.rgb.hsl.raw(r, g, b);
      const hRange = 45;
      const hStep = hRange / this.layers; // full range of h is 360
      const pivotPoint = hsl[0] / 360;
      const centeredIndex = this.layers * pivotPoint - index + 1;
      const h = hsl[0] + hStep * centeredIndex;
      const interHsl = [h * 0.957, hsl[1] * 0.98, hsl[2] * 1.907];
      const interRgb = convert.hsl.rgb(interHsl);
      return interRgb;
    },
    getScreenBgColor: function(index) {
      const { r, g, b } = this.rgb;
      const hsl = convert.rgb.hsl.raw(r, g, b);
      const hRange = 45;
      const hStep = hRange / this.layers; // full range of h is 360
      const pivotPoint = hsl[0] / 360;
      const centeredIndex = this.layers * pivotPoint - index + 1;
      const h = hsl[0] + hStep * centeredIndex;
      const interHsl = [h * 1.04, hsl[1] * 0.92, hsl[2] * 0.21];
      const interRgb = convert.hsl.rgb(interHsl);
      return interRgb;
    },
    multiplyLayerStyle: function(color, layers, index) {
      const layerHeight =
        this.view === "collapsed" ? 200 : this.view === "short" ? 40 : 200;
      const stackOffset = layerHeight * index;
      const { r, g, b } = color;
      const hsl = convert.rgb.hsl.raw(r, g, b);
      const hRange = 45;
      const hStep = hRange / layers; // full range of h is 360
      const pivotPoint = hsl[0] / 360;
      const centeredIndex = layers * pivotPoint - index + 1;
      const h = hsl[0] + hStep * centeredIndex;

      console.log({
        hsl: hsl,
        hRange: hRange,
        hStep: hStep,
        pivotPoint: pivotPoint,
        centeredInde: centeredIndex,
      });
      const interHsl = [h * 0.959, hsl[1] * 0.97, hsl[2] * 1.897];
      const interRgb = convert.hsl.rgb(interHsl);
      //const bgString = `rgba(${r / 1},${g / 1},${b / 1}, ${1 / (layers - 1)})`;
      const bgString = `rgba(${interRgb[0]}, ${interRgb[1]}, ${
        interRgb[2]
      }, ${1})`;
      return {
        backgroundColor: bgString,
        top: `${stackOffset}px`,
        mixBlendMode: "multiply",
      };
    },
    screenLayerStyle: function(color, layers, index) {
      const layerHeight =
        this.view === "collapsed" ? 200 : this.view === "short" ? 40 : 200;
      const stackOffset = layerHeight * index;
      const { r, g, b } = color;
      const hsl = convert.rgb.hsl.raw(r, g, b);
      const hRange = 45;
      const hStep = hRange / layers; // full range of h is 360
      const pivotPoint = hsl[0] / 360;
      const centeredIndex = layers * pivotPoint - index + 1;
      const h = hsl[0] + hStep * centeredIndex;

      console.log({
        hsl: hsl,
        hRange: hRange,
        hStep: hStep,
        pivotPoint: pivotPoint,
        centeredInde: centeredIndex,
      });
      const interHsl = [h * 1.007, hsl[1] * 0.95, hsl[2] * 0.19];
      const interRgb = convert.hsl.rgb(interHsl);
      //const bgString = `rgba(${r / 1},${g / 1},${b / 1}, ${1 / (layers - 1)})`;
      const bgString = `rgba(${interRgb[0]}, ${interRgb[1]}, ${
        interRgb[2]
      }, ${1})`;
      return {
        backgroundColor: bgString,
        top: `${stackOffset}px`,
        mixBlendMode: "screen",
      };
    },
    // cmykLayerStyle: function(color, layers, index) {},
  },
};
</script>

<style scoped>
.peerj-color-test {
  width: 400px;
}
.logo-ref-color {
  width: 200px;
  height: 200px;
  background-color: rgba(2, 167, 252, 1);
  position: absolute;
  left: 100px;
  top: 20px;
  z-index: 400;
  display: none;
}
.logo-bg-layer {
  width: 200px;
  height: 200px;
  position: absolute;
  transition: all 2s;
}
.logo-block {
  width: 200px;
  height: 200px;
  position: relative;
}
.logo-block:focus {
  outline: none;
}
.logo {
  width: 200px;
  height: 200px;
  /* background: #02a7fc; */
  position: absolute;
  z-index: -1;
  display: flex;
  align-content: center;
  justify-content: center;
  top: 0;
  left: 0;
  fill: rgba(2, 167, 252, 1);
  transition: all 1s;
}
.logo__svg {
  width: 100%;
  height: 100%;
  transition: fill 1s;

  /* mix-blend-mode: screen; */
  /* display: none; */
}

.logo-block--collapsed .logo__svg {
  /* fill: white; */
}

.logo__bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.logo-layers {
  position: absolute;
  top: 200px;
  left: 0;
  transition: top 1s;
  z-index: 60;
  min-height: 200px;
  width: 200px;
}

.logo-block--collapsed .logo-layers {
  /* outline: 1px solid red; */
  top: 0;
}
.logo-block--long .logo-layers {
  /* outline: 1px solid red; */
  /* top: 200px; */
}
.logo-block--short .logo-layers {
  /* outline: 1px solid red; */
  /* top: 200px; */
}
.logo-layer {
  width: 200px;
  position: absolute;
  top: 20;
  left: 0;
  text-align: left;
  transition: all 1s;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.15em;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: flex-end;
  border-top: 1px solid white;
}
.logo-block--collapsed .logo-layer {
  /* mix-blend-mode: screen; */
}

.logo-block--short .logo-layer {
  height: 40px;
}

.logo-block--long .logo-layer {
  height: 200px;
}
.logo-layer__color-info {
  position: absolute;
  left: 200px;
  top: 0;
  padding: 10px;
  width: 200px;
  color: lightgrey;
}

.logo-layer__name {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  color: rgba(2, 167, 252, 1);
}
.logo-block--collapsed .logo-layer__name {
  color: rgba(2, 167, 252, 0);
}

.logo-block--long .logo-layer__name {
  height: 65px;
}

.logo-layer__svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  /* fill: white; */
  fill: rgba(2, 167, 252, 1);
  opacity: 0;
  transition: all 1s;
  /* mix-blend-mode: screen; */
}

.logo-block--collapsed .logo-layer {
  top: 0 !important;
  color: rgba(0, 0, 0, 0);
  height: 200px !important;
}
.logo-block--collapsed .logo-layer__svg {
  opacity: 1;
}
.logo-block--long .logo-layer__svg {
  opacity: 1;
  fill: rgba(2, 167, 252, 1);
}
</style>
