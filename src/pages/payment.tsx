import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Navbar bg="none" pageName="" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" justify="space-between" h="100vh">
        <VStack px={4}>
          <Image
            mt={"15px"}
            height="90px"
            width="90px"
            src="/assets/images/defaultAvatar.png"
          />

          <Flex direction="column">
            <Text textAlign="center" mb={4} textStyle="h3">
              Thank you
            </Text>
            <Text textAlign="center" mb={4} textStyle="h2">
              for Sign in
            </Text>
            <Text textAlign="center" textStyle="p">
              We’re so excited to welcome you.
            </Text>
          </Flex>
          <Text textStyle="p" fontWeight="normal">
            Choose your plan
          </Text>

          <Flex mb={2} w="full" bg="brand.darkGray" p={7} borderRadius="5px">
            <Stack>
              <Box>
                <Text as="span" textStyle="h1">
                  $3.99
                </Text>
                <Text as="span" textStyle="h1">
                  /
                </Text>
                <Text as="span" textStyle="p1" fontSize="lg">
                  Month
                </Text>
              </Box>

              <UnorderedList>
                <ListItem textStyle="p2">
                  Allowed you to post addresses.
                </ListItem>
                <ListItem textStyle="p2">Allow to edit and see notes.</ListItem>
              </UnorderedList>
            </Stack>
          </Flex>

          <Flex w="full" bg="brand.darkGray" p={7} borderRadius="5px">
            <Stack>
              <Box>
                <Text as="span" textStyle="h1">
                  $3.99
                </Text>
                <Text as="span" textStyle="h1">
                  /
                </Text>
                <Text as="span" textStyle="p1" fontSize="lg">
                  Month
                </Text>
              </Box>

              <UnorderedList>
                <ListItem textStyle="p2">
                  Allowed you to post addresses.
                </ListItem>
                <ListItem textStyle="p2">Allow to edit and see notes.</ListItem>
              </UnorderedList>
            </Stack>
          </Flex>

          <Flex w="full" bg="brand.darkGray" p={7} borderRadius="5px">
            <Stack>
              <Box>
                <Text as="span" textStyle="h1">
                  $3.99
                </Text>
                <Text as="span" textStyle="h1">
                  /
                </Text>
                <Text as="span" textStyle="p1" fontSize="lg">
                  Month
                </Text>
              </Box>

              <UnorderedList>
                <ListItem textStyle="p2">
                  Allowed you to post addresses.
                </ListItem>
                <ListItem textStyle="p2">Allow to edit and see notes.</ListItem>
              </UnorderedList>
            </Stack>
          </Flex>
        </VStack>

        <Flex mt={6} w="full" justify="center">
          <Button w="85%" h="60px" bg="brand.red">
            PAY NOW
          </Button>
        </Flex>

        <Flex p={4} mt={6} justify="space-between">
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
    </>
  );
};

export default Payment;
