import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import FileUpload from "../FileUpload";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTES } from "@/routes";

interface SidebarProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onOpen, onClose }) => {
  const router = useRouter();
  return (
    <>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="brand.darkGray" color="brand.white">
          <DrawerCloseButton />
          <DrawerBody>
            <Flex
              height="86vh"
              my={8}
              p={3}
              direction="column"
              justify="space-between"
            >
              <Box>
                <Text mb="30px" textStyle="h2">
                  My Account
                </Text>
                <Flex mb={"30px"} align="center" my={8}>
                  <FileUpload />
                  <Text ml={6} textStyle="h5">
                    Alieshae Netlh
                  </Text>
                </Flex>

                <Stack>
                  <Link href={`my-listing`} onClick={onClose}>
                    <Flex align="center">
                      <Image src="/assets/images/Listing.svg" />
                      <Text ml={4} textStyle="h5">
                        My Listing
                      </Text>
                    </Flex>
                  </Link>
                  <Divider my={2} />

                  <Link href="membership" onClick={onClose}>
                    <Flex align="center">
                      <Image src="/assets/images/membership.svg" />
                      <Text ml={4} textStyle="h5">
                        Membership
                      </Text>
                    </Flex>
                  </Link>
                  <Divider my={2} />

                  <Link href="settings" onClick={onClose}>
                    <Flex align="center">
                      <Image src="/assets/images/settings.svg" />
                      <Text ml={4} textStyle="h5">
                        Settings
                      </Text>
                    </Flex>
                  </Link>
                  <Divider my={2} />

                  <Flex align="center" onClick={() => {}}>
                    <Image src="/assets/images/exit.svg" />
                    <Text ml={4} textStyle="h5">
                      Sign out
                    </Text>
                  </Flex>
                </Stack>
              </Box>

              <Stack spacing={0} mt={10}>
                <Flex direction="column">
                  <Link href="privacy-policy" onClick={onClose}>
                    <Text
                      onClick={() => router.push(ROUTES.PRIVACY_POLICY)}
                      mb="13px"
                      textStyle="p"
                    >
                      Privacy Policy
                    </Text>
                  </Link>
                  <Link href="terms-conditions" onClick={onClose}>
                    <Text
                      onClick={() => router.push(ROUTES.TERMS_CONDITIONS)}
                      textStyle="p"
                    >
                      Terms & Conditions
                    </Text>
                  </Link>
                </Flex>

                <Box mt={4}>
                  <Button
                    onClick={() => router.push(ROUTES.LOGIN)}
                    bg="brand.red"
                  >
                    LOG IN
                  </Button>
                </Box>

                {/* <Text textStyle="p" fontWeight="normal">
                  Don't have account?{" "}
                  <Text as="span" color="brand.red">
                    Register Now
                  </Text>
                </Text> */}
              </Stack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
