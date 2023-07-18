import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const TermsConditions = () => {
  const { toggleSidebar } = useSidebar();
  const router = useRouter();
  return (
    <>
      <Navbar
        pageName="Terms & Conditions"
        toggleRightCollapse={toggleSidebar}
      />
      <Flex mt="72px" direction="column" justify="space-between" h="100vh">
        <VStack px={8}>
          <UnorderedList spacing={4}>
            <ListItem textStyle="p">
              Dut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci
            </ListItem>
            <ListItem textStyle="p">
              Ed ut perspiciatis unde omnis iste natus.
            </ListItem>

            <ListItem textStyle="p">
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo.
            </ListItem>

            <ListItem textStyle="p">
              Sed Dut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci
            </ListItem>
          </UnorderedList>
        </VStack>
        <Box
          position="fixed"
          bottom="0"
          left="0"
          width="100%"
          height="5px"
          bg="brand.red"
        />

        <Box position="relative">
          <Text
            onClick={() => router.push("/")}
            textStyle={"p"}
            textDecoration={"underline"}
            position="absolute"
            bottom={5}
            left={5}
          >
            Home
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default TermsConditions;
