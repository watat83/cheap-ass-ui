import { ThemeOverride } from "@chakra-ui/react";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
  styles: {
    global: {
      body: {},
    },
  },
} as GlobalStyles;
