import { FC, JSXElementConstructor, ReactElement, ReactNode } from "react";
import { Field, FieldProps } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  CheckboxGroup,
  Checkbox,
  Grid,
} from "@chakra-ui/react";

interface IFormCheckboxProps {
  isRequired?: boolean;
  name: string;
  label: ReactNode | string;
  checkboxOptions: {
    value: string;
    label: string;
  }[];

  icon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  variant?: "rounded" | "square" | "default";
  colorScheme?: "red" | "default";
}

const FormCheckbox: FC<IFormCheckboxProps> = ({
  isRequired,
  name,
  label,
  checkboxOptions,
  variant,
  icon,
  colorScheme = "red",
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <FormControl isInvalid={!!(meta.error && meta.touched)}>
          <FormLabel htmlFor={name} mb="25px" mt="4" fontWeight="thin">
            {label}
            {isRequired && (
              <Box as="span" color="red.500">
                *
              </Box>
            )}
          </FormLabel>
          <CheckboxGroup
            colorScheme="red"
            defaultValue={meta.value}
            onChange={(value) => {
              field.onChange({
                target: {
                  name: field.name,
                  value,
                },
              });
            }}
          >
            <Grid
              gridTemplateColumns={{
                base: "1fr 1fr",
              }}
              columnGap="8"
              rowGap="2"
              w="320px"
            >
              {checkboxOptions.map((c) => (
                <Checkbox
                  colorScheme={colorScheme}
                  icon={icon}
                  gap="8px"
                  size="md"
                  color="gray.400"
                  sx={{
                    span: {
                      fontSize: "14px",
                    },
                  }}
                  key={c.value}
                  value={c.value}
                  variant={variant}
                >
                  {c.label}
                </Checkbox>
              ))}
            </Grid>
          </CheckboxGroup>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};
export default FormCheckbox;
