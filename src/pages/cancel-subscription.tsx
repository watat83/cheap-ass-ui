import HomeLink from "@/components/HomeLink";
import BottomLayout from "@/components/Layout/BottomLayout";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";

const CancelSubscription = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Navbar
        pageName="Cancel Membership"
        toggleRightCollapse={toggleSidebar}
      />

      <Flex direction="column">
        <VStack px={4} py={8} spacing={5} align="center">
          <Text w="85%" textStyle="p" textAlign="center">
            Simply click the link below to cancel your membership.
          </Text>

          <Flex w="full" justify="center" mt="4">
            <Button w="85%" h="60px" borderRadius="md" bg="brand.red">
              Unsubscribe
            </Button>
          </Flex>
        </VStack>

        <BottomLayout transparent showRedBar>
          <HomeLink />
        </BottomLayout>
      </Flex>
    </>
  );
};

export default CancelSubscription;
