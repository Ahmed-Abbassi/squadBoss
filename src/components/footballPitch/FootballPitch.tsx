import { Box, Image, Text, VStack } from "@chakra-ui/react";
import FootOitch from "../../../public/footPitch.avif";

const basePath = "../../../public/";

const FootballPitch = () => {
  const footballTeam = {
    teamName: "FC Code United",
    formation: "4-3-3",
    players: [
      { name: "Raya", position: "Goalkeeper", shirtNumber: 1, x: "50%", y: "80%", imageUrl: basePath + "raya.jpeg" },
      { name: "Cucurella", position: "Left Back", shirtNumber: 3, x: "12%", y: "55%", imageUrl: basePath + "cucurella.png" },
      { name: "Aina", position: "Center Back", shirtNumber: 4, x: "28%", y: "60%", imageUrl: basePath + "aina.jpeg" },
      { name: "Gvardiol", position: "Center Back", shirtNumber: 5, x: "70%", y: "60%", imageUrl: basePath + "gvardiol.jpeg" },
      { name: "Walker", position: "Right Back", shirtNumber: 2, x: "90%", y: "55%", imageUrl: basePath + "walker.png" },
      { name: "Sarr", position: "Left Midfield", shirtNumber: 6, x: "12%", y: "35%", imageUrl: basePath + "sarr.jpeg" },
      { name: "Bowen", position: "Central Midfield", shirtNumber: 8, x: "50%", y: "42%", imageUrl: basePath + "bowen.jpeg" },
      { name: "Palmer", position: "Right Midfield", shirtNumber: 7, x: "90%", y: "35%", imageUrl: basePath + "palmer.jpeg" },
      { name: "Marmoush", position: "Left Wing", shirtNumber: 10, x: "27%", y: "17%", imageUrl: basePath + "marmoush.jpeg" },
      { name: "Watkins", position: "Striker", shirtNumber: 9, x: "50%", y: "10%", imageUrl: basePath + "watkins.jpeg" },
      { name: "Kai Havertz", position: "Right Wing", shirtNumber: 29, x: "70%", y: "17%", imageUrl: basePath + "Havertz.png" },
    ],
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
      <Box
        width={{ base: "100%", md: "1000px", lg: "1200px" }}
        height={{ base: "500px", md: "650px", lg: "750px" }}
        position="relative"
        border="2px solid"
        borderColor="gray.200"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg="gray.50"
      >
        <Image
          src={FootOitch}
          alt="Football Pitch"
          width="100%"
            height="100%"
          objectFit="cover"
          borderRadius="5px"
        />

        {footballTeam.players.map((player, index) => (
          <Box
            key={index}
            position="absolute"
            left={player.x}
            top={player.y}
            width={{ base: "70px", md: "100px" }}
            height={{ base: "90px", md: "120px" }}
            borderRadius="md"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            backgroundColor="white"
            boxShadow="md"
            padding="8px"
            justifyContent="space-between"
            border="1px solid #e2e8f0"
            transform="translate(-50%, -50%)"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.3s ease-in-out",
              zIndex: 10,
              boxShadow: "xl",
              cursor: "pointer",
            }}
          >
            <Image
              src={player.imageUrl}
              alt={player.name}
              width="100%"
              height="100%px"
              objectFit="cover"
              borderRadius="md"
            />
            <VStack spacing={1} textAlign="center" mt="4px">
              <Text fontWeight="bold" fontSize={{ base: "12px", md: "14px" }} color="gray.800">
                {player.name}
              </Text>
              <Text fontSize={{ base: "10px", md: "12px" }} color="gray.500">
                {player.position}
              </Text>
              <Text fontWeight="bold" fontSize={{ base: "12px", md: "14px" }} color="green.600">
                #{player.shirtNumber}
              </Text>
            </VStack>
          </Box>
        ))}
      </Box>

      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="bold"
        textAlign="center"
        mt={4}
        color="gray.700"
      >
        Formation: {footballTeam.formation}
      </Text>
    </Box>
  );
};

export default FootballPitch;
