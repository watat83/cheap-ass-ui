import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
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
import { Formik, Form, Field, ErrorMessage } from "formik";
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
        <VStack px={4}>
          <Image
            mt={"20px"}
            boxSize="150px"
            borderRadius="50%"
            src="/assets/images/Donkey_Cartoon_Mascot.jpg"
          />

          <Flex direction="column">
            <Text textAlign="center" mb={4} textStyle="h2">
              Forgot Password
            </Text>
            <Text textAlign="center" textStyle="p">
              Please enter the email address associated with your account. We
              will email you a link to reset your password.
            </Text>
          </Flex>

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
                  {/* Email */}
                  <Flex
                    align="center"
                    w="100%"
                    height="60px"
                    bg="brand.darkGray"
                    borderRadius="full"
                    px={4}
                  >
                    <Text w="100px" mr={2} textStyle="p">
                      Enter Email
                    </Text>
                    <Field
                      type="text"
                      name="email"
                      as={Input}
                      variant="compound"
                      placeholder=""
                    />
                  </Flex>
                  <ErrorMessage name="email" component={Text} color="red.500" />

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
        </VStack>

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
          <Text
            onClick={() => router.push("/")}
            textStyle={"p"}
            textDecoration={"underline"}
            position="absolute"
            bottom={5}
            left={5}
          >
            Home
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default ForgotPassword;
