import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyListing = () => {
  const { toggleSidebar } = useSidebar();
  const router = useRouter();
  return (
    <>
      <Navbar pageName="My Listing" toggleRightCollapse={toggleSidebar} />
      <Flex mt="72px" direction="column" height="100vh">
        <Stack px={4}>
          <Divider />
          <ResultItem
            title="11-15-22 (Domino's Pizza)"
            desc="Perspiciatis unde omnis iste natus 
sit voluptatem accusan"
          />
          <ResultItem
            title="11-15-22 (Domino's Pizza)"
            desc="Perspiciatis unde omnis iste natus 
sit voluptatem accusan"
          />
        </Stack>

        <Flex
          width="full"
          position="fixed"
          bottom={0}
          left={0}
          justify="space-between"
          align="center"
          py={6}
          px={10}
          bg="brand.darkGray"
        >
          <Box
            position="absolute"
            bottom="0"
            left="0"
            w="100%"
            h="5px"
            bg="brand.red"
          />
          <Text
            onClick={() => router.push("/")}
            textStyle="p"
            textDecoration={"underline"}
          >
            Home
          </Text>
          <Button
            onClick={() => router.push("/post-address")}
            size="sm"
            bg="brand.red"
          >
            ADD POST
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default MyListing;

interface ResultItemProps {
  title: string;
  desc: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ title, desc }) => {
  return (
    <>
      <Stack spacing={1.5}>
        <Flex align="center">
          <Flex direction="column" flex={0.6}>
            <Text textStyle="p1" fontWeight="normal">
              {title}
            </Text>
            <Text textStyle="p1">{desc}</Text>
          </Flex>

          <Flex gap={2} justify={"flex-end"} flex={0.4}>
            <IconButton
              isRound
              bg="brand.darkGray"
              aria-label="pencil"
              icon={<BsPencil size={17} color="white" />}
            />
            <IconButton
              isRound
              bg="brand.darkGray"
              aria-label="pencil"
              icon={<RiDeleteBin6Line size={19} color="white" />}
            />
          </Flex>
        </Flex>
      </Stack>
      <Divider my={3} />
    </>
  );
};
