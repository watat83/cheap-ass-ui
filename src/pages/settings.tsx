import FileUpload from "@/components/FileUpload";
import FormCheckbox from "@/components/FormCheckbox/FormCheckbox";
import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";
import HomeLink from "@/components/HomeLink";
import BottomLayout from "@/components/Layout/BottomLayout";
import Navbar from "@/components/Navbar";
import { platforms } from "@/constant";
import { useSidebar } from "@/context/SidebarContext";
import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";

import * as Yup from "yup";

const settingsValidation = Yup.object().shape({
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
  platforms: Yup.array().min(1, "Select at least one platform"),
});

const Settings = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <Navbar pageName="Settings" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" p="4" mb="16">
        <Stack mb="16px">
          <HStack>
            <FileUpload />
            <Text ml={4} textStyle="h5">
              Alieshae Netlh
            </Text>
          </HStack>
          <Text textStyle="p" py="4">
            Welcome Alieshae Netlh!
          </Text>
        </Stack>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            platforms: [],
          }}
          // validationSchema={settingsValidation}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Stack justify="space-between">
              <Stack>
                <FormInputWrappper
                  type="input"
                  name="firstName"
                  leftElement={"First Name:"}
                  leftElementProps={{
                    w: "100px",
                  }}
                  inputProps={{
                    pl: 24,
                    placeholder: "john",
                  }}
                />
                <FormInputWrappper
                  type="input"
                  name="lastName"
                  leftElement={"Last Name:"}
                  leftElementProps={{
                    w: "100px",
                  }}
                  inputProps={{
                    pl: 24,
                    placeholder: "doe",
                  }}
                />
                <FormInputWrappper
                  type="input"
                  name="phone"
                  leftElement={"Cell Phone:"}
                  leftElementProps={{
                    w: "100px",
                  }}
                  inputProps={{
                    type: "tel",
                    pl: 24,
                    placeholder: "+123456789",
                  }}
                />
                <FormInputWrappper
                  type="input"
                  name="email"
                  leftElement={"Your Email:"}
                  leftElementProps={{
                    w: "100px",
                  }}
                  inputProps={{
                    type: "email",
                    pl: 24,
                    placeholder: "johndoe@gmail.com",
                  }}
                />

                <Box pl="4" pb="4">
                  <FormCheckbox
                    checkboxOptions={platforms}
                    name="platforms"
                    label={<>Platforms</>}
                    // icon={<CustomCheckBoxIcon />}
                    variant="rounded"
                  />
                </Box>
              </Stack>
              <Flex w="full" justify="center">
                <Button
                  w="85%"
                  borderRadius="md"
                  h="60px"
                  bg="brand.red"
                  type="submit"
                >
                  UPDATE
                </Button>
              </Flex>
            </Stack>
          </Form>
        </Formik>
      </Flex>
      <BottomLayout showRedBar>
        <HomeLink />

        <Link href={ROUTES.CHANGE_PASSWORD}>
          <Button variant="link">Change Password</Button>
        </Link>
      </BottomLayout>
    </>
  );
};

export default Settings;
