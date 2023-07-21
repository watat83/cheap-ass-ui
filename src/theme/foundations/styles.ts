import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: "blackAlpha.900",
    },
    "*::placeholder": {
      opacity: 1,
      color: "muted",
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "gray.700")(props),
    },
  }),
};

export default styles;
