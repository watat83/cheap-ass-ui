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
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();
  const { toggleSidebar } = useSidebar();

  const plans = [
    {
      id: 1,

      name: "Basic",
      price: "$3.99",
      endText: "Month",
      features: [
        "Allowed you to post addresses",
        "Allow to edit and see notes",
      ],
    },
    {
      id: 1,
      name: "Basic",
      price: "$9.99",
      endText: "3Months",
      features: [
        "Allowed you to post addresses",
        "Allow to edit and see notes",
      ],
    },
    {
      id: 1,
      name: "Basic",
      price: "$19.95",
      endText: "6Months",
      features: [
        "Allowed you to post addresses",
        "Allow to edit and see notes",
      ],
    },
  ];

  return (
    <>
      <Navbar bg="none" pageName="" toggleRightCollapse={toggleSidebar} />
      <Flex direction="column" justify="space-between" h="100vh">
        <VStack px={8}>
          <Image
            mt={"15px"}
            height="90px"
            width="90px"
            src="/assets/images/defaultAvatar.png"
          />

          <Flex direction="column">
            <Text textAlign="center" mb={2} mt="4" textStyle="h3">
              Thank you
            </Text>
            <Text textAlign="center" mb={4} textStyle="h2">
              for Sign in
            </Text>
            <Text textAlign="center" textStyle="p">
              We’re so excited to welcome you.
            </Text>
          </Flex>
          <Text textStyle="p" fontWeight="normal" my="2">
            Choose your plan
          </Text>

          {plans.map((plan) => (
            <Flex
              mb={2}
              w="full"
              bg="brand.darkGray"
              p={7}
              borderRadius="5px"
              key={plan.id}
            >
              <Stack>
                <Box>
                  <Text as="span" textStyle="h1">
                    {plan.price}
                  </Text>
                  <Text as="span" textStyle="h1">
                    /
                  </Text>
                  <Text as="span" textStyle="p1" fontSize="lg">
                    {plan.endText}
                  </Text>
                </Box>

                <UnorderedList>
                  {plan.features.map((feature, index) => (
                    <ListItem my="1" textStyle="p2" key={index}>
                      {feature}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Stack>
            </Flex>
          ))}
        </VStack>

        <Flex mt={6} w="full" justify="center">
          <Button w="70%" h="60px" bg="brand.red">
            PAY NOW
          </Button>
        </Flex>

        <Flex p={4} mt={6} justify="space-between">
          <Link href={ROUTES.HOME}>
            <Text textStyle={"p"}>Home</Text>
          </Link>
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
