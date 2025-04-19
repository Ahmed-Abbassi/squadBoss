import { Box, Button, Image , Text} from "@chakra-ui/react";
import FootOitch from "../../../public/footPitch.avif";
import PlayerCard from "../playerCard/PlayerCard";
import { useEffect, useState } from "react";
var basePath = "../../../public/"
import axios from "axios";


import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Remplacant from "../remplacant/Remplacant";

// Chart options






const footballTeam433 = {
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
      imageUrl: basePath+ "raya.jpeg",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Left Back",
      shirtNumber: 3,
      x: "12.5%",
      y: "60%",
      imageUrl: basePath+ "cucurella.png",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Center Back",
      shirtNumber: 4,
      x: "31.5%",
      y: "67%",
      imageUrl: basePath+ "aina.jpeg"  ,
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Center Back",
      shirtNumber: 5,
      x: "57.5%",
      y: "67%",
      imageUrl: basePath+ "gvardiol.jpeg",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Right Back",
      shirtNumber: 2,
      x: "77.5%",
      y: "60%",
      imageUrl: basePath+ "walker.png",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Left Midfield",
      shirtNumber: 6,
      x: "15.5%",
      y: "45%",
      imageUrl: basePath+ "sarr.jpeg",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Central Midfield",
      shirtNumber: 8,
      x: "44.5%",
      y: "39%",
      imageUrl: basePath+ "bowen.jpeg",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Right Midfield",
      shirtNumber: 7,
      x: "73.5%",
      y: "45%",
      imageUrl: basePath+ "palmer.jpeg" ,
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Left Wing",
      shirtNumber: 10,
      x: "20.5%",
      y: "25%",
      imageUrl: basePath+ "marmoush.jpeg",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Striker",
      shirtNumber: 9,
      x: "44.5%",
      y: "24%",
      imageUrl: basePath+ "watkins.jpeg",
      Overall: 99
    },
    
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Right Wing",
      shirtNumber: 29,
      x: "68.5%",
      y: "25%",
      imageUrl: basePath+ "Havertz.png",
      Overall: 99
    }
  ]
};



const footballTeam4321 = {
  teamName: "FC Code United",
  formation: "4-3-2-1",
  players: [
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "GK",
      shirtNumber: 1,
      x: "44.5%",
      y: "85%",
      imageUrl: basePath+ "raya.jpeg",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Left Back",
      shirtNumber: 3,
      x: "12.5%",
      y: "67%",
      imageUrl: basePath+ "cucurella.png",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Center Back",
      shirtNumber: 4,
      x: "31.5%",
      y: "67%",
      imageUrl: basePath+ "aina.jpeg"  ,
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Center Back",
      shirtNumber: 5,
      x: "57.5%",
      y: "67%",
      imageUrl: basePath+ "gvardiol.jpeg",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Right Back",
      shirtNumber: 2,
      x: "77.5%",
      y: "67%",
      imageUrl: basePath+ "walker.png",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Left Midfield",
      shirtNumber: 6,
      x: "15.5%",
      y: "45%",
      imageUrl: basePath+ "sarr.jpeg",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Central Midfield",
      shirtNumber: 8,
      x: "44.5%",
      y: "45%",
      imageUrl: basePath+ "bowen.jpeg",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Right Midfield",
      shirtNumber: 7,
      x: "73.5%",
      y: "45%",
      imageUrl: basePath+ "palmer.jpeg" ,
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Left Wing",
      shirtNumber: 10,
      x: "22.5%",
      y: "25%",
      imageUrl: basePath+ "marmoush.jpeg",
      Overall: 99
    },
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Striker",
      shirtNumber: 9,
      x: "44.5%",
      y: "15%",
      imageUrl: basePath+ "watkins.jpeg",
      Overall: 99
    },
    
    {
      name: "unset",
      goals: 10,
      assists: 5,
      position: "Right Wing",
      shirtNumber: 29,
      x: "66.5%",
      y: "25%",
      imageUrl: basePath+ "Havertz.png",
      Overall: 99
    }
  ]
};





const FootballPitch = ({Nationality}: {Nationality: string}) => {

  const [options, setOptions] = useState<any>({
    chart: {
      
      plotBorderWidth: undefined,
      plotShadow: false,
      type: "pie"
    },
    title: {
      text: "Football Team Players",
      align: "left"
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    accessibility: {
      point: {
        valueSuffix: "%"
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %"
        }
      }
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        type: "pie",
        data: [
          
        ]
      } as Highcharts.SeriesPieOptions
    ]
  })

















  const [data, setData] = useState<any>([]);
  const [playersCount, setPlayersCount] = useState<any>([]);
  const [formation, setFormation] = useState(footballTeam433)
  const [players, setPlayers] = useState(formation.players)

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
        .filter((player: any) => player.ClubPosition == "GK")
        setPlayersCount((prev: any) => [
          ...prev,
          {
            name: "goalkeeper",
            y: bestGK.length * 100 / data.length,
          },
        ]);
        
        
        bestGK.reduce((best:any, current: any) => {
          return current.Overall > best.Overall ? current : best;
        });  // Filter goalkeepers
         // Initialize with an empty object
    players[0].name = bestGK.FullName;
    players[0].Overall = bestGK.Overall;


      //the best defenders:
      const bestDefenders = data
      .filter((player: any) => player.ClubPosition === "CB" || player.ClubPosition === "LB" || player.ClubPosition === "RB")
      setPlayersCount((prev: any) => [
        ...prev,
        {
          name: "Defenders",
          y: bestDefenders.length * 100 / data.length,
        },
      ]);
      bestDefenders.sort((a: any, b: any) => b.Overall - a.Overall)
      .slice(0, 4);
      console.log("bestDefenders : ", playersCount);
      
      players[1].name = bestDefenders[0].FullName;
      players[2].name = bestDefenders[1].FullName;
      players[3].name = bestDefenders[2].FullName;
      players[4].name = bestDefenders[3].FullName;

      players[1].Overall = bestDefenders[0].Overall;
      players[2].Overall = bestDefenders[1].Overall;
      players[3].Overall = bestDefenders[2].Overall;
      players[4].Overall = bestDefenders[3].Overall;

      

const bestMiddlePlayers = data
  .filter((player: any) =>
    ["CM", "CDM", "CAM"].includes(player.ClubPosition)
  )
  setPlayersCount((prev: any) => [
    ...prev,
    {
      name: "Middlifiers",
      y: bestMiddlePlayers.length * 100 / data.length,
    },
  ]);
  bestMiddlePlayers.sort((a: any, b: any) => b.Overall - a.Overall)
  .slice(0, 3);


  players[5].name = bestMiddlePlayers[0].FullName;
  players[6].name = bestMiddlePlayers[1].FullName;
  players[7].name = bestMiddlePlayers[2].FullName;

  players[5].Overall = bestMiddlePlayers[0].Overall;
  players[6].Overall = bestMiddlePlayers[1].Overall;
  players[7].Overall = bestMiddlePlayers[2].Overall;




  const bestAttackers = data
  .filter((player: any) =>
    ["ST", "CF", "LW", "RW"].includes(player.ClubPosition)
  )
  setPlayersCount((prev: any) => [
    ...prev,
    {
      name: "Attackers",
      y: bestAttackers.length * 100 / data.length,
    },
  ]);
  bestAttackers.sort((a: any, b: any) => b.Overall - a.Overall)
  .slice(0, 3);

  setOptions((prevOptions: any) => ({
    ...prevOptions,
    series: [
      {
        ...prevOptions.series[0],
        data: playersCount
      }
    ]
  }));


players[8].name = bestAttackers[0].FullName;
players[9].name = bestAttackers[1].FullName;
players[10].name = bestAttackers[2].FullName;

players[8].Overall = bestAttackers[0].Overall;
players[9].Overall = bestAttackers[1].Overall;
players[10].Overall = bestAttackers[2].Overall;

     
    }
  }, [data]); 
  

  
    return (
  <Box>
    <Button
    onClick={() => {
      if (formation.formation === "4-3-3") {
        setFormation(footballTeam4321);
        setPlayers(footballTeam4321.players)

        console.log("formation : ", footballTeam4321.formation);
        
        
      }
      else {
        setFormation(footballTeam433);
        setPlayers(footballTeam433.players)
        console.log("formation : ", footballTeam433.formation);
        
      }
    }
    }>change formation</Button>
    <Box >
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      
    <Box  transform={"rotate(90deg)"}   >
      <Box position={"relative"} width={"fit-content"} >
      <Image m={"auto"} width={"700px"}  src={FootOitch} alt="Football Pitch" border={"1px solid black"}/>
  
  {players.map((player, index) => {
    console.log("player : ", player)
    return (
    <PlayerCard player={player} key={index} styler={{
      position: "absolute",
      left: player.x,
      top: player.y,
      transition: "all 0.5s ease-in-out",
    }}/>
  )})}
      </Box>
    </Box>
    </Box>


  </Box >
  <Text fontSize={"30px"} fontWeight={"bold"}>substitute players</Text>
  <Box display={"flex"} justifyContent={"space-around"} mt={5}  flexWrap={"wrap"}>
    {data.map((player:any, index: any) => {
    console.log("player : ", player)
    return (
    <Remplacant key={index} name={player.FullName} position={player.ClubPosition}/>
  )})}
    </Box>
    <Box width={"500px"} bgColor={"gray.100"} borderRadius={"10px"} p={5} mt={5} ml={5}>
      
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
    
  </Box>
    )
};

export default FootballPitch;
