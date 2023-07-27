import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import Select from "react-select";
import { Field, FieldProps, Form, Formik } from "formik";
import { number, object, string } from "yup";
import { useSidebar } from "@/context/SidebarContext";
import Navbar from "@/components/Navbar";
import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";
import { platforms, tipBaitOptions } from "@/constant";
import BottomLayout from "@/components/Layout/BottomLayout";
import HomeLink from "@/components/HomeLink";
import { SlCalender } from "react-icons/sl";
const styles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: "10px",
    height: "60px",
    padding: "0 20px",
    backgroundColor: "#212121",
    boxShadow: state.isFocused ? null : null,
    border: "none",
    borderColor: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? null : null,
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    color: "white",
    backgroundColor: state.data.color,
    fontSize: state.selectProps.myFontSize,
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: state.data.color,
    fontSize: state.selectProps.myFontSize,
  }),
  menuList: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "#212121",
  }),
};

const validationSchema = object({
  address: string().required("Please enter an address"),
  platform: object({
    value: string().max(20).required("Please select a platform"),
    label: string().required("Please select a platform"),
  }),

  note: string(),
  apt: string(),
  tipBait: object({
    value: string().required("Please select a tip bait"),
    label: string().required("Please select a tip bait"),
  }),

  date: string().required("Please select a date"),
  endTip: number().when("tipBait", ([tipBait], schema) => {
    if (
      tipBait.value === tipBaitOptions[0].value ||
      tipBait.value === tipBaitOptions[1].value
    ) {
      return number().required("Please enter an end tip");
    }
    return schema;
  }),
  tip: string().when("tipBait", ([tipBait], schema) => {
    if (
      tipBait.value === tipBaitOptions[0].value ||
      tipBait.value === tipBaitOptions[1].value ||
      tipBait.value === tipBaitOptions[2].value
    ) {
      return string().required("Please enter an end tip");
    }
    return schema;
  }),
});

const PostAddress = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Formik
      initialValues={{
        address: "",
        platform: {
          value: platforms[0].value,
          label: platforms[0].label,
        },
        date: "",
        tip: "N/A",
        endTip: "",
        note: "",
        tipBaitsOther: "",
        tipBait: {
          value: tipBaitOptions[0].value,
          label: tipBaitOptions[0].label,
        },
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Navbar pageName="Post Address" toggleRightCollapse={toggleSidebar} />
          <Flex direction="column" justify="space-between" mb="32">
            <Stack px={4} spacing={5}>
              <HStack justify="end" mt="4">
                <Field name="date">
                  {({ field, meta }: FieldProps) => (
                    <FormControl
                      w="60%"
                      isInvalid={!!(meta.error && meta.touched)}
                    >
                      <InputGroup position="relative">
                        <Input
                          variant="filled"
                          type="date"
                          placeholder="Input date"
                          {...field}
                          pr="4"
                          cursor="pointer"
                        />
                        <InputRightElement
                          position="absolute"
                          top={0}
                          pointerEvents="none"
                          right={0}
                        >
                          <SlCalender color="white" />
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </HStack>
              <HStack alignItems="start">
                <FormInputWrappper
                  type="input"
                  name="address"
                  leftElement={"Address"}
                  leftElementProps={{
                    fontSize: "15px",
                    fontWeight: "semibold",
                    pl: 10,
                  }}
                  inputProps={{
                    pl: 24,
                    placeholder: "123 Main St, O’fallon MO",
                  }}
                />
                <Box w="40%">
                  <FormInputWrappper
                    type="input"
                    name="apt"
                    inputProps={{
                      placeholder: "Apt #",
                    }}
                  />
                </Box>
              </HStack>
              <Flex gap="2">
                <Stack flex="1">
                  <Field name="platform">
                    {({ field, meta }: FieldProps) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <Select
                          id="platform"
                          placeholder="Platform"
                          options={platforms}
                          styles={styles}
                          {...field}
                          onChange={(value) => setFieldValue("platform", value)}
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  {values.platform.label === "Other" && (
                    <FormInputWrappper
                      type="input"
                      name="platform.value"
                      inputProps={{
                        placeholder:
                          "Other (Please specify in notes section below)",
                      }}
                    />
                  )}
                </Stack>
                <Stack flex="1">
                  <Field name="tipBait">
                    {({ field, meta }: FieldProps) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <Select
                          id="tipBait"
                          placeholder="Tip Bait"
                          options={tipBaitOptions}
                          styles={styles}
                          {...field}
                          onChange={(value) => setFieldValue("tipBait", value)}
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  {values.tipBait.label === "Other" && (
                    <FormInputWrappper
                      type="input"
                      name="tipBait.value"
                      inputProps={{
                        placeholder:
                          "Other (Please specify in notes section below)",
                      }}
                    />
                  )}
                </Stack>
              </Flex>
              <Flex gap={2}>
                <Stack>
                  <Text textStyle="h5">Tip</Text>
                  <FormInputWrappper
                    type="input"
                    name="tip"
                    isDisabled={
                      !(
                        values.tipBait.value === tipBaitOptions[0].value ||
                        values.tipBait.value === tipBaitOptions[1].value ||
                        values.tipBait.value === tipBaitOptions[2].value
                      )
                    }
                    leftElement={"$"}
                  />
                </Stack>
                <Stack>
                  <Text textStyle="h5">
                    End Tip{" "}
                    <Text as="span" textStyle="p2">
                      (Tip Bait)
                    </Text>
                  </Text>
                  <FormInputWrappper
                    type="input"
                    name="endTip"
                    isDisabled={
                      !(
                        values.tipBait.value === tipBaitOptions[0].value ||
                        values.tipBait.value === tipBaitOptions[1].value
                      )
                    }
                    leftElement={"$"}
                  />
                </Stack>
              </Flex>

              <FormInputWrappper
                type="textarea"
                label="Notes"
                name="note"
                placeholder="Do not list any names of individuals"
                leftElement={"$"}
              />

              <Flex justify="center">
                <Button
                  variant="primary"
                  mt="8"
                  type="submit"
                  w="85%"
                  h="60px"
                  borderRadius="md"
                  bg="brand.red"
                >
                  SUBMIT
                </Button>
              </Flex>
              <BottomLayout>
                <HomeLink />
              </BottomLayout>
            </Stack>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default PostAddress;
