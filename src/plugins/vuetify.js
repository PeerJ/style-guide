import Vue from "vue";
import Vuetify from "vuetify/lib";
import PeerJTheme from "./peerj-vuetify-theme";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: PeerJTheme,
    },
  },
});
