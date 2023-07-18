import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import { ROUTES } from "@/routes";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const AfterAuth = () => {
  const { toggleSidebar } = useSidebar();

  const resultItems = [
    {
      topText: "11-15-22 (Domino's Pizza)",
      middleText: "Tip $0",
      bottomText: "Notes -  7 large pizzas and a 2 liter.. Cheap",
    },
    {
      topText: "12-16-23 (Spark)",
      middleText: "Tip Bait $17 $0",
      bottomText: "Notes -  Customer straight up pulled the tip.",
    },
    {
      topText: "1-27-23 (Door Dash)",
      middleText: "Food never arrived",
      bottomText: "Notes -  Handed to customer. Lied!",
    },
  ];

  return (
    <>
      <Navbar pageName="" toggleRightCollapse={toggleSidebar} />
      <Flex mt={"72px"} direction="column" height="100vh">
        <Stack px={4} spacing={5}>
          <Text textStyle="h4">CheapAss Database</Text>

          <Box>
            <InputGroup>
              <InputLeftElement w="16" pointerEvents="none" h="60px">
                <Icon as={BsSearch} boxSize="4" />
              </InputLeftElement>
              <Input size="md" placeholder="Search" pl="14" h="60px" />
            </InputGroup>
            <Text mt={3} textAlign="center" textStyle="p">
              Search by Address (123 Main St, O'Fallon Mo)
            </Text>
          </Box>

          <Flex direction="column">
            <Text mt={3} color="brand.red" textStyle="p">
              Search by Address (123 Main St, O'Fallon Mo)
            </Text>
            <Divider mb={3} />

            {resultItems.map((item) => (
              <ResultItem
                key={item.topText}
                topText={item.topText}
                middleText={item.middleText}
                bottomText={item.bottomText}
              />
            ))}
          </Flex>
        </Stack>

        <Flex
          width="full"
          position="fixed"
          bottom={0}
          left={0}
          align="center"
          justify="space-between"
          py={6}
          px={10}
          bg="brand.darkGray"
        >
          <Link href={ROUTES.MY_LISTINGS}>
            <Button size="sm" bg="brand.red">
              EDIT
            </Button>
          </Link>
          <Link href={ROUTES.POST_ADDRESS}>
            <Button size="sm" bg="brand.red">
              POST
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default AfterAuth;

interface ResultItemProps {
  topText: string;
  middleText: string;
  bottomText: string;
}

const ResultItem: React.FC<ResultItemProps> = ({
  topText,
  middleText,
  bottomText,
}) => {
  return (
    <>
      <Stack spacing={1.5}>
        <Text textStyle="p1">{topText}</Text>
        <Text textStyle="p1" fontWeight="normal">
          {middleText}
        </Text>
        <Text textStyle="p1">{bottomText}</Text>
      </Stack>
      <Divider my={3} />
    </>
  );
};
