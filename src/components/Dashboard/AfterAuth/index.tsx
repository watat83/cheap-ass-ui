import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const AfterAuth = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Navbar pageName="" toggleRightCollapse={toggleSidebar} />
      <Flex mt={"72px"} direction="column" height="100vh">
        <Stack px={4} spacing={5}>
          <Text textStyle="h4">CheapAss Database</Text>

          <Box>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BsSearch />
              </InputLeftElement>
              <Input variant="filled" size="md" placeholder="Search" />
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

            <ResultItem
              topText="11-15-22 (Domino's Pizza)"
              middleText="Tip $0"
              bottomText="Notes -  7 large pizzas and a 2 liter.. Cheap"
            />
            <ResultItem
              topText="12-16-23 (Spark)"
              middleText="Tip Bait $17 $0"
              bottomText="Notes -  Customer straight up pulled the tip."
            />
            <ResultItem
              topText="1-27-23 (Door Dash)"
              middleText="Food never arrived"
              bottomText="Notes -  Handed to customer. Lied!"
            />
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
          <Button size="sm" bg="brand.red">
            EDIT
          </Button>
          <Button size="sm" bg="brand.red">
            POST
          </Button>
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
