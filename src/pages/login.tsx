import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { useRouter } from "next/router";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const router = useRouter();
  const { toggleSidebar } = useSidebar();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Navbar bg="none" pageName="" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" justify="space-between" minH="calc(100vh)">
        <VStack spacing={0} px={4}>
          <Image
            mt={"40px"}
            height="150px"
            width="150px"
            borderRadius={"50%"}
            src="/assets/images/Donkey_Cartoon_Mascot.jpg"
            mb="40px"
          />

          <Flex mb="48px" direction="column">
            <Text textAlign="center" mb={4} textStyle="h2">
              Welcome Back!
            </Text>
            <Text textAlign="center" textStyle="p">
              Please login to your account
            </Text>
          </Flex>

          <Formik
            initialValues={initialValues}
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
                    borderRadius={"999px"}
                    px={4}
                  >
                    <Text w="100px" mr={2} textStyle="p">
                      Email
                    </Text>
                    <Field
                      type="email"
                      name="email"
                      as={Input}
                      variant="compound"
                      placeholder="info.john@gmail.com"
                    />
                  </Flex>
                  <ErrorMessage name="email" component={Text} color="red.500" />

                  {/* Password */}
                  <Flex
                    align="center"
                    w="100%"
                    height="60px"
                    bg="brand.darkGray"
                    borderRadius="full"
                    px={4}
                  >
                    <Text w="100px" mr={2} textStyle="p">
                      Password
                    </Text>
                    <Field
                      type="password"
                      name="password"
                      as={Input}
                      variant="compound"
                      placeholder="*********************"
                    />

                    <Text textDecoration="underline" mr={2} textStyle="p">
                      Forgot?
                    </Text>
                  </Flex>
                  <ErrorMessage
                    name="password"
                    component={Text}
                    color="red.500"
                  />

                  <Flex w="full" justify="center">
                    <Button
                      type="submit"
                      w="85%"
                      h="60px"
                      bg="brand.red"
                      isLoading={isSubmitting}
                    >
                      LOG IN
                    </Button>
                  </Flex>

                  <Text textAlign="center" textStyle="p" fontWeight="normal">
                    Don't have an account?{" "}
                    <Text as="span" color="brand.red">
                      Register Now
                    </Text>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </VStack>

        <Box position="relative" h="5px" bg="brand.red">
          <Box position="absolute" bottom="0" left="0">
            <Image src="/assets/images/map.png" />
            <Text
              textStyle="p"
              textDecoration="underline"
              position="absolute"
              bottom="5"
              left="5"
              onClick={() => router.push("/")}
            >
              Home
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
