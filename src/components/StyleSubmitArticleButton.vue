<template>
  <v-btn
    class="rounded-0 primary black--text peerj-primary-button"
    elevation="0"
    v-bind="$attrs"
    :style="{ backgroundColor: `${background} !important` }"
  >
    <UploadIcon
      viewBox="0 0 24 24"
      height
      :style="{
        height: '18px',
        width: '18px',
        objectFit: 'contain',
        marginRight: '.8em',
        marginLeft: '-.2em',
      }"
    />
    <slot />
  </v-btn>
</template>
<script>
import { VBtn } from "vuetify/lib";
import PeerJColors from "../journal-colors";
import detectVuetifyTheme from "../utils/detect-vuetify-theme";
import UploadIcon from "../assets/peerj-icon-upload.svg";
const peerjColors = new PeerJColors();

export default {
  components: { VBtn, UploadIcon },
  name: "submit-article-button",
  computed: {
    background: function() {
      const themeName = detectVuetifyTheme(this.$vuetify);
      return peerjColors[themeName].rgba.string;
    },
  },
};
</script>
