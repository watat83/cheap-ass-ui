import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";
import HomeLink from "@/components/HomeLink";
import BottomLayout from "@/components/Layout/BottomLayout";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const ForgotPassword = () => {
  const { toggleSidebar } = useSidebar();
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Navbar bg="none" pageName="" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" justify="space-between">
        <Stack px={4}>
          <VStack>
            <Image
              boxSize="150px"
              borderRadius="50%"
              src="/assets/images/donkey_logo.webp"
            />

            <Flex direction="column">
              <Text textAlign="center" my={8} textStyle="h2">
                Forgot Password
              </Text>
              <Text textAlign="center" textStyle="p" maxW="280px" mb="8">
                Please enter the email address associated with your account. We
                will email you a link to reset your password.
              </Text>
            </Flex>
          </VStack>

          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={5}>
                  <FormInputWrappper
                    type="input"
                    name="email"
                    leftElement={"Enter Email"}
                    leftElementProps={{
                      w: "120px",
                      display: "flex",
                      justifyContent: "start",
                    }}
                    inputProps={{
                      pl: 24,
                      placeholder: "Test@gmail.com",
                    }}
                  />

                  <Flex w="full" justify="center">
                    <Button
                      mt="80px"
                      type="submit"
                      w="85%"
                      h="60px"
                      bg="brand.red"
                      isLoading={isSubmitting}
                    >
                      SEND RESET LINK
                    </Button>
                  </Flex>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>

        <Box position="absolute" bottom="0">
          <Image src="/assets/images/map.png" />
        </Box>
        <BottomLayout showRedBar transparent>
          <HomeLink />
        </BottomLayout>
      </Flex>
    </>
  );
};

export default ForgotPassword;
