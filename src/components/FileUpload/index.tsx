import { Avatar, AvatarBadge, Stack } from "@chakra-ui/react";
import { useFileUpload } from "use-file-upload";
import { BsFillPencilFill } from "react-icons/bs";

const FileUpload = () => {
  const defaultSrc = "/assets/images/defaultAvatar.png";
  const [files, selectFiles] = useFileUpload();

  const handleFileSelect = (fileData: any) => {
    if (fileData) {
      const { name, size, source, file } = fileData;
      console.log("Files Selected", { name, size, source, file });
    }
  };

  return (
    <Stack direction="row" spacing={4}>
      <Avatar size="lg" src={defaultSrc}>
        <AvatarBadge
          onClick={() =>
            selectFiles(
              { accept: "image/*", multiple: false },
              handleFileSelect
            )
          }
          borderColor="brand.dark"
          bg="brand.dark"
          boxSize="1.24rem"
        >
          <BsFillPencilFill />
        </AvatarBadge>
      </Avatar>
    </Stack>
  );
};

export default FileUpload;
