<template>
  <div class="logo" v-bind:style="getContainerStyle()">
    <div class="logo__bg" v-bind:style="getBgStyle()"></div>
    <div class="logo__svg-container" :style="getSvgContainerStyle()">
      <component :is="dynamicChemLogo" class="logo__svg" viewBox="0 0 100 93" />
      <div class="logo__text-cover" :style="getTextCoverStyle()"></div>
    </div>
  </div>
</template>
<script>
import PeerJChemistry from "../assets/peerj-chemistry.svg";
import PeerJAnalyticalChem from "../assets/peerj-analytical-chem-cutout-black.svg";
import PeerJInorganicChem from "../assets/peerj-inorganic-chem-cutout-black.svg";
import PeerJMaterialScience from "../assets/peerj-material-science-cutout-black.svg";
import PeerJOrganicChem from "../assets/peerj-organic-chem-cutout-black.svg";
import PeerJPhysicalChem from "../assets/peerj-physical-chem-cutout-black.svg";

export default {
  name: "ChemLogo",
  components: {
    PeerJChemistry,
    PeerJAnalyticalChem,
    PeerJInorganicChem,
    PeerJMaterialScience,
    PeerJOrganicChem,
    PeerJPhysicalChem,
  },
  props: {
    size: String,
    name: String,
    slug: String,
    showSubTitle: Boolean,
    textColor: String,
  },
  data() {
    return {
      physical: {
        name: "Physical Chemistry",
        logo: "test",
      },
    };
  },
  computed: {
    dynamicChemLogo() {
      const slug = this.slug;
      console.log("slug", slug);
      if (slug === "physical") {
        return "PeerJPhysicalChem";
      } else if (slug === "organic") {
        return "PeerJOrganicChem";
      } else if (slug === "inorganic") {
        return "PeerJInorganicChem";
      } else if (slug === "analytical") {
        return "PeerJAnalyticalChem";
      } else if (slug === "materials") {
        return "PeerJMaterialScience";
      } else {
        return "PeerJChemistry";
      }
    },
  },
  methods: {
    getBgColor() {
      const colors = {
        chemistry: "rgb(143,39,87)",
        physical: "rgb(85, 134, 227)",
        organic: "rgb(117, 112, 197)",
        inorganic: "rgb(133, 92, 163)",
        analytical: "rgb(137, 74, 130)",
        materials: "rgb(132, 60, 98)",
      };
      return colors[this.slug];
    },

    getContainerStyle() {
      return {
        width: this.size,
        height: this.size,
      };
    },
    getTextCoverStyle() {
      return {
        position: "absolute",
        top: "60%",
        left: "0",
        width: "100%",
        height: "50px",
        backgroundColor: this.getBgColor(),
        opacity: this.showSubTitle ? "0" : "1",
        transition: "opacity 1s",
      };
    },
    getSvgContainerStyle() {
      return {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        fill: this.getBgColor(),
      };
    },
    getBgStyle() {
      return {
        backgroundColor: this.textColor,
        width: "100%",
        height: "100%",
        transition: "background-color 1s",
        transitionDelay: ".5s",
      };
    },
  },
};
</script>

<style scoped>
.logo {
  /* mix-blend-mode: multiply; */
  /* margin-top: -10%; */
  /* position: absolute; */
}
.logo__svg {
  width: 100%;
  height: 100%;
}
</style>
