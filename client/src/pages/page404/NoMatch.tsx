import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const NoMatch = ()=>{
    const navigate = useNavigate();
    return(
        <MotionBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            flexDirection="column"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <VStack  textAlign="center">
                <Heading fontSize={{ base: "4xl", md: "6xl" }} color="red.500">
                    404
                </Heading>
                <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
                    Oops! The page you are looking for does not exist.
                </Text>
                <Button onClick={()=>{
                    navigate("/");
                }}>
                    Go Home
                </Button>
            </VStack>
        </MotionBox>
    )
}
export default NoMatch;