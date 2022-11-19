import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  InputProps,
  Text,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import { contactData } from "../../data/contact";
import { projectsData } from "../../data/projects";
import { Constants } from "../../theme/constants";

export default function Contact({ data = contactData }) {
  return (
    <Flex w="100%" flexDirection={"column"} position="relative" zIndex={"base"}>
      <Flex
        margin="50px auto 0"
        padding={"100px 0"}
        w={Constants.contentWidth}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Grid templateColumns={"1fr 1fr"} w="100%" h="500px" gap="0px">
          <Image src={data.img1} alt="" w="100%" h="100%" objectFit={"cover"} />
          <Flex flexDirection={"column"} textAlign="center" margin="auto auto">
            <Heading size="xl" margin="0 0 40px">
              {data.title}
            </Heading>
            <Flex flexDirection={"column"} gap="20px">
              <FormInput placeholder={data.form.name}></FormInput>
              <FormInput placeholder={data.form.email}></FormInput>
              <FormInput placeholder={data.form.phone}></FormInput>
              <FormTextArea placeholder={data.form.message}></FormTextArea>
              <Button colorScheme={"blackAlpha"}>{data.form.submit}</Button>
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
}

interface FormInputProps extends InputProps {}

export const FormInput = ({ ...props }: FormInputProps) => {
  return (
    <Input
      border="none"
      focusBorderColor="none"
      borderRadius="none"
      borderBottom="4px solid #cecece"
      {...props}
    ></Input>
  );
};

interface FormTextAreaProps extends TextareaProps {}

export const FormTextArea = ({ ...props }: FormTextAreaProps) => {
  return (
    <Textarea
      border="none"
      focusBorderColor="none"
      borderRadius="none"
      borderBottom="4px solid #cecece"
      h="40px"
      {...props}
    ></Textarea>
  );
};
