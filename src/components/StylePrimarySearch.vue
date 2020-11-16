<template>
  <div class="" :style="{ position: 'relative' }">
    <v-text-field
      class="rounded-0 black-text"
      solo
      clearable
      prepend-inner-icon="mdi-magnify"
      @focus="handleFocus"
      @blur="handleBlur"
      color="grey"
      v-bind="$attrs"
      hide-details="auto"
      flat
      dense
    >
    </v-text-field>
    <div
      :style="{
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: `${background} !important`,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
        opacity: showHighlight ? '1' : '0',
        transition: 'opacity .5s',
      }"
    />
  </div>
</template>
<script>
import { VTextField } from "vuetify/lib";
import PeerJColors from "../journal-colors";
import detectVuetifyTheme from "../utils/detect-vuetify-theme";
const peerjColors = new PeerJColors();
export default {
  components: { VTextField },
  name: "primary-search",
  computed: {
    background: function() {
      const themeName = detectVuetifyTheme(this.$vuetify);
      return peerjColors[themeName].rgba.string;
    },
  },
  data() {
    return {
      showHighlight: true,
    };
  },
  methods: {
    handleFocus() {
      this.showHighlight = false;
    },
    handleBlur() {
      console.log("handleFocus");
      this.showHighlight = true;
    },
  },
};
</script>
<style scoped></style>
