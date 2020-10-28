<template>
  <div class="chem-logos" @click="handleClick">
    <div
      class="logo-layer"
      v-for="(journal, index) in journals"
      :key="index"
      :style="getLayerStyle(index)"
    >
      <ChemLogo
        :name="journal.name"
        :slug="journal.slug"
        :size="`${size}px`"
        :showSubTitle="view == 'long'"
        textColor="transparent"
      />
    </div>
    <div class="chem-logo-layer" :style="getPrimaryLogoStyle()">
      <ChemLogo
        name="Chemistry"
        slug="chemistry"
        :size="`${size}px`"
        :showSubTitle="true"
        :textColor="view == 'long' ? 'transparent' : 'white'"
      />
    </div>
  </div>
</template>

<script>
import ChemLogo from "./ChemLogo.vue";
const journals = [
  { name: "Physical Chemistry", slug: "physical" },
  { name: "Organic Chemistry", slug: "organic" },
  { name: "Inrganic Chemistry", slug: "inorganic" },
  { name: "Analytical Chemistry", slug: "analytical" },
  { name: "Materials Science", slug: "materials" },
];
export default {
  name: "ChemColorStudy",
  components: { ChemLogo },
  props: {
    size: Number,
  },
  data() {
    return { journals: journals, view: "collapsed" };
  },
  methods: {
    handleClick() {
      if (this.view === "collapsed") {
        this.view = "long";
      } else if (this.view === "short") {
        this.view = "long";
      } else {
        this.view = "collapsed";
      }
    },
    getLayerStyle(index) {
      const height = this.view === "short" ? 40 : this.size;
      const yOffset = this.view === "collapsed" ? 0 : this.size;
      const top = this.view === "collapsed" ? 0 : index * height + yOffset;
      return {
        top: `${top}px`,
        height: `${height}px`,
        position: "absolute",
        transition: "all 1s",
        overflow: "hidden",
        mixBlendMode: "multiply",
      };
    },
    getPrimaryLogoStyle() {
      return {
        position: "absolute",
        mixBlendMode: "screen",
        transition: "mixBlendMode 1s",
      };
    },
  },
};
</script>
<style scoped>
.chem-logos {
  position: relative;
}
.chem-logo-layer {
  mix-blend-mode: screen;
}
</style>
