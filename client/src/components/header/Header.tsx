// components/header/Header.tsx
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="white"
      boxShadow="sm"
      p={4}
      zIndex={1000}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Text fontSize="xl" fontWeight="bold">
          SquadBoss
        </Text>
        <Flex gap={6} align="center">
          <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
            Accueil
          </Link>
          <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
            À propos
          </Link>
          <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
            Contact
          </Link>
          <Link href="#" fontSize="md" _hover={{ textDecoration: "underline" }}>
            Tarifs
          </Link>
          <Button colorScheme="green" size="sm">
            Connexion
          </Button>
          <Button variant="outline" size="sm">
            Inscription
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;