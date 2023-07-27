import { ROUTES } from "@/routes";
import { Link } from "@chakra-ui/next-js";
import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface IHomeLinkProps {}

const HomeLink: FC<IHomeLinkProps> = ({}) => {
  return (
    <Link href={ROUTES.HOME}>
      <Button size="sm" variant="link">
        Home
      </Button>
    </Link>
  );
};
export default HomeLink;
