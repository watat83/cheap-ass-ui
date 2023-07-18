import { StyleFunctionProps } from "@chakra-ui/react";

const variants = {
  filled: (props: StyleFunctionProps) => {
    return {
      field: {
        bg: "brand.darkGray",
        borderRadius: "999px",
        outline: "none",
        fontFamily: "body",
        focusBorderColor: "transparent",
        _focus: { outline: "none", bg: "brand.darkGray" },
        _active: { outline: "none", bg: "brand.darkGray" },
        _placeholder: { fontSize: "12px" },
        border: "none",

        _invalid: {
          borderColor: "red.400",
        },
      },
    };
  },

  compound: (props: StyleFunctionProps) => {
    return {
      field: {
        bg: "transparent",
        outline: "none",
        fontFamily: "body",
        focusBorderColor: "transparent",
        _focus: { outline: "none", bg: "brand.darkGray" },
        _active: { outline: "none", bg: "brand.darkGray" },
        _placeholder: { fontSize: "12px" },
        border: "none",

        _invalid: {
          borderColor: "red.400",
          bg: "red.50",
        },
      },
    };
  },
};

const sizes = {
  lg: {
    field: {
      fontSize: "md",
      borderRadius: "lg",
    },
  },
};

const input = {
  variants,
  sizes,
  defaultProps: {
    colorScheme: "gray",
  },
};

export default input;
