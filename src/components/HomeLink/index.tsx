import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import { Text } from "@chakra-ui/react";
import { FC } from "react";

interface IHomeLinkProps {}

const HomeLink: FC<IHomeLinkProps> = ({}) => {
  return (
    <Link href={ROUTES.HOME}>
      <Text textStyle="p" fontWeight="normal">
        Home
      </Text>
    </Link>
  );
};
export default HomeLink;
