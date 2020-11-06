<template>
  <v-btn
    class="rounded-0 primary black--text peerj-primary-button"
    elevation="0"
    v-bind="$attrs"
    :style="{ backgroundColor: `${background} !important` }"
    ><slot
  /></v-btn>
</template>
<script>
import { VBtn } from "vuetify/lib";
import PeerJColors from "../journal-colors";
import detectVuetifyTheme from "../utils/detect-vuetify-theme";

const peerjColors = new PeerJColors();

export default {
  components: { VBtn },
  name: "primary-button",
  computed: {
    background: function() {
      // console.log("theme? ", this.$vuetify);
      const themeName = this.getThemeName();
      return peerjColors[themeName].rgba.string;
    },
  },
  methods: {
    getThemeName() {
      const theme = this.$vuetify.theme;
      const themeName = detectVuetifyTheme(this.$vuetify);
      console.log("theme? ", themeName, theme);
      return themeName;
    },
  },
};
</script>
<style scoped>
.peerj-primary-button {
}
</style>
