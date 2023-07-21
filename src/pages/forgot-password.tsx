import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const ForgotPassword = () => {
  const router = useRouter();
  const { toggleSidebar } = useSidebar();
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Navbar bg="none" pageName="" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" justify="space-between" h="100vh">
        <Stack px={4}>
          <VStack>
            <Image
              mt={"20px"}
              boxSize="150px"
              borderRadius="50%"
              src="/assets/images/logo.png"
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

        <Box
          position="fixed"
          bottom="0"
          left="0"
          width="100%"
          height="5px"
          bg="brand.red"
        />
        <Box position="relative">
          <Image src="/assets/images/map.png" />
          <Link href={ROUTES.HOME}>
            <Text textStyle={"p"} position="absolute" bottom={5} left={5}>
              Home
            </Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default ForgotPassword;
