import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {
  pageName: string;
  toggleRightCollapse: () => void;
  bg?: string;
  showLogo?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  pageName,
  toggleRightCollapse,
  bg,
  showLogo = false,
}) => {
  const router = useRouter();
  return (
    <Flex
      position="sticky"
      top={0}
      width={"full"}
      align="center"
      justify="space-between"
      p={4}
      zIndex={100}
      bg={bg === "none" ? undefined : "#000"}
    >
      {showLogo ? (
        <Image
          w="12"
          h="12"
          borderRadius="full"
          src="/assets/images/donkey_logo.webp"
        />
      ) : (
        <IconButton
          bg="brand.dark"
          onClick={() => router.back()}
          aria-label="left icon"
          icon={<AiOutlineLeft />}
        />
      )}
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
