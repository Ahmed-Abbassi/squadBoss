import { Box, Button, Flex, HStack, Image, Link, Spacer, Text } from "@chakra-ui/react";
import SquadBossLogo from "../../../public/squadBoss.png"
import { useNavigate } from "react-router";


const Header = () => {
    const navigate = useNavigate();
  return (
    <Box pos={"fixed"} zIndex={"1000"} width={"100%"} top={"0"} as="nav" bg="white" px={8} py={4} boxShadow="sm">
      <Flex align="center">
        {/* Logo Section */}
        <HStack >
          <Image src={SquadBossLogo} alt="Logo" boxSize="45px" />
          <Text fontSize="lg" fontWeight="bold">SquadBoss</Text>
        </HStack>

        <Spacer />

        {/* Navigation Links */}
        <HStack fontSize="md" width={"30%"} justifyContent={"space-between"} fontWeight="medium" color="gray.700">
          <Link href="/" _hover={{ color: "green.400", transition: ".3s .1s ease", textDecoration: "none" }}>Home</Link>
          <Link href="/about" _hover={{ color: "green.400", transition: ".3s .1s ease", textDecoration: "none" }}>About us</Link>
          <Link href="contact" _hover={{ color: "green.400", transition: ".3s .1s ease", textDecoration: "none" }}>Contact</Link>
          <Link href="pricing" _hover={{ color: "green.400", transition: ".3s .1s ease", textDecoration: "none" }}>Pricing</Link>
        </HStack>

        <Spacer />

        {/* Buy Now Button */}
        <Box display={"flex"} justifyContent={"space-between"} width={"10%"}>
        <Button colorScheme="teal" backgroundColor={"#90EE90"} size="md" borderRadius="md"
        onClick={()=> navigate("/login",{replace:true})}>
          Login
        </Button>
        <Button colorScheme="teal" size="md" borderRadius="md"
        onClick={()=> navigate("/signin", {replace:true})}>
          Signin
        </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
