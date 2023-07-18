import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

const validationSchema = Yup.object({
  oldPassword: Yup.string().required("Required"),
  newPassword: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Required"),
});

const ChangePassword = () => {
  const router = useRouter();
  const { toggleSidebar } = useSidebar();

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Navbar
            pageName="Change Password"
            toggleRightCollapse={toggleSidebar}
          />
          <Flex
            mt="72px"
            direction="column"
            justify="space-between"
            h="calc(100vh - 72px)"
          >
            <Flex direction="column" justify="space-between" flexGrow={1}>
              <VStack px={4} spacing={6}>
                <Text w="85%" textAlign="center" textStyle="p">
                  You can change your password for security reasons or reset it
                  if you forget it.
                </Text>

                <Stack spacing={3}>
                  {/* Old Password */}
                  <Flex
                    align="center"
                    w="100%"
                    height="60px"
                    bg="brand.darkGray"
                    borderRadius={"999px"}
                    px={4}
                  >
                    <Text w="180px" mr={2} textStyle="p1">
                      Old Password:
                    </Text>
                    <Field
                      type="password"
                      name="oldPassword"
                      as={Input}
                      variant="compound"
                      placeholder="*******************"
                    />
                  </Flex>
                  <ErrorMessage
                    name="oldPassword"
                    component={Text}
                    color="red.500"
                    mt={2}
                  />

                  {/* New Password */}
                  <Flex
                    align="center"
                    w="100%"
                    height="60px"
                    bg="brand.darkGray"
                    borderRadius={"999px"}
                    px={4}
                  >
                    <Text w="180px" mr={2} textStyle="p1">
                      New Password:
                    </Text>
                    <Field
                      type="password"
                      name="newPassword"
                      as={Input}
                      variant="compound"
                      placeholder="********************"
                    />
                  </Flex>
                  <ErrorMessage
                    name="newPassword"
                    component={Text}
                    color="red.500"
                    mt={2}
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
                      Confirm Password:
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
                    mt={2}
                  />
                </Stack>
              </VStack>

              <Flex w="full" justify="center">
                <Button
                  type="submit"
                  w="85%"
                  h="60px"
                  bg="brand.red"
                  isLoading={isSubmitting}
                >
                  UPDATE PASSWORD
                </Button>
              </Flex>
            </Flex>

            <Flex mb={6} px={4} mt={6}>
              <Text onClick={() => router.push("/")} textStyle={"p"}>
                Home
              </Text>
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
  );
};

export default ChangePassword;
