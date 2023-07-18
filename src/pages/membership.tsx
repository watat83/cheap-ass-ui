import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Membership = () => {
  const router = useRouter();
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Navbar bg="none" pageName="" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" justify="space-between" h="100vh">
        <VStack px={4}>
          <Image
            mt={"20px"}
            height="90px"
            width="90px"
            src="/assets/images/defaultAvatar.png"
          />

          <Text textStyle="h5">Alieshae Netlh</Text>

          <Text textAlign="center" mt="4" textStyle="h2">
            Successful
          </Text>

          <Text textStyle="p" my="4">
            My Current plan is $3.99 per monthly.
          </Text>

          <Box w="full" px="4">
            <VStack
              mb={2}
              w="full"
              bg="brand.darkGray"
              p={7}
              borderRadius="5px"
            >
              <Stack>
                <Box>
                  <Text as="span" textStyle="h1">
                    $3.99
                  </Text>
                  <Text as="span" textStyle="h1">
                    /
                  </Text>
                  <Text as="span" textStyle="p1" fontSize="lg">
                    Monthly
                  </Text>
                </Box>
              </Stack>
            </VStack>
            <Flex direction="column" mt="4">
              <Text pl="4" mb="9px" textStyle="p">
                Benefits are:
              </Text>
              <UnorderedList>
                <ListItem mb="3px" textStyle="p2">
                  Allowed you to post addresses.
                </ListItem>
                <ListItem textStyle="p2">Allow to edit and see notes.</ListItem>
              </UnorderedList>
            </Flex>
          </Box>
        </VStack>
        <Box
          position="fixed"
          bottom="0"
          left="0"
          width="100%"
          height="5px"
          bg="brand.red"
        />
        <Flex p={4} mt={6} justify="space-between">
          <Link href={ROUTES.HOME}>
            <Text textStyle="p" fontWeight="normal">
              Home
            </Text>
          </Link>

          <Link href={ROUTES.CANCEL_SUBSCRIPTION}>
            <Text textStyle="p" fontWeight="normal">
              Cancel Subscription?
            </Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Membership;
