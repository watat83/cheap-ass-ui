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
            Please enter the email address associated with your account. We will
            email you a link to cancel your Membership.
          </Text>

          <Text w="85%" textStyle="p" textAlign="center">
            Ed ut perspiciatis unde omnis iste natus. voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
          </Text>

          <Text textStyle="p" textAlign="center">
            Red ut perspiciatis unde omnis iste natus. voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
          </Text>

          <Flex w="full" justify="center" mt="4">
            <Button w="85%" h="60px" borderRadius="md" bg="brand.red">
              SEND REQUEST
            </Button>
          </Flex>
        </VStack>

        {/* Fixed red line at the bottom */}
        <Box
          position="fixed"
          bottom="0"
          left="0"
          w="100%"
          h="5px"
          bg="brand.red"
        />

        <BottomLayout transparent showRedBar>
          <HomeLink />
        </BottomLayout>
      </Flex>
    </>
  );
};

export default CancelSubscription;
