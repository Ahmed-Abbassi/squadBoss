import { Box, Text, Image, Input, IconButton, Icon } from "@chakra-ui/react";
import Header from "../../components/header/Header";
import Soccerfriends from "../../../public/foot1.avif";
import { FaBook, FaQuestion, FaInstagram, FaPhone } from "react-icons/fa";
import Footer from "../../components/footer/Footer";
import {  } from "react-icons";



const aboutCardsContent: { icon: any; cardTitle: string; cardContent: string; cardPath: string }[] = [
    {
      icon: FaInstagram,
      cardTitle: "Join Our Community",
      cardContent: "Connect with other players, share experiences, and stay updated on the latest news.",
      cardPath: "/community",
    },
    {
      icon: FaBook,
      cardTitle: "Learning Resources",
      cardContent: "Explore our extensive library of guides and tutorials to improve your game.",
      cardPath: "/resources",
    },
    {
      icon: FaPhone,
      cardTitle: "Contact Support",
      cardContent: "Need help? Reach out to our support team for assistance with any issues.",
      cardPath: "/contact",
    },
    {
      icon: FaQuestion,
      cardTitle: "Commun Questions",
      cardContent: "Yousetion usually asked by new commers to our solutions.",
      cardPath: "/commun_questions",
    },
  ];
  

function AboutUs() {
  return (
    <Box>
      <Header />

      {/* Background Image & Search Input */}
      <Box pos="relative" h="400px">
        <Image src={Soccerfriends} alt="image" w="100%" h="100%" objectFit="cover" filter="brightness(0.7)" />
        <Text pos="absolute" color="white" fontSize="50px" fontWeight="bold" top="170px" left="50%" transform="translateX(-50%)">
          Resource Center
        </Text>
        <Input
          pos="absolute"
          top="300px"
          left="50%"
          transform="translateX(-50%)"
          type="text"
          width="40%"
          bgColor="white"
          border="2px solid #ccc"
          height="50px"
          placeholder="Example: How to add a new player?"
          borderRadius="8px"
          shadow="md"
          _focus={{ borderColor: "blue.400", shadow: "lg" }}
        />
      </Box>

      {/* Cards Section */}
      <Box w={"80%"} left={"10%"}  display="flex" justifyContent="flex-start" flexWrap="wrap" gap={6} mt={6} position={"absolute"}>
        {aboutCardsContent.map((_, index) => (
          <Box
          cursor={"pointer"}
            key={index}
            width={{ base: "100%", sm: "48%", md: "30%" }}
            bgColor="white"
            padding="30px"
            borderRadius="12px"
            shadow="lg"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)", shadow: "xl" }}
            
          >
            <IconButton bgColor="green.600" color="white" boxSize={"50px"} _hover={{ bgColor: "blue.500" }}>
              <Icon as={_.icon} boxSize="35px" />
            </IconButton>
            <Text fontSize="20px" fontWeight="bold" mt={3}>
              {_.cardTitle}
            </Text>
            <Text color="gray.600" mt={2}>
              {_.cardContent}
            </Text>
          </Box>
        ))}
      </Box>
      <Box mt={"520px"}>
      <Footer/>
      </Box>
    </Box>
  );
}

export default AboutUs;
