import { Box, Image , Text} from "@chakra-ui/react";
import FootOitch from "../../../public/footPitch.avif";
import PlayerCard from "../playerCard/PlayerCard";
import { useEffect, useState } from "react";
var basePath = "../../../public/"
import axios from "axios";
const footballTeam = {
  teamName: "FC Code United",
  formation: "4-3-3",
  players: [
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "GK",
      shirtNumber: 1,
      x: "44.5%",
      y: "85%",
      imageUrl: basePath+ "raya.jpeg"
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Left Back",
      shirtNumber: 3,
      x: "12.5%",
      y: "60%",
      imageUrl: basePath+ "cucurella.png"
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Center Back",
      shirtNumber: 4,
      x: "31.5%",
      y: "67%",
      imageUrl: basePath+ "aina.jpeg"  
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Center Back",
      shirtNumber: 5,
      x: "57.5%",
      y: "67%",
      imageUrl: basePath+ "gvardiol.jpeg"
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Right Back",
      shirtNumber: 2,
      x: "77.5%",
      y: "60%",
      imageUrl: basePath+ "walker.png"
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Left Midfield",
      shirtNumber: 6,
      x: "15.5%",
      y: "45%",
      imageUrl: basePath+ "sarr.jpeg"
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Central Midfield",
      shirtNumber: 8,
      x: "44.5%",
      y: "39%",
      imageUrl: basePath+ "bowen.jpeg"
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Right Midfield",
      shirtNumber: 7,
      x: "73.5%",
      y: "45%",
      imageUrl: basePath+ "palmer.jpeg" 
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Left Wing",
      shirtNumber: 10,
      x: "20.5%",
      y: "25%",
      imageUrl: basePath+ "marmoush.jpeg"
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Striker",
      shirtNumber: 9,
      x: "44.5%",
      y: "24%",
      imageUrl: basePath+ "watkins.jpeg"
    },
    
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Right Wing",
      shirtNumber: 29,
      x: "68.5%",
      y: "25%",
      imageUrl: basePath+ "Havertz.png"
    }
  ]
};
const FootballPitch = () => {
  const Nationality = "Spain"
  const [players, setPlayers] = useState(footballTeam.players)
  const [data, setData] = useState<any>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/player", {
          params: { Nationality }
        });
        setData(response.data);
        console.log("Fetched data:", response.data);
      } catch (err) {
        console.error("Error fetching:", err);
      }
    };

    fetchData();
  }, []);  // Runs only once on component mount

  // Set the best goalkeeper when data changes
  useEffect(() => {
    if (data.length > 0) {  // Check if data is available
      const bestGK = data
        .filter((player: any) => player.ClubPosition == "GK").reduce((best:any, current: any) => {
          return current.Overall > best.Overall ? current : best;
        });  // Filter goalkeepers
         // Initialize with an empty object
    players[0].name = bestGK.FullName;


      //the best defenders:
      const bestDefenders = data
      .filter((player: any) => player.ClubPosition === "CB" || player.ClubPosition === "LB" || player.ClubPosition === "RB")
      .sort((a: any, b: any) => b.Overall - a.Overall)
      .slice(0, 4);
      
      players[1].name = bestDefenders[0].FullName;
      players[2].name = bestDefenders[1].FullName;
      players[3].name = bestDefenders[2].FullName;
      players[4].name = bestDefenders[3].FullName;

      

const bestMiddlePlayers = data
  .filter((player: any) =>
    ["CM", "CDM", "CAM"].includes(player.ClubPosition)
  )
  .sort((a: any, b: any) => b.Overall - a.Overall)
  .slice(0, 3);


  players[5].name = bestMiddlePlayers[0].FullName;
  players[6].name = bestMiddlePlayers[1].FullName;
  players[7].name = bestMiddlePlayers[2].FullName;




  const bestAttackers = data
  .filter((player: any) =>
    ["ST", "CF", "LW", "RW"].includes(player.ClubPosition)
  )
  .sort((a: any, b: any) => b.Overall - a.Overall)
  .slice(0, 3);

bestAttackers.forEach((attacker: any, index: number) => {
  players[index + 8].name = attacker.FullName;
});

players[8].name = bestAttackers[0].FullName;
players[9].name = bestAttackers[1].FullName;
players[10].name = bestAttackers[2].FullName;

     
    }
  }, [data]); 
  

  
    return (
  <Box>
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
    <Box  transform={"rotate(90deg)"}   >
      <Box position={"relative"} width={"fit-content"} >
      <Image m={"auto"} width={"700px"}  src={FootOitch} alt="Football Pitch" border={"1px solid black"}/>
  
  {players.map((player, index) => {
    console.log("player : ", player)
    return (
    <PlayerCard player={player} key={index}/>
  )})}
      </Box>
    </Box>
    </Box>


  </Box>
    )
};

export default FootballPitch;
