import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box bg="gray.800" color="white" py={6} >
      <Container maxW="container.lg">
        <Stack textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            SquadBoss
          </Text>
        
          <HStack justify="space-between" w={"40%"} m={"auto"} >
            <Link href="#" color={"white"} _hover={{ textDecoration: "underline" }}>
              Home
            </Link>
            <Link href="/about" color={"white"}  _hover={{ textDecoration: "underline" }}>
              About
            </Link>
            <Link href="/contact" color={"white"}  _hover={{ textDecoration: "underline" }}>
              Contact
            </Link>
            <Link href="#" color={"white"}  _hover={{ textDecoration: "underline" }}>
              Pricing
            </Link>
          </HStack>

          <HStack width={"40%"} m={"auto"} my={6} display={"flex"} justifyContent={"space-around"}>
          <Button
              variant="solid"
             backgroundColor={"transparent"}
              p="0"
              color="white"
              minW="auto"
              minH="auto"
              w="auto"
              h="auto"
            >
                
              <Icon as={FaFacebook} boxSize="35px" />{" "}
              {/* Adjust size as needed */}
            </Button>

            <Button
              variant="solid"
              backgroundColor={"transparent"}
              p="0"
              color="white"
              minW="auto"
              minH="auto"
              w="auto"
              h="auto"
            >
                
              <Icon as={FaTwitter} boxSize="35px" />{" "}
              {/* Adjust size as needed */}
            </Button>

            <Button
              variant="solid"
              backgroundColor={"transparent"}
              p="0"
              color="white"
              minW="auto"
              minH="auto"
              w="auto"
              h="auto"
            >
                
              <Icon as={FaInstagram} boxSize="35px" />{" "}
              {/* Adjust size as needed */}
            </Button>

            <Button
              variant="solid"
              backgroundColor={"transparent"}
              p="0"
              color="white"
              minW="auto"
              minH="auto"
              w="auto"
              h="auto"
            >
                
              <Icon as={FaLinkedin} boxSize="35px" />{" "}
              {/* Adjust size as needed */}
            </Button>
          </HStack>
          <Text fontSize="sm">
            © {new Date().getFullYear()} YourApp. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
