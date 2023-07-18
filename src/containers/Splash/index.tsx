import BackgroundLayout from "@/components/BackgroundLayout/BackgroundLayout";
import { Grid, Image, VStack } from "@chakra-ui/react";

const Splash = () => {
  return (
    <>
      <BackgroundLayout>
        <Grid placeItems="center" mt="250px" w="full">
          <VStack spacing={0}>
            <Image
              boxSize="150px"
              src="/assets/images/Donkey_Cartoon_Mascot.jpg"
              borderRadius="50%"
            />
          </VStack>
        </Grid>
      </BackgroundLayout>
    </>
  );
};

export default Splash;
