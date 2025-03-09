import {
    Box,
    Text,
    
  } from "@chakra-ui/react";
  7;
  import { motion } from "framer-motion";

function Figure({feature, value, bgColor} : {feature: string, value: string, bgColor: string}) {
    
const MotionBox = motion(Box);
  return (
    <MotionBox
            color={"white"}
            backgroundColor={bgColor}
            width={"200px"}
            height={"200px"}
            border="1px solid"
            borderRadius={"50%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            animate={{ y: [-10, 10] }} // Moves up and down
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }} // Infinite loop
          >
            <Text fontSize={"50px"} fontWeight={"bold"}>
              {value}
            </Text>
            <Text fontSize={"15px"} fontWeight={"bold"}>
              {feature}
            </Text>
          </MotionBox>
  )
}

export default Figure