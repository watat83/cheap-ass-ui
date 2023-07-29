import BottomLayout from "@/components/Layout/BottomLayout";
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
      <Navbar pageName="" showLogo toggleRightCollapse={toggleSidebar} />
      <Flex direction="column">
        <Stack px={4} spacing={5}>
          <Text textStyle="h4">CheapAss</Text>

          <Box>
            <InputGroup>
              <InputLeftElement w="16" pointerEvents="none" h="60px">
                <Icon as={BsSearch} boxSize="4" />
              </InputLeftElement>
              <Input
                size="md"
                placeholder="123 Main St, O'Fallon Mo"
                pl="14"
                h="60px"
              />
            </InputGroup>
          </Box>

          <Flex direction="column">
            <Text mt={3} fontWeight="bold" fontSize="lg">
              Results
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

        <BottomLayout>
          <Link href={ROUTES.MY_LISTINGS}>
            <Button size="sm" variant="red_link">
              EDIT
            </Button>
          </Link>
          <Link href={ROUTES.POST_ADDRESS}>
            <Button size="sm" variant="red_link">
              POST
            </Button>
          </Link>
        </BottomLayout>
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
