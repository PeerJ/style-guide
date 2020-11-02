// rgba value calculated using https://www.quanzhanketang.com/colors/colors_hwb.html

export const RGBJournalColors = {
  peerj: {
    rgb: { r: 11, g: 214, b: 111 },
    rgba: { r: 0, g: 207, b: 102, a: 0.9 },
  },
  bio: {
    rgb: { r: 2, g: 167, b: 252 },
    rgba: { r: 0, g: 156, b: 242, a: 0.9 },
  },
  physicalChem: {
    rgb: { r: 85, g: 134, b: 227 },
    rgba: { r: 0, g: 75, b: 217, a: 0.7 },
  },
  organicChem: {
    rgb: { r: 117, g: 112, b: 197 },
    rgba: { r: 13, g: 0, b: 156, a: 0.56 },
  },
  inorganicChem: {
    rgb: { r: 134, g: 94, b: 164 },
    rgba: { r: 68, g: 0, b: 117, a: 0.66 },
  },
  analyticalChem: {
    rgb: { r: 137, g: 74, b: 130 },
    rgba: { r: 91, g: 1, b: 86, a: 0.74 },
  },
  materialsScience: {
    rgb: { r: 132, g: 60, b: 98 },
    rgba: { r: 97, g: 0, b: 52, a: 0.8 },
  },
  chemistry: {
    rgb: { r: 143, g: 39, b: 85 },
    rgba: { r: 130, g: 0, b: 57, a: 0.89 },
  },
  preprints: {
    rgb: { r: 250, g: 157, b: 43 },
    rgba: { r: 150, g: 137, b: 0, a: 0.87 },
  },
  computerScience: {
    rgb: { r: 255, g: 248, b: 94 },
    rgba: { r: 255, g: 242, b: 0, a: 0.7 },
  },
};

export class journalColor {
  constructor(color) {
    this.color = Object.assign(color);
    this.rgb = this.color.rgb;
    this.rgba = this.color.rgba;
    this.rgb.string = `rgb(${this.color.rgb.r},${this.color.rgb.g},${this.color.rgb.b})`;
    this.rgb.array = [this.color.rgb.r, this.color.rgb.g, this.color.rgb.b];
    this.rgba.string = `rgba(${this.color.rgba.r},${this.color.rgba.g},${this.color.rgba.b}, ${this.color.rgba.a})`;
    this.rgba.array = [
      this.color.rgba.r,
      this.color.rgba.g,
      this.color.rgba.b,
      this.color.rgba.a,
    ];
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
