import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { SlCalender } from "react-icons/sl";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSidebar } from "@/context/SidebarContext";
import Navbar from "@/components/Navbar";

const styles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: "999px",
    height: "50px",
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
  { value: "Spring", label: "Spring" },
  { value: "Summer", label: "Summer" },
  { value: "Autumn", label: "Autumn" },
  { value: "Winter", label: "Winter" },
];

const validationSchema = Yup.object({
  date: Yup.date().required("Please enter a date"),
  address: Yup.string().required("Please enter an address"),
  platform: Yup.string().required("Please enter a platform"),
  tip: Yup.number().required("Please enter a tip amount"),
  endTip: Yup.number().required("Please enter an end tip amount"),
  note: Yup.string().required("Please enter a note"),
});

const EditAddress = () => {
  const { toggleSidebar } = useSidebar();
  const formik = useFormik({
    initialValues: {
      date: "",
      address: "",
      platform: "",
      tip: "",
      endTip: "",
      note: "",
    },
    validationSchema,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Navbar pageName="Edit Address" toggleRightCollapse={toggleSidebar} />
      <Flex mt="72px" direction="column" justify="space-between" height="100vh">
        <Stack px={4} spacing={5}>
          <Flex
            borderRadius={"999px"}
            bg="brand.darkGray"
            direction="column"
            p={2}
            w="full"
          >
            <Text textAlign="center" textStyle="p1">
              Post address only.
            </Text>
            <Text textAlign="center" textStyle="p1">
              Please do not list name of any individuals.
            </Text>
          </Flex>

          <Box w={"70%"}>
            <FormControl
              isInvalid={!!(formik.errors.date && formik.touched.date)}
            >
              <InputGroup position="relative">
                <Input
                  variant="filled"
                  type="date"
                  placeholder="Input date"
                  name="date"
                  height="50px"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <InputRightElement
                  position="absolute"
                  top={0}
                  pointerEvents="none"
                  right={8}
                >
                  <SlCalender color="white" />
                </InputRightElement>
              </InputGroup>
              {formik.errors.date && formik.touched.date && (
                <Text color="red" fontSize="sm" mt={1}>
                  {String(formik.errors.date)}
                </Text>
              )}
            </FormControl>
          </Box>

          <Flex gap={2}>
            <Box w="60%">
              <Flex
                align="center"
                w="100%"
                height="50px"
                borderRadius={"999px"}
                bg="brand.darkGray"
                px={4}
              >
                <Text w="100px" mr={2} textStyle="p">
                  Address
                </Text>
                <Input
                  type="text"
                  variant="compound"
                  placeholder="info.john@gmail.com"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Flex>
              {formik.errors.address && formik.touched.address && (
                <Text color="red" fontSize="sm" mt={1}>
                  {String(formik.errors.address)}
                </Text>
              )}
            </Box>
            <Box width="40%">
              <Flex
                align="center"
                w="100%"
                height="50px"
                bg="brand.darkGray"
                borderRadius={"999px"}
                px={4}
              >
                <Text w="20px" mr={2} textStyle="p">
                  #
                </Text>
                <Input
                  type="text"
                  variant="compound"
                  placeholder=""
                  name="addressNumber"
                  value={formik.values.addressNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Flex>
              {formik.errors.addressNumber && formik.touched.addressNumber && (
                <Text color="red" fontSize="sm" mt={1}>
                  {String(formik.errors.addressNumber)}
                </Text>
              )}
            </Box>
          </Flex>

          <Flex
            align="center"
            w="100%"
            height="50px"
            borderRadius={"999px"}
            bg="brand.darkGray"
            px={4}
          >
            <Text w="60px" mr={2} textStyle="p">
              Platform:
            </Text>
            <Input
              type="text"
              variant="compound"
              placeholder="(Dominos, Pizza Hut, Door dash, Uber, GH, etc)"
              name="platform"
              value={formik.values.platform}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Flex>
          {formik.errors.platform && formik.touched.platform && (
            <Text color="red" fontSize="sm" mt={1}>
              {String(formik.errors.platform)}
            </Text>
          )}

          <Select
            placeholder="Tip Bait"
            options={options}
            styles={styles}
            name="tipBait"
            value={formik.values.tipBait}
            onChange={(value) => formik.setFieldValue("tipBait", value)}
            onBlur={formik.handleBlur}
          />
          {formik.errors.tipBait && formik.touched.tipBait && (
            <Text color="red" fontSize="sm" mt={1}>
              {String(formik.errors.tipBait)}
            </Text>
          )}

          <Flex gap={2}>
            <Stack>
              <Text textStyle="h5">Tip</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="white"
                  fontWeight="light"
                  fontSize="20px"
                >
                  $
                </InputLeftElement>
                <Input
                  type="text"
                  variant="filled"
                  placeholder=""
                  name="tip"
                  value={formik.values.tip}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </InputGroup>
              {formik.errors.tip && formik.touched.tip && (
                <Text color="red" fontSize="sm" mt={1}>
                  {String(formik.errors.tip)}
                </Text>
              )}
            </Stack>

            <Stack>
              <Text textStyle="h5">
                End Tip{" "}
                <Text as="span" textStyle="p2">
                  (Tip Bait)
                </Text>
              </Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="white"
                  fontSize="20px"
                  fontWeight="light"
                >
                  $
                </InputLeftElement>
                <Input
                  type="text"
                  variant="filled"
                  placeholder=""
                  name="endTip"
                  value={formik.values.endTip}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </InputGroup>
              {formik.errors.endTip && formik.touched.endTip && (
                <Text color="red" fontSize="sm" mt={1}>
                  {String(formik.errors.endTip)}
                </Text>
              )}
            </Stack>
          </Flex>

          <Textarea
            rows={5}
            bg="brand.darkGray"
            borderRadius="10px"
            outline="none"
            fontFamily="body"
            focusBorderColor="transparent"
            _focus={{ outline: "none" }}
            _active={{ outline: "none" }}
            _placeholder={{ fontSize: "12px" }}
            border="none"
            placeholder=""
            name="note"
            value={formik.values.note}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.note && formik.touched.note && (
            <Text color="red" fontSize="sm" mt={1}>
              {String(formik.errors.note)}
            </Text>
          )}

          <Flex mb={2} w="full" justify="flex-end">
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
    </form>
  );
};

export default EditAddress;
