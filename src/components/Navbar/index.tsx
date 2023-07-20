import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {
  pageName: string;
  toggleRightCollapse: () => void;
  bg?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  pageName,
  toggleRightCollapse,
  bg,
}) => {
  const router = useRouter();
  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      width={"full"}
      align="center"
      justify="space-between"
      p={4}
      zIndex={100}
      bg={bg === "none" ? undefined : "#000"}
    >
      <IconButton
        bg="brand.dark"
        onClick={() => router.back()}
        aria-label="left icon"
        icon={<AiOutlineLeft />}
      />
      <Text textStyle={"h2"}>{pageName}</Text>
      <IconButton
        aria-label="menu"
        bg="brand.dark"
        icon={<AiOutlineMenu />}
        onClick={toggleRightCollapse}
      />
    </Flex>
  );
};

export default Navbar;
