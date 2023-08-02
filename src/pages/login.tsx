import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";
import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import HomeLink from "@/components/HomeLink";
import BottomLayout from "@/components/Layout/BottomLayout";

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
      <Flex direction="column" justify="space-between">
        <Stack spacing={0} px={4}>
          <VStack>
            <Image
              height="150px"
              width="150px"
              borderRadius={"50%"}
              src="/assets/images/donkey_logo.webp"
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
          </VStack>

          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={5}>
                  <FormInputWrappper
                    type="input"
                    name="email"
                    leftElement={"Email"}
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
                  <FormInputWrappper
                    type="input"
                    name="email"
                    leftElement={"Password"}
                    leftElementProps={{
                      fontSize: "15px",
                      pl: 0,
                      w: "100px",
                    }}
                    inputProps={{
                      pl: 24,
                      placeholder: "*************",
                    }}
                  />
                  <Flex justify="end">
                    <Link href={ROUTES.FORGOT_PASSWORD}>
                      <Text textStyle="p">Forgot Password?</Text>
                    </Link>
                  </Flex>

                  <Flex w="full" justify="center">
                    <Button
                      type="submit"
                      w="85%"
                      h="60px"
                      bg="brand.red"
                      borderRadius="md"
                      isLoading={isSubmitting}
                    >
                      LOG IN
                    </Button>
                  </Flex>

                  <Text textAlign="center" textStyle="p" fontWeight="normal">
                    Don't have an account?{" "}
                    <Link href={ROUTES.REGISTER}>
                      <Text as="span" color="brand.red">
                        Register Now
                      </Text>
                    </Link>
                  </Text>
                  <Link href={ROUTES.HOME} textAlign="center">
                    Continue as Guest
                  </Link>
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

export default Login;
