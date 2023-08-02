import BackgroundLayout from "@/components/Layout/BackgroundLayout/BackgroundLayout";
import { Flex, Grid, Image, VStack } from "@chakra-ui/react";

const Splash = () => {
  return (
    <>
      <Flex
        direction="column"
        minH="100vh"
        w="100%"
        bg="brand.dark"
        color="brand.white"
        maxW="md"
        mx="auto"
      >
        <BackgroundLayout>
          <Grid placeItems="center" mt="250px" w="full">
            <VStack spacing={0}>
              <Image
                boxSize="150px"
                src="/assets/images/donkey_logo.webp"
                borderRadius="50%"
              />
            </VStack>
          </Grid>
        </BackgroundLayout>
      </Flex>
    </>
  );
};

export default Splash;
