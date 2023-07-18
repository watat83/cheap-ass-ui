import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const BeforeAuth = () => {
  const router = useRouter();
  return (
    <>
      <Flex
        direction="column"
        justify="space-between"
        minHeight="100vh"
        position="relative"
      >
        <Center mt={"150px"} w="full" height="100%">
          <VStack spacing={0}>
            <Image
              boxSize="150px"
              src="/assets/images/Donkey_Cartoon_Mascot.jpg"
              borderRadius="50%"
              mb={"40px"}
            />

            <Flex mb={"14px"} w="full" justify="center">
              <Button
                onClick={() => router.push("/login")}
                w="240px"
                h="60px"
                bg="brand.red"
              >
                LOG IN
              </Button>
            </Flex>

            <Flex mb={"22px"} w="full" justify="center">
              <Button
                onClick={() => router.push("/register")}
                w="240px"
                h="60px"
                bg="brand.dark"
              >
                REGISTER NOW
              </Button>
            </Flex>

            <Text textStyle="p" fontWeight="normal">
              Continue with Guest
            </Text>
          </VStack>
        </Center>

        <Box position="absolute" bottom="0" w="full">
          <Image src="/assets/images/map.png" />
          <Box height="5px" bg="brand.red" w="full"></Box>
        </Box>
      </Flex>
    </>
  );
};

export default BeforeAuth;
