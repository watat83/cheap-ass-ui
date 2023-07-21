import { Box, HStack, StackProps } from "@chakra-ui/react";
import { FC } from "react";

interface IBottomLayoutProps extends StackProps {
  children: React.ReactNode;
  showRedBar?: boolean;
  transparent?: boolean;
}

const BottomLayout: FC<IBottomLayoutProps> = ({
  children,
  showRedBar = false,
  transparent,
  ...rest
}) => {
  return (
    <>
      <HStack
        width="full"
        position="fixed"
        bottom={0}
        right="50%"
        transform="translateX(50%)"
        justify="space-between"
        py={6}
        px={10}
        bg={transparent ? "transparent" : "brand.darkGray"}
        maxW="md"
        {...rest}
      >
        {showRedBar && (
          <Box
            position="absolute"
            bottom="0"
            left="0"
            w="100%"
            h="5px"
            bg="brand.red"
          />
        )}
        {children}
      </HStack>
    </>
  );
};
export default BottomLayout;
