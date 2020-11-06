<template>
  <v-btn
    class="rounded-0 peerj-basic-button"
    elevation="0"
    text
    v-bind="$attrs"
  >
    <slot
  /></v-btn>
</template>
<script>
import { VBtn, VIcon } from "vuetify/lib";
import PeerJColors from "../journal-colors";
import detectVuetifyTheme from "../utils/detect-vuetify-theme";

const peerjColors = new PeerJColors();

export default {
  components: { VBtn },
  name: "basic-button",
};
</script>
