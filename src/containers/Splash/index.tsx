import BackgroundLayout from "@/components/Layout/BackgroundLayout/BackgroundLayout";
import { Grid, Image, VStack } from "@chakra-ui/react";

const Splash = () => {
  return (
    <>
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
    </>
  );
};

export default Splash;
