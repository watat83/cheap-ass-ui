import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  oldPassword: Yup.string().required("Old password is required"),
  newPassword: Yup.string().required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

const ChangePassword = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <Navbar pageName="Change Password" toggleRightCollapse={toggleSidebar} />
      <Box mt="72px" w="full">
        <Text
          maxW="280px"
          textAlign="center"
          textStyle="p"
          w="full"
          mx="auto"
          my="6"
        >
          You can change your password for security reasons or reset it if you
          forget it.
        </Text>
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Stack justify="space-between" h="calc(100vh - 250px)" px="4">
              <Stack spacing="4">
                <FormInputWrappper
                  type="input"
                  name="oldPassword"
                  leftElement={"Old Password:"}
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
                  name="newPassword"
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
                <Button w="85%" h="60px" bg="brand.red" type="submit">
                  UPDATE PASSWORD
                </Button>
              </Flex>
            </Stack>
            <Flex p={4} mt={6} justify="space-between">
              <Link href={ROUTES.HOME}>
                <Text textStyle="p" fontWeight="normal">
                  Home
                </Text>
              </Link>
            </Flex>
          </Form>
        </Formik>
      </Box>

      <Box
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        height="5px"
        bg="brand.red"
      />
    </>
  );
};

export default ChangePassword;
