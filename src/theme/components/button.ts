const baseStyle = {
  py: "10px",
  minH: "40px",
  borderRadius: "100px",
  textTranform: "uppercase",
  fontWeight: "normal",
  lineHeight: "20px",
};

const variants = {
  primary: {
    px: "35px",
    fontSize: "16px",
    color: "white",
    textTransform: "uppercase",
    _focus: {},
  },
  white: {
    color: "brand.dark",
    bg: "brand.white",
    fontSize: "16px",
    textTransform: "uppercase",
    px: "35px",
  },

  link: {
    color: "white",
    fontSize: "16px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    // textDecoration: "underline",
    _active: {
      color: "white",
    },
    // color: "brand.dark",
    // bg: "transparent",
    // fontSize: "16px",
    // textTransform: "uppercase",
    // px: "0px",
    // _hover: {
    //   bg: "transparent",
    // },
  },
};

const defaultProps = {
  variant: "primary",
};

const button = {
  baseStyle,
  variants,
  defaultProps,
};

export default button;
