import Navbar from "@/components/Navbar";

import { Flex, useDisclosure } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { useSidebar } from "@/context/SidebarContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <Flex
      direction="column"
      minH="100vh"
      w="100%"
      bg="brand.dark"
      color="brand.white"
    >
      <Flex direction="column" overflowY="auto">
        {children}
      </Flex>

      <Sidebar
        isOpen={isSidebarOpen}
        onOpen={toggleSidebar}
        onClose={toggleSidebar}
      />
    </Flex>
  );
};

export default Layout;
