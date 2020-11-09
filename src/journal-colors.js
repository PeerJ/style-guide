// rgba value calculated using https://www.quanzhanketang.com/colors/colors_hwb.html
import colorConvert from "color-convert";

export const RGBJournalColors = {
  peerj: {
    rgb: { r: 11, g: 214, b: 111 },
    rgba: { r: 0, g: 204, b: 101, a: 0.85 },
  },
  bio: {
    rgb: { r: 2, g: 167, b: 252 },
    rgba: { r: 0, g: 151, b: 235, a: 0.85 },
  },
  physicalChem: {
    rgb: { r: 85, g: 134, b: 227 },
    rgba: { r: 56, g: 112, b: 220, a: 0.85 },
  },
  organicChem: {
    rgb: { r: 117, g: 112, b: 197 },
    rgba: { r: 95, g: 87, b: 183, a: 0.85 },
  },
  inorganicChem: {
    rgb: { r: 134, g: 94, b: 164 },
    rgba: { r: 111, g: 65, b: 144, a: 0.85 },
  },
  analyticalChem: {
    rgb: { r: 137, g: 74, b: 130 },
    rgba: { r: 113, g: 40, b: 105, a: 0.85 },
  },
  materialsScience: {
    rgb: { r: 132, g: 60, b: 98 },
    rgba: { r: 109, g: 24, b: 69, a: 0.85 },
  },
  chemistry: {
    rgb: { r: 143, g: 39, b: 85 },
    rgba: { r: 130, g: 0, b: 57, a: 0.85 },
  },
  preprints: {
    rgb: { r: 250, g: 157, b: 43 },
    rgba: { r: 250, g: 138, b: 0, a: 0.85 },
  },
  computerScience: {
    rgb: { r: 255, g: 248, b: 94 },
    rgba: { r: 251, g: 241, b: 50, a: 0.85 },
  },
};

export class journalColor {
  constructor(color) {
    this.color = Object.assign(color);
    this.rgb = this.color.rgb;
    this.rgba = this.color.rgba;
    this.rgb.string = `rgb(${this.color.rgb.r},${this.color.rgb.g},${this.color.rgb.b})`;
    this.rgb.hexString = colorConvert.rgb.hex(
      this.color.rgb.r,
      this.color.rgb.g,
      this.color.rgb.b
    );
    this.rgb.array = [this.color.rgb.r, this.color.rgb.g, this.color.rgb.b];
    this.rgba.string = `rgba(${this.color.rgba.r},${this.color.rgba.g},${this.color.rgba.b}, ${this.color.rgba.a})`;
    this.rgba.array = [
      this.color.rgba.r,
      this.color.rgba.g,
      this.color.rgba.b,
      this.color.rgba.a,
    ];
    // console.log("this.rgb.hexString", this.rgb.hexString);
  }
}

export default class peerJColors {
  constructor() {
    this.peerj = new journalColor(RGBJournalColors.peerj);
    this.bio = new journalColor(RGBJournalColors.bio);
    this.physicalChem = new journalColor(RGBJournalColors.physicalChem);
    this.organicChem = new journalColor(RGBJournalColors.organicChem);
    this.inorganicChem = new journalColor(RGBJournalColors.inorganicChem);
    this.analyticalChem = new journalColor(RGBJournalColors.analyticalChem);
    this.materialsScience = new journalColor(RGBJournalColors.materialsScience);
    this.chemistry = new journalColor(RGBJournalColors.chemistry);
    this.preprints = new journalColor(RGBJournalColors.preprints);
    this.computerScience = new journalColor(RGBJournalColors.computerScience);
  }
}
