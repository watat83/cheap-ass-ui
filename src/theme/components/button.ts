const baseStyle = {
  py: "10px",
  minH: "40px",
  borderRadius: "100px",
  textTranform: "uppercase",
  fontWeight: "normal",
  lineHeight: "20px",
  fontFamily: "body",
};

const variants = {
  primary: {
    px: "35px",
    fontSize: "16px",
    color: "white",
    textTransform: "uppercase",
    _focus: {},
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
