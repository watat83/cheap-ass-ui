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
import { SlCalender } from "react-icons/sl";
import Select from "react-select";
import { Field, FieldProps, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useSidebar } from "@/context/SidebarContext";
import Navbar from "@/components/Navbar";
import FormInputWrappper from "@/components/FormInputWrapper/FormInputWrapper";
import { tipBaitOptions } from "@/constant";

const styles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: "999px",
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

const options = [
  { value: "TipBait", label: "TipBait" },
  { value: "Low Tip", label: "Low Tip" },
  { value: "Missing Items", label: "Missing Items" },
  { value: "Never Arrived", label: "Never Arrived" },
  { value: "No Tip", label: "No Tip" },
  { value: "Other", label: "Other" },
];

const validationSchema = Yup.object({
  date: Yup.date().required("Please enter a date"),
  address: Yup.string().required("Please enter an address"),
  platform: Yup.string().required("Please enter a platform"),
  tip: Yup.number().required("Please enter a tip amount"),
  endTip: Yup.number().required("Please enter an end tip amount"),
  note: Yup.string().required("Please enter a note"),
  orderId: Yup.string().required("Please enter an order ID"),
  tipBait: Yup.object({
    value: Yup.string().required("Please select a tip bait"),
    label: Yup.string().required("Please select a tip bait"),
  }),
});

const EditAddress = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Formik
      initialValues={{
        date: "",
        address: "",
        platform: "",
        tip: "",
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
          <Navbar pageName="Edit Address" toggleRightCollapse={toggleSidebar} />
          <Flex
            mt="72px"
            direction="column"
            justify="space-between"
            height="100vh"
          >
            <Stack px={4} spacing={5}>
              <Box borderRadius="full" p={2} w="full">
                <Text textAlign="center" textStyle="p">
                  Post address only.
                </Text>
                <Text textAlign="center" textStyle="p">
                  Please do not list name of any individuals.
                </Text>
              </Box>

              <HStack alignItems="start" mt="4">
                <Field name="date">
                  {({ field, meta }: FieldProps) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <InputGroup position="relative" w="70%">
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
                <Box w="40%"></Box>
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
                    placeholder:
                      "(Dominos, Pizza Hut, Door dash, Uber, GH, etc)",
                  }}
                />
                <Box w="40%">
                  <FormInputWrappper
                    type="input"
                    name="orderId"
                    leftElement={"#"}
                    leftElementProps={{
                      fontSize: "15px",
                      fontWeight: "semibold",
                      w: "40px",
                    }}
                    inputProps={{
                      pl: 10,
                      placeholder: "Order ID",
                    }}
                  />
                </Box>
              </HStack>

              <FormInputWrappper
                type="input"
                name="platform"
                leftElement={"Platform"}
                leftElementProps={{
                  fontSize: "15px",
                  fontWeight: "semibold",
                  pl: 10,
                }}
                inputProps={{
                  pl: 24,
                  placeholder: "(Dominos, Pizza Hut, Door dash, Uber, GH, etc)",
                }}
              />
              <Field name="tipBait">
                {({ field, meta }: FieldProps) => (
                  <FormControl isInvalid={!!(meta.error && meta.touched)}>
                    <Select
                      placeholder="Tip Bait"
                      options={options}
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
              <Flex gap={2}>
                <Stack>
                  <Text textStyle="h5">Tip</Text>
                  <FormInputWrappper
                    type="input"
                    name="tip"
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
                    leftElement={"$"}
                  />
                </Stack>
              </Flex>
              <FormInputWrappper
                type="textarea"
                label="Notes"
                name="note"
                leftElement={"$"}
              />

              <Flex
                mt={6}
                pos="fixed"
                bottom="0"
                bg="brand.dark"
                w="full"
                justifyContent="end"
                px="8"
                py="4"
              >
                <Button w="114px" h="40px" bg="brand.red" type="submit">
                  Post
                </Button>
              </Flex>
            </Stack>
          </Flex>
          <Box
            position="fixed"
            bottom="0"
            left="0"
            w="100%"
            h="5px"
            bg="brand.red"
          />
        </Form>
      )}
    </Formik>
  );
};

export default EditAddress;
