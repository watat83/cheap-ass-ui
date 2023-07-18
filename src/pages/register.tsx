import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Frist name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Last name is required")
    .required("Required"),
  phone: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),

  terms: Yup.boolean().oneOf([true], "Accept Terms & Conditions is required"),
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
              phone: "",
              email: "",
              password: "",
              confirmPassword: "",
              terms: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack>
                  <Stack spacing={4}>
                    <FormInputWrappper
                      type="input"
                      name="firstName"
                      leftElement={"First Name:"}
                      leftElementProps={{
                        w: "100px",
                      }}
                      inputProps={{
                        pl: 28,
                        placeholder: "Anshu",
                      }}
                    />
                    <FormInputWrappper
                      type="input"
                      name="lastName"
                      leftElement={"Last Name:"}
                      leftElementProps={{
                        w: "120px",
                      }}
                      inputProps={{
                        pl: 28,
                        placeholder: "Raj",
                      }}
                    />
                    <FormInputWrappper
                      type="input"
                      name="phone"
                      leftElement={"Cell Phone:"}
                      leftElementProps={{
                        w: "120px",
                      }}
                      inputProps={{
                        type: "tel",
                        pl: 28,
                        placeholder: "+91 7277006234",
                      }}
                    />
                    <FormInputWrappper
                      type="input"
                      name="email"
                      leftElement={"Your Email:"}
                      leftElementProps={{
                        w: "120px",
                      }}
                      inputProps={{
                        type: "email",
                        pl: 28,
                        placeholder: "xmodzbot@gmail.com",
                      }}
                    />
                    <FormInputWrappper
                      type="input"
                      name="password"
                      leftElement={"New Password:"}
                      leftElementProps={{
                        w: "120px",
                      }}
                      inputProps={{
                        pl: 32,
                        placeholder: "*************",
                      }}
                    />
                    <FormInputWrappper
                      type="input"
                      name="confirmPassword"
                      leftElement={"Confirm Password:"}
                      leftElementProps={{
                        w: "150px",
                      }}
                      inputProps={{
                        type: "password",
                        pl: 36,
                        placeholder: "*************",
                      }}
                    />
                  </Stack>

                  <Flex w="full" justify="center">
                    <Box w="80%">
                      <Field name="terms">
                        {({ meta, field }: FieldProps) => (
                          <FormControl
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <Checkbox size="sm" {...field}>
                              <Text
                                as="span"
                                textStyle="p2"
                                color={
                                  meta.error && meta.touched
                                    ? "red.400"
                                    : "brand.gray"
                                }
                              >
                                Agree to our Terms & Conditions and Privacy
                                Policy
                              </Text>
                            </Checkbox>
                          </FormControl>
                        )}
                      </Field>
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
