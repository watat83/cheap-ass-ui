import BottomLayout from "@/components/Layout/BottomLayout";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Divider,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyListing = () => {
  const { toggleSidebar } = useSidebar();
  const resultItems = [
    {
      title: "11-15-22 (Domino's Pizza)",
      desc: "Perspiciatis unde omnis iste natus sit voluptatem accusan",
    },
    {
      title: "12-16-23 (Spark)",
      desc: "Perspiciatis unde omnis iste natus sit voluptatem accusan",
    },
  ];

  return (
    <>
      <Navbar pageName="My Listing" toggleRightCollapse={toggleSidebar} />
      <Flex mt="72px" direction="column" height="100vh">
        <Stack px={4}>
          <Divider />
          {resultItems.map((item, index) => (
            <ResultItem key={index} title={item.title} desc={item.desc} />
          ))}
        </Stack>

        <BottomLayout>
          <Link href={ROUTES.HOME}>Home</Link>
          <Link href={ROUTES.POST_ADDRESS}>
            <Button size="sm" bg="brand.red">
              ADD POST
            </Button>
          </Link>
        </BottomLayout>
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
            <Link href={ROUTES.EDIT_ADDRESS}>
              <IconButton
                isRound
                bg="brand.darkGray"
                aria-label="pencil"
                icon={<BsPencil size={17} color="white" />}
              />
            </Link>
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
