import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import PeerJTheme from "./peerj-vuetify-theme";

Vue.use(Vuetify);

export default new Vuetify({
  //   customVariables: ["~/sccs/variables.scss"],
  treeShake: true,
  //   defaultAssets: {
  //     font: {
  //       family: "Libre Baskerville",
  //     },
  //   },
  theme: {
    options: { customProperties: true },
    themes: {
      light: PeerJTheme,
    },
  },
});
