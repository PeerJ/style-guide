// export const translucentDecorator = (storyCb, context) => ({
//   props: {
//     backgroundMode: { default: context.globals.backgroundMode },
//   },
//   render(h) {
//     console.log("context", context);
//     console.log("backgroundMode", backgroundMode);
//     return (
//       <div style={{}}>
//         {context.globals.backgroundMode == "transparency" && (
//           <div
//             style={{
//               width: "200px",
//               height: "200px",
//               background: "lime",
//               position: "absolute",
//               top: "50px",
//               left: "100px",
//             }}
//           ></div>
//         )}
//         <story />
//       </div>
//     );
//   },
// });

export const translucentDecorator = (storyCb, context) => ({
  template: `
    <div>
        <div
            v-if="backgroundMode === 'banner'"
            :style="{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
            }"
        >
        <img :src="imgSrc" :style="{maxWidth: '100%', objectFit: 'contain'}"/>
        </div>
        <story />
    </div>`,
  props: {
    backgroundMode: { default: context.globals.backgroundMode },
  },
  computed: {
    imgSrc() {
      return require("../assets/4004-green.jpg");
    },
  },
  //   data() {
  //     console.log("context", context.globals.backgroundMode);
  //     return {
  //       context: context,
  //       backgroundMode: context.globals.backgroundMode,
  //     };
  //   },
});
