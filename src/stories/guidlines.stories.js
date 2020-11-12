import StyleGuideLayers from "../components/StyleGuideLayers";
import StyleGuideBannerLoad from "../components/StyleGuideBannerLoad";

export default {
  title: "Style Guidelines",
};

export const ColorLayering = () => ({
  components: { StyleGuideLayers },
  template: `<StyleGuideLayers />`,
});

export const BannerExample = () => ({
  components: { StyleGuideBannerLoad },
  template: `<StyleGuideBannerLoad />`,
});
