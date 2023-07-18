import FileUpload from "@/components/FileUpload";
import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";

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
});

const Settings = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Navbar pageName="Settings" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" p="4">
        <Stack mt="72px" mb="16px">
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
          }}
          validationSchema={settingsValidation}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Stack justify="space-between" h="calc(100vh - 350px)">
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
                    placeholder: "Anshu",
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
                    placeholder: "Raj",
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
                    placeholder: "+91 7277006234",
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
                    placeholder: "xmodzbot@gmail.com",
                  }}
                />
              </Stack>
              <Flex w="full" justify="center">
                <Button w="85%" h="60px" bg="brand.red" type="submit">
                  UPDATE
                </Button>
              </Flex>
            </Stack>
            <Flex p={4} mt={6} justify="space-between">
              <Link href={ROUTES.HOME}>
                <Text textStyle="p" fontWeight="normal">
                  Home
                </Text>
              </Link>

              <Link href={ROUTES.CHANGE_PASSWORD}>
                <Text textStyle="p" fontWeight="normal">
                  Change Password?
                </Text>
              </Link>
            </Flex>
          </Form>
        </Formik>

        <Box
          position="fixed"
          bottom="0"
          left="0"
          width="100%"
          height="5px"
          bg="brand.red"
        />
      </Flex>
    </>
  );
};

export default Settings;
