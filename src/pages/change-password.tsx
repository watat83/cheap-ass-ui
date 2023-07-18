import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { Box, Button, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

const validationSchema = Yup.object({
  oldPassword: Yup.string().required("Old password is required"),
  newPassword: Yup.string().required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

const ChangePassword = () => {
  const router = useRouter();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <Navbar pageName="Change Password" toggleRightCollapse={toggleSidebar} />
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
        {({ isSubmitting }) => (
          <Form>
            <Flex
              id="change-password"
              mt="72px"
              direction="column"
              justify="space-between"
              h="calc(100vh - 72px)"
            >
              <Flex direction="column" justify="space-between" flexGrow={1}>
                <Stack spacing={6} px="4">
                  <Text w="85%" textAlign="center" textStyle="p">
                    You can change your password for security reasons or reset
                    it if you forget it.
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
                      <Stack>
                        <Stack spacing={4} height="calc(100vh - 270px)">
                          <FormInputWrappper
                            type="input"
                            name="oldPassword"
                            leftElement={"Old Password:"}
                            leftElementProps={{
                              fontSize: "15px",
                              pl: 0,
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
                              fontSize: "15px",
                              pl: 0,
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
                              fontSize: "15px",
                              pl: 0,
                              w: "150px",
                            }}
                            inputProps={{
                              type: "password",
                              pl: 36,
                              placeholder: "*************",
                            }}
                          />
                        </Stack>
                        <Box>
                          <Flex w="full" justify="center">
                            <Button w="85%" h="60px" bg="brand.red">
                              UPDATE PASSWORD
                            </Button>
                          </Flex>
                          <Flex mb={6} px={4} mt={6}>
                            <Text
                              onClick={() => router.push("/")}
                              textStyle={"p"}
                            >
                              Home
                            </Text>
                          </Flex>
                        </Box>
                      </Stack>
                    </Form>
                  </Formik>
                </Stack>
              </Flex>
            </Flex>

            <Box
              position="fixed"
              bottom="0"
              left="0"
              width="100%"
              height="5px"
              bg="brand.red"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangePassword;
