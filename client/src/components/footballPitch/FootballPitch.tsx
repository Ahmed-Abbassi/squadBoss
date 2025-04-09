import { Box, Image , Text} from "@chakra-ui/react";
import FootOitch from "../../../public/footPitch.avif";
var basePath = "../../../public/"
const FootballPitch = () => {

const footballTeam = {
    teamName: "FC Code United",
    formation: "4-3-3",
    players: [
      {
        name: "Raya",
        goals: 10,
        assists: 5,
        position: "Goalkeeper",
        shirtNumber: 1,
        x: "41%",
        y: "80%",
        imageUrl: basePath+ "raya.jpeg"
      },
      {
        name: "Cucurella",
        goals: 10,
        assists: 5,
        position: "Left Back",
        shirtNumber: 3,
        x: "9%",
        y: "55%",
        imageUrl: basePath+ "cucurella.png"
      },
      {
        name: "Aina",
        goals: 10,
        assists: 5,
        position: "Center Back",
        shirtNumber: 4,
        x: "28%",
        y: "60%",
        imageUrl: basePath+ "aina.jpeg"  
      },
      {
        name: "Gvardiol",
        goals: 10,
        assists: 5,
        position: "Center Back",
        shirtNumber: 5,
        x: "54%",
        y: "60%",
        imageUrl: basePath+ "gvardiol.jpeg"
      },
      {
        name: "Walker",
        goals: 10,
        assists: 5,
        position: "Right Back",
        shirtNumber: 2,
        x: "73%",
        y: "55%",
        imageUrl: basePath+ "walker.png"
      },
      {
        name: "Sarr",
        goals: 10,
        assists: 5,
        position: "Left Midfield",
        shirtNumber: 6,
        x: "12%",
        y: "35%",
        imageUrl: basePath+ "sarr.jpeg"
      },
      {
        name: "Bowen",
        goals: 10,
        assists: 5,
        position: "Central Midfield",
        shirtNumber: 8,
        x: "41%",
        y: "42%",
        imageUrl: basePath+ "bowen.jpeg"
      },
      {
        name: "Palmer",
        goals: 10,
        assists: 5,
        position: "Right Midfield",
        shirtNumber: 7,
        x: "70%",
        y: "35%",
        imageUrl: basePath+ "palmer.jpeg" 
      },
      {
        name: "Marmoush",
        goals: 10,
        assists: 5,
        position: "Left Wing",
        shirtNumber: 10,
        x: "17%",
        y: "17%",
        imageUrl: basePath+ "marmoush.jpeg"
      },
      {
        name: "Watkins",
        goals: 10,
        assists: 5,
        position: "Striker",
        shirtNumber: 9,
        x: "41%",
        y: "10%",
        imageUrl: basePath+ "watkins.jpeg"
      },
      
      {
        name: "Kai Havertz",
        goals: 10,
        assists: 5,
        position: "Right Wing",
        shirtNumber: 29,
        x: "65%",
        y: "17%",
        imageUrl: basePath+ "Havertz.png"
      }
    ]
  };
  
    return (
  <>
    <Box ml={"100px"} width={"fit-content"} position={"relative"} border={"1px solid black"}>
  <Image src={FootOitch} alt="Football Pitch" />
  
  {footballTeam.players.map((player, index) => (
    <Box
      key={index}
      position="absolute"
      left={player.x}
      top={player.y}
      width="80px"
      height="100px"
      _hover={{
        width:"120px",
        height:"180px",
        transition: "all 0.3s ease", // Smooth transition
        cursor: "pointer",
        zIndex:100
      }}
      borderRadius="10px"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      backgroundColor={"white"}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      padding="10px"
      justifyContent="space-between"
    >
      {/* Player Image */}
      <Image
        src={player.imageUrl}
        alt={player.name}
        width="100%"
        height="100px"
        objectFit="cover"
        borderRadius="5px"
      />
      
      {/* Player Info */}
      <Box textAlign="center" mt="8px">
        <Text fontWeight="bold" fontSize="14px" color="black">{player.name}</Text>
        <Text fontSize="12px" color="gray.500">{player.position}</Text>
        <Text fontWeight="bold" fontSize="16px" color="black">#{player.shirtNumber}</Text>
      </Box>
      
      {/* Player Stats (Optional) */}
      <Box display="flex" justifyContent="space-between" mt="8px" fontSize="12px">
        <Text color="gray.600">Goals: {player.goals || 0}</Text>
        <Text color="gray.600">Assists: {player.assists || 0}</Text>
      </Box>
    </Box>
  ))}

</Box>

<Text fontSize="2xl" fontWeight="bold" textAlign="center" mt={4}>
  formation : {footballTeam.formation}
</Text>
  </>
    )
};

export default FootballPitch;
