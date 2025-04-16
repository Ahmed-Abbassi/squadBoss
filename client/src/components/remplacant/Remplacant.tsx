import { Box, Image, Text, VStack } from "@chakra-ui/react";
import undefined from "../../../public/undefined.webp"
type FootballCardProps = {
  name: string;

  position: string;
};

const Remplacant = ({ name, position }: FootballCardProps) => {
  return (
    <Box
    marginTop={"10px"}
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      w="100px"
      bg="white"
      _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
      transition="all 0.2s"
    >
      <Image src={undefined} alt={name} width="100%" height="100px" objectFit="cover" />
      <VStack p={4} >
        <Text fontWeight="bold" fontSize="lg">{name}</Text>
        <Text color="gray.500">{position}</Text>
      </VStack>
    </Box>
  );
};

export default Remplacant;
