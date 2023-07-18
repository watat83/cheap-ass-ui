import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
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
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  cellPhone: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

const Register = () => {
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
            mt={"40px"}
            height="90px"
            width="90px"
            src="/assets/images/defaultAvatar.png"
          />

          <Flex direction="column">
            <Text textAlign="center" mb={4} textStyle="h2">
              Create a new account
            </Text>
            <Text textAlign="center" textStyle="p">
              Please fill in the form to continue
            </Text>
          </Flex>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              cellPhone: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={5}>
                  {/* First Name */}
                  <Flex
                    align="center"
                    w="100%"
                    height="60px"
                    bg="brand.darkGray"
                    borderRadius={"999px"}
                    px={4}
                  >
                    <Text w="100px" mr={2} textStyle="p1">
                      First Name
                    </Text>
                    <Field
                      type="text"
                      name="firstName"
                      as={Input}
                      variant="compound"
                      placeholder=""
                    />
                  </Flex>
                  <ErrorMessage
                    name="firstName"
                    component={Text}
                    color="red.500"
                  />

                  {/* Last Name */}
                  <Flex
                    align="center"
                    w="100%"
                    height="60px"
                    bg="brand.darkGray"
                    borderRadius={"999px"}
                    px={4}
                  >
                    <Text w="100px" mr={2} textStyle="p1">
                      Last Name
                    </Text>
                    <Field
                      type="text"
                      name="lastName"
                      as={Input}
                      variant="compound"
                      placeholder=""
                    />
                  </Flex>
                  <ErrorMessage
                    name="lastName"
                    component={Text}
                    color="red.500"
                  />

                  {/* Cell Phone */}
                  <Flex
                    align="center"
                    w="100%"
                    height="60px"
                    bg="brand.darkGray"
                    borderRadius={"999px"}
                    px={4}
                  >
                    <Text w="100px" mr={2} textStyle="p1">
                      Cell Phone
                    </Text>
                    <Field
                      type="text"
                      name="cellPhone"
                      as={Input}
                      variant="compound"
                      placeholder="#"
                    />
                  </Flex>
                  <ErrorMessage
                    name="cellPhone"
                    component={Text}
                    color="red.500"
                  />

                  {/* Email */}
                  <Flex
                    align="center"
                    w="100%"
                    height="60px"
                    bg="brand.darkGray"
                    borderRadius={"999px"}
                    px={4}
                  >
                    <Text w="100px" mr={2} textStyle="p1">
                      Email
                    </Text>
                    <Field
                      type="text"
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
                    borderRadius={"999px"}
                    px={4}
                  >
                    <Text w="100px" mr={2} textStyle="p1">
                      Password
                    </Text>
                    <Field
                      type="password"
                      name="password"
                      as={Input}
                      variant="compound"
                      placeholder="*********************"
                    />
                  </Flex>
                  <ErrorMessage
                    name="password"
                    component={Text}
                    color="red.500"
                  />

                  {/* Confirm Password */}
                  <Flex
                    align="center"
                    w="100%"
                    height="60px"
                    bg="brand.darkGray"
                    borderRadius={"999px"}
                    px={4}
                  >
                    <Text w="180px" mr={2} textStyle="p1">
                      Confirm Password
                    </Text>
                    <Field
                      type="password"
                      name="confirmPassword"
                      as={Input}
                      variant="compound"
                      placeholder="*********************"
                    />
                  </Flex>
                  <ErrorMessage
                    name="confirmPassword"
                    component={Text}
                    color="red.500"
                  />

                  <Flex w="full" justify="center">
                    <Box w="80%">
                      <Checkbox size="sm">
                        <Text as="span" textStyle="p2">
                          Agree to our Terms & Conditions and Privacy Policy
                        </Text>
                      </Checkbox>
                    </Box>
                  </Flex>

                  <Flex w="full" justify="center">
                    <Button
                      type="submit"
                      w="85%"
                      h="60px"
                      bg="brand.red"
                      isLoading={isSubmitting}
                    >
                      REGISTER
                    </Button>
                  </Flex>
                </Stack>
              </Form>
            )}
          </Formik>
        </VStack>

        <Box position="relative">
          {/* Red line at the bottom */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            w="100%"
            h="5px"
            bg="brand.red"
          />

          <Flex mb={6} px={4} mt={6} justify="space-between">
            <Text textStyle={"p"} onClick={() => router.push("/")}>
              Home
            </Text>

            <Text textAlign="center" textStyle="p" fontWeight="normal">
              Have an account?{" "}
              <Text
                onClick={() => router.push("/login")}
                as="span"
                color="brand.red"
              >
                Login
              </Text>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Register;
