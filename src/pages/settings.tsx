import FileUpload from "@/components/FileUpload";
import FormCheckbox from "@/components/FormCheckbox/FormCheckbox";
import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  Grid,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";
import { useState } from "react";

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
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  const { toggleSidebar } = useSidebar();

  const checkboxOptions = [
    {
      value: "dominos",
      label: "Domino's",
    },
    {
      value: "Gopuff",
      label: "Gopuff",
    },
    {
      value: "Grubhub",
      label: "Grubhub",
    },
    {
      value: "Instacart",
      label: "Instacart",
    },
    {
      value: "papa-johns",
      label: "Papa John's",
    },
    {
      value: "pizza-hut",
      label: "Pizza Hut",
    },
    {
      value: "Roadie",
      label: "Roadie",
    },
    {
      value: "Roadie",
      label: "Roadie",
    },
    {
      value: "Shipt",
      label: "Shipt",
    },
    {
      value: "Spark",
      label: "Spark",
    },
    {
      value: "uber",
      label: "Uber",
    },
  ];

  return (
    <>
      <Navbar pageName="Settings" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" p="4" mb="16">
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
            platforms: [],
          }}
          validationSchema={settingsValidation}
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
                  <Field name="platforms">
                    {({ meta, field }: FieldProps) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <CheckboxGroup
                          defaultValue={field.value}
                          onChange={(values) => {
                            console.log(values);
                            setCheckedItems(values as any);
                          }}
                        >
                          <Grid
                            gridTemplateColumns={{
                              base: "1fr 1fr",
                            }}
                          >
                            <FormCheckbox
                              checkboxOptions={checkboxOptions}
                              name="platforms"
                              label={<>Platforms</>}
                              // icon={<CustomCheckBoxIcon />}
                              variant="rounded"
                            />
                          </Grid>
                        </CheckboxGroup>
                      </FormControl>
                    )}
                  </Field>
                </Box>
              </Stack>
              <Flex w="full" justify="center">
                <Button w="85%" h="60px" bg="brand.red" type="submit">
                  UPDATE
                </Button>
              </Flex>
            </Stack>
          </Form>
        </Formik>
      </Flex>
      <Flex
        p={4}
        mt={6}
        justify="space-between"
        pos="fixed"
        bottom="0"
        bg="brand.darkGray"
        w="full"
      >
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

export default Settings;
