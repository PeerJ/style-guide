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
      const themeName = detectVuetifyTheme(this.$vuetify);
      return peerjColors[themeName].rgba.string;
    },
  },
};
</script>
