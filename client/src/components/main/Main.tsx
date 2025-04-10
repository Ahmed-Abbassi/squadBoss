import SquadBossLogo from "../../../public/soccerImageHome.jpg";
import dashboard from "../../../public/dashboard.png";
import dashboard1 from "../../../public/dash.png";
import { Image, Box, Text, Input, Button, Heading } from "@chakra-ui/react";
import Figure from "../figure/Figure";

import ReviewCard from "../reviewcard/ReviewCard";
import Footer from "../footer/Footer";



function Main() {
  return (
    <Box position={"relative"} width={"100%"} height={"100vh"}>
      <Image marginTop={"10px"} src={SquadBossLogo} alt="image" />
      <Image
        position={"absolute"}
        top={"10%"}
        left={"50%"}
        marginTop={"10px"}
        src={dashboard}
        width={"600px"}
        alt="image"
      />
      <Box
        position={"absolute"}
        top={"10%"}
        left={"10%"}
        width={"40%"}
        marginTop={"10px"}
        color={"white"}
      >
        <Text fontWeight={"extrabold"} fontSize={"50px"} lineHeight={"tall"}>
          Manage your soccer team like a pro
        </Text>

        <Text fontWeight={"bolder"} mt={"50px"} fontSize={"20px"}>
          SportEasy is the go-to software for soccer coaches, streamlining
          internal team communication and organization.
        </Text>
        <Box
          w={"500px"}
          display={"flex"}
          justifyContent={"space-around"}
          mt={"50px"}
        >
          <Input
            width={"50%"}
            type="text"
            placeholder="email"
            bgColor={"white"}
            color={"black"}
          />
          <Button bgColor={"green.600"} w={"30%"}>
            Register my team
          </Button>
        </Box>
      </Box>
      <Box width={"80%"} margin={"auto"} mt={"60px"} padding={"20px"}>
        <Text fontWeight={"bold"} fontSize={"30px"} textAlign={"center"}>
          A few figures about SquadBoss
        </Text>
        <Box display={"flex"} justifyContent={"space-around"} mt={"50px"}>
          <Figure bgColor= "green.600" feature="Teams" value={"3 000"} />
          <Figure bgColor= "gray.700" feature="Players" value={"50 000"} />
          <Figure bgColor= "green.600" feature="Matches" value={"100 000"} />
        </Box>
      </Box>
      <Box mt={"200px"}>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          width={"85%"}
          alignItems={"stretch"} // Ensures that both items stretch to match height
          margin={"auto"}
          mt={"50px"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"50%"}
            justifyContent={"space-evenly"}
          >
            <Heading fontSize={"30px"} fontWeight={"bolder"}>
              Simplify your football team’s organization
            </Heading>
            <Text>
              SquadBoss saves coaches time by simplifying administrative and
              sports tasks. The app allows them to manage their sports schedule
              (games, practice, tournaments), communication and stats on a
              single app. It streamlines internal communication and organization
              for amateur football teams, making it the number one choice for
              team managers and coaches.
            </Text>
          </Box>

          <Image
            src={dashboard1}
            width={"600px"}
            height={"100%"}
            objectFit={"cover"}
            alt="image"
          />
          {/* `objectFit={"cover"}` ensures the image covers the box without stretching */}
        </Box>

        <Box width="85%" margin={"auto"} bgColor={"#030E2F"} mt={"200px"} mb={"100px"}  display={"flex"} px={"70px"} justifyContent={"space-between"} alignItems={"center"} py={"30px"}  color={"white"}>
            <Box width={"50%"}>
                <Text fontSize={"20px"} fontWeight={"semibold"}>
                    Join over 10,000 clubs
                </Text>
                <Text fontSize={"16px"} mt={"10px"} fontWeight={"semibold"}>
                    and 150,000 teams by signing up today.
                </Text>
            </Box>
            <Box  width={"32%"} display={"flex"} justifyContent={"space-between"}>
                <Button px={"30px"} bgColor={"#63C37B"}>
                    Register my team
                </Button>
                <Button px={"30px"} color={"green.600"} bgColor={"white"} border={"1px solid green.600"} >
                    Register my club
                </Button>
            </Box>
        </Box>
      </Box>
      <Box>
      <Box>
        <Text fontSize={"50px"} fontWeight={"bold"} textAlign={"center"}>Our Team</Text>
      <ReviewCard/>
      </Box>
      </Box>

      <Box>
        <Footer/>
      </Box>      
    </Box>
  );
}

export default Main;
