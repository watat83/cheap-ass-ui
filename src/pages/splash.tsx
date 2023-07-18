import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const Splash = () => {
  return (
    <>
      <Flex
        direction="column"
        justify="space-between"
        minHeight="100vh"
        position="relative"
      >
        <Flex
          justify="center"
          align="center"
          mt={"250px"}
          w="full"
          height="100%"
        >
          <VStack spacing={0}>
            <Image
              boxSize="150px"
              src="/assets/images/Donkey_Cartoon_Mascot.jpg"
              borderRadius="50%"
            />
          </VStack>
        </Flex>

        <Box position="absolute" bottom="0" w="full">
          <Image src="/assets/images/map.png" />
          <Box height="5px" bg="brand.red" w="full"></Box>
        </Box>
      </Flex>
    </>
  );
};

export default Splash;
