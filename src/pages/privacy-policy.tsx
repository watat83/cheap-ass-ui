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
  const router = useRouter();
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Navbar pageName="Privacy Policy" toggleRightCollapse={toggleSidebar} />
      <Flex mt="72px" direction="column" justify="space-between" h="100vh">
        <VStack px={4}>
          <UnorderedList spacing={4}>
            <ListItem textStyle="p">
              Perspiciatis unde omnis iste natus error.
            </ListItem>
            <ListItem textStyle="p">
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inven.
            </ListItem>

            <ListItem textStyle="p">
              Sed ut perspiciatis unde omnis iste natus.
            </ListItem>

            <ListItem textStyle="p">
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo.
            </ListItem>

            <ListItem textStyle="p">
              Ut perspiciatis unde omnis iste natus error sit voluptatem
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
            textStyle={"p"}
            textDecoration={"underline"}
            position="absolute"
            bottom={5}
            left={5}
            onClick={() => router.push("/")}
          >
            Home
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default TermsConditions;
