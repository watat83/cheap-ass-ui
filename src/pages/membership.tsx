import HomeLink from "@/components/HomeLink";
import BottomLayout from "@/components/Layout/BottomLayout";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
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

const Membership = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Navbar bg="none" pageName="" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" justify="space-between">
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
                Member Benefits:
              </Text>
              <UnorderedList>
                <ListItem mb="3px" textStyle="p2">
                  Allowed to Post Addresses.
                </ListItem>
                <ListItem textStyle="p2">
                  Allowed to Edit/Delete Your Listings,
                </ListItem>
                <ListItem textStyle="p2">See Notes from Other Members</ListItem>
              </UnorderedList>
            </Flex>
          </Box>
        </VStack>

        <BottomLayout transparent showRedBar>
          <HomeLink />

          <Link href={ROUTES.CANCEL_SUBSCRIPTION}>
            <Button size="sm" variant="white">
              Cancel Subscription?
            </Button>
          </Link>
        </BottomLayout>
      </Flex>
    </>
  );
};

export default Membership;
