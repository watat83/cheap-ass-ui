import { Box, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";

interface IBackgroundLayoutProps {
  children: React.ReactNode;
}

const BackgroundLayout: FC<IBackgroundLayoutProps> = ({ children }) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      minHeight="100vh"
      position="relative"
    >
      {children}
      <Box position="absolute" bottom="0" w="full">
        <Image src="/assets/images/map.png" w="full" />
        <Box height="5px" bg="brand.red" w="full"></Box>
      </Box>
    </Flex>
  );
};
export default BackgroundLayout;
