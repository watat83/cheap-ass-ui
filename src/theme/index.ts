import { ThemeConfig, extendTheme } from "@chakra-ui/react";
// import "focus-visible/dist/focus-visible";
import * as components from "./components";
import * as foundations from "./foundations";
import textStyles from "./textStyles";

const theme = extendTheme({
  ...foundations,

  components: {
    ...components,

    Textarea: {
      baseStyle: {
        _focus: {
          border: "1px solid #EEEEF4",
        },
      },
    },
  },
  textStyles,

  // config: {
  //   useSystemColorMode: false,
  //   initialColorMode: "light",
  // },
} as ThemeConfig);

export default theme;
