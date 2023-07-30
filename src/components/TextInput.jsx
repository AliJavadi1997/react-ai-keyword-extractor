import { useState } from "react";
import { Button, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");

  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text field is empty.",
        description: "Please enter some text to extract keywords.",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
      return;
    }

    extractKeywords(text);
  };

  return (
    <>
      <Textarea
        boxShadow="8px 8px 16px #9ea6af,
        -8px -8px 16px #f8ffff"
        border-radius="500px"
        outline="none"
        transition="box-shadow 0.3s ease-in-out"
        borderRadius={7}
        bg="#CBD5E0"
        padding={4}
        marginTop={3}
        height={200}
        color="#2D3748"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg="#CBD5E0"
        boxShadow="8px 8px 16px #9ea6af,
        -8px -8px 16px #f8ffff"
        color="#2D3748"
        marginTop={10}
        width="100%"
        _hover={{ bg: "#FAF089" }}
        onClick={submitText}
        borderRadius={7}
      >
        Extract Keywords
      </Button>
    </>
  );
};
export default TextInput;
