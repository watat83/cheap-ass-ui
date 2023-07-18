import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const CancelSubscription = () => {
  const { toggleSidebar } = useSidebar();
  const router = useRouter();
  return (
    <>
      <Navbar
        pageName="Cancel Membership"
        toggleRightCollapse={toggleSidebar}
      />

      <Flex direction="column" minHeight="100vh" mt="10">
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
            <Button w="85%" h="60px" bg="brand.red">
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

        <Box position="fixed" bottom="15px" left="15px">
          <Link href={ROUTES.HOME}>
            <Text textStyle={"p"}>Home</Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default CancelSubscription;
