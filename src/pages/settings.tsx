import FileUpload from "@/components/FileUpload";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Settings = () => {
  const router = useRouter();
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Navbar pageName="Settings" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" justify="space-between" h="100vh">
        <Flex px={4} direction="column" justify="space-between" flexGrow={1}>
          <Stack spacing={6}>
            <Flex align="center">
              <FileUpload />
              <Text ml={4} textStyle="h5">
                Alieshae Netlh
              </Text>
            </Flex>

            <Text textStyle="p">Welcome Alieshae Netlh!</Text>

            <Stack spacing={3}>
              {/* First Name */}
              <Flex
                align="center"
                w="100%"
                height="60px"
                bg="brand.darkGray"
                borderRadius={"999px"}
                px={4}
              >
                <Text w="100px" mr={2} textStyle="p">
                  First Name:
                </Text>
                <Input
                  type="text"
                  bg="transparent"
                  outline="none"
                  fontFamily="body"
                  focusBorderColor="transparent"
                  _focus={{ outline: "none" }}
                  _active={{ outline: "none" }}
                  _placeholder={{ fontSize: "12px" }}
                  border="none"
                  placeholder="Alieshae Netlh"
                />
              </Flex>
              {/* Address */}
              <Flex
                align="center"
                w="100%"
                height="60px"
                bg="brand.darkGray"
                borderRadius={"999px"}
                px={4}
              >
                <Text w="100px" mr={2} textStyle="p">
                  Address:
                </Text>
                <Input
                  type="text"
                  bg="transparent"
                  outline="none"
                  fontFamily="body"
                  focusBorderColor="transparent"
                  _focus={{ outline: "none" }}
                  _active={{ outline: "none" }}
                  _placeholder={{ fontSize: "12px" }}
                  border="none"
                  placeholder="Section 1.10.32 of de Finibus Bonorum"
                />
              </Flex>

              {/* Cell Phone */}
              <Flex
                align="center"
                w="100%"
                height="60px"
                bg="brand.darkGray"
                borderRadius={"999px"}
                px={4}
              >
                <Text w="100px" mr={2} textStyle="p">
                  Cell Phone:
                </Text>
                <Input
                  type="text"
                  bg="transparent"
                  outline="none"
                  fontFamily="body"
                  focusBorderColor="transparent"
                  _focus={{ outline: "none" }}
                  _active={{ outline: "none" }}
                  _placeholder={{ fontSize: "12px" }}
                  border="none"
                  placeholder="(123)-456-7899"
                />
              </Flex>

              {/* Email */}
              <Flex
                align="center"
                w="100%"
                height="60px"
                bg="brand.darkGray"
                borderRadius={"999px"}
                px={4}
              >
                <Text w="100px" mr={2} textStyle="p">
                  Your Email:
                </Text>
                <Input
                  type="text"
                  bg="transparent"
                  outline="none"
                  fontFamily="body"
                  focusBorderColor="transparent"
                  _focus={{ outline: "none" }}
                  _active={{ outline: "none" }}
                  _placeholder={{ fontSize: "12px" }}
                  border="none"
                  placeholder="info.alieshaenatlh@gmail.com"
                />
              </Flex>
            </Stack>
          </Stack>

          <Flex w="full" justify="center">
            <Button w="85%" h="60px" bg="brand.red">
              UPDATE
            </Button>
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

        <Flex p={4} mt={6} justify="space-between">
          <Text
            onClick={() => router.push("/")}
            textStyle={"p"}
            textDecoration="underline"
          >
            Home
          </Text>

          <Text
            onClick={() => router.push("/change-password")}
            textStyle="p"
            fontWeight="normal"
          >
            change Password?
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Settings;
