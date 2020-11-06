const { default: vuetify } = require("../plugins/vuetify");

import PeerjColors from "../journal-colors";

export default function detectVuetifyTheme($vuetify) {
  const theme = $vuetify.theme.themes.light;
  const peerJColors = new PeerjColors();
  for (const key in peerJColors) {
    if (theme?.primary === peerJColors[key].rgb.hexString) {
      return key;
    }
  }
  return "peerj";
}
