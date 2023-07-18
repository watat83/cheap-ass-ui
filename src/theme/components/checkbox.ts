import { ComponentStyleConfig } from "@chakra-ui/react";

const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    control: {
      _checked: {
        bg: "brand.pink",
        borderColor: "brand.pink",
        color: "white",
      },
    },
    icon: {
      color: "white",
    },
    label: {
      textStyle: "p4",
      _hover: {
        color: "brand.pink",
      },
    },
  },

  defaultProps: {
    size: "lg",
  },
};

export default Checkbox;
