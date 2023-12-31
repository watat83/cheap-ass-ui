import {
  InputGroup,
  InputLeftElement,
  Input,
  InputProps,
  InputLeftElementProps,
  FormControl,
  FormErrorMessage,
  TextareaProps,
  SelectProps,
  Textarea,
  FormLabel,
  InputRightElement,
  InputRightElementProps,
  InputGroupProps,
} from "@chakra-ui/react";
import { Field, FieldProps } from "formik";
import { FC, ReactNode } from "react";

type InputType = {
  inputProps?: InputProps;
  type: "input";
};

type TextAreaType = {
  textareaProps?: TextareaProps;
  type: "textarea";
};
type SelectType = {
  selectProps?: SelectProps;
  type: "select";
};

type IFormInputWrappperProps = {
  leftElement?: React.ReactNode | string;
  leftElementProps?: InputLeftElementProps;
  rightElementProps?: InputRightElementProps;
  rightElement?: React.ReactNode | string;
  name: string;
  inputGroupProps?: InputGroupProps;
  label?: ReactNode | string;
  isDisabled?: boolean;
  placeholder?: string;
} & (InputType | TextAreaType | SelectType);

const FormInputWrappper: FC<IFormInputWrappperProps> = (props) => {
  if (props.type === "input") {
    const {
      inputProps,
      leftElementProps,
      leftElement,
      name,
      rightElement,
      rightElementProps,
      inputGroupProps,
      isDisabled,
    } = props;
    return (
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <FormControl
            isInvalid={!!(meta.error && meta.touched)}
            isDisabled={isDisabled}
          >
            <InputGroup borderRadius="full" {...inputGroupProps}>
              {leftElement && (
                <InputLeftElement
                  pointerEvents="none"
                  color="white"
                  fontSize="12px"
                  fontWeight="light"
                  display="flex"
                  justifyContent="start"
                  {...leftElementProps}
                  pl="4"
                >
                  {leftElement}
                </InputLeftElement>
              )}
              {rightElement && (
                <InputRightElement
                  pointerEvents="none"
                  color="white"
                  fontSize="20px"
                  fontWeight="light"
                  {...rightElementProps}
                >
                  {rightElement}
                </InputRightElement>
              )}
              <Input {...field} {...inputProps} />
            </InputGroup>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    );
  }
  if (props.type === "textarea") {
    const { textareaProps, label, name, isDisabled, placeholder } = props;
    return (
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <FormControl
            isInvalid={!!(meta.error && meta.touched)}
            isDisabled={isDisabled}
          >
            <FormLabel textStyle="p" htmlFor={name}>
              {label}
            </FormLabel>
            <Textarea
              rows={5}
              bg="brand.darkGray"
              borderRadius="10px"
              outline="none"
              fontFamily="body"
              focusBorderColor="transparent"
              _focus={{ outline: "none" }}
              _active={{ outline: "none" }}
              _placeholder={{ fontSize: "14px" }}
              border="none"
              placeholder={placeholder}
              {...field}  
              {...textareaProps}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    );
  }

  return null;
};
export default FormInputWrappper;
