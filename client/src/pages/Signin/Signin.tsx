import {
  Button,
  Text,
  Fieldset,
  Input,
  Stack,
  Box,
  Image,
  InputProps,
} from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import Foot1 from "../../../public/footlogin.jpg";
import Squad from "../../../public/squadBoss.png";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const inputStyles: InputProps = {
  width: "100%",
  borderColor: "gray.300",
};
interface propsToType {
  sentences: string[];
  textColor: string;
}
const Typewriter: React.FC<propsToType> = ({ sentences, textColor }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < sentences[index].length) {
      setTimeout(() => {
        setText((prev) => prev + sentences[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % sentences.length);
      }, 1500);
    }
  }, [charIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color={textColor}
        textAlign="center"
      >
        {text}
      </Text>
    </motion.div>
  );
};

const Signin = () => {
  return (
    <Box
    overflow={"hidden"}
      backgroundColor={"green.50"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      
      
      <Box
        display={"flex"}
        justifyContent={"center"}
        mt={"7%"}
        height={"100vh"}
        w={"33%"}
      >
        <Box width={"90%"} display={"flex"} justifyContent={"center"}>
          <Fieldset.Root
            size="lg"
            w={"90%"}
            backgroundColor={"white"}
            borderRadius={"10px"}
            boxShadow={"lg"}
            p={"20px"}
            height={"fit-content"}
          >
            <Stack>
              <Fieldset.Legend fontSize={"3xl"}>
                Create an account
              </Fieldset.Legend>
              <Fieldset.HelperText>
                Please provide your informations below.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
            <Field label="Firstname">
                <Input {...inputStyles} type="text" name="Firstname" />
              </Field>

              <Field label="Lastname">
                <Input {...inputStyles} name="text" type="Lastname" />
              </Field>
              <Field label="Email">
                <Input {...inputStyles} type="email" name="email" />
              </Field>

              <Field label="Password">
                <Input {...inputStyles} name="password" type="password" />
              </Field>

            </Fieldset.Content>

            <Button
              backgroundColor={"green.400"}
              color={"white"}
              w={"100%"}
              type="submit"
              alignSelf="flex-start"
            >
              Signin
            </Button>
          </Fieldset.Root>
        </Box>
      </Box>
      {// image start here
      }
      <Box
        position={"relative"}
        w={"67%"}
        h={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          borderTopLeftRadius={"10%"}
          borderBottomLeftRadius={"15%"}
          height={"100%"}
          src={Foot1}
          alt="ffedgvdtgft"
        />
        <Image
          src={Squad}
          alt="squadBoss"
          position={"absolute"}
          w={"300px"}
          top={"0px"}
        />
        <Box position={"absolute"} top={"50%"} left={"30%"} width={"400px"}>
          <Typewriter
            sentences={[
              "Unlock your full potential with our cutting-edge platform ....... Join thousands of users enjoying a seamless experience.",
              "Stay connected, stay ahead – your journey starts here!",
              "Your security and success are our top priorities..........Innovate, collaborate, and achieve more with ease.",
              "Fast, reliable, and designed just for you!",
              "Experience the future of efficiency – start now!",
            ]}
            textColor="white"
          />
        </Box>
        <Box
          w={"100%"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          bottom={"10px"}
          position={"absolute"}
        >
          <Box>
            <Text fontSize="sm" textAlign="center" color="gray.200">
              © {new Date().getFullYear()} YourCompany. All rights reserved.
            </Text>
          </Box>
          <Box
            w={"30%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <FaFacebook cursor={"pointer"} color="white" size={"2em"} />
            <FaInstagram cursor={"pointer"} color="white" size={"2em"} />
            <FaTwitter cursor={"pointer"} color="white" size={"2em"} />
            <FaGithub cursor={"pointer"} color="white" size={"2em"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
