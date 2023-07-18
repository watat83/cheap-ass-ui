import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {},
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
