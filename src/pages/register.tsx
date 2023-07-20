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
import FormCheckbox from "@/components/FormCheckbox/FormCheckbox";
import { platforms } from "@/constant";

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
  platforms: Yup.array().min(1, "Select at least one platform"),
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
              platforms: [],
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
                        placeholder: "John",
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
                        placeholder: "Doe",
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
                        placeholder: "+123456789",
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
                        placeholder: "johndoe@gmail.com",
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
                  <Box pl="4" pb="4">
                    <FormCheckbox
                      checkboxOptions={platforms}
                      name="platforms"
                      label={<>Platforms</>}
                      // icon={<CustomCheckBoxIcon />}
                      variant="rounded"
                    />
                  </Box>
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

                  <Flex w="full" justify="center" mb="16">
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
      </Flex>

      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="5px"
        bg="brand.red"
        zIndex="1"
      />
      <Flex
        p={4}
        mt={6}
        justify="space-between"
        pos="fixed"
        bottom="0"
        bg="brand.dark"
        w="full"
      >
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
    </>
  );
};

export default Register;
