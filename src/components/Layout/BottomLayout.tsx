import { Box, HStack } from "@chakra-ui/react";
import { FC } from "react";

interface IBottomLayoutProps {
  children: React.ReactNode;
}

const BottomLayout: FC<IBottomLayoutProps> = ({ children }) => {
  return (
    <HStack
      width="full"
      position="fixed"
      bottom={0}
      left={0}
      justify="space-between"
      py={6}
      px={10}
      bg="brand.darkGray"
    >
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="5px"
        bg="brand.red"
      />
      {children}
    </HStack>
  );
};
export default BottomLayout;
