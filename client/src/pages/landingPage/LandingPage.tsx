import { Box, Button, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Avatar } from "../../components/ui/avatar";

const LandingPage = () => {

    const user = { name: "John Doe", role: "Football Trainer", avatar: "https://via.placeholder.com/150" }; // Mock user data
    let navigate = useNavigate();
    return (
        <Box minH="100vh" bg="gray.900" color="white" p={8} textAlign="center">
            <VStack >
                <Avatar size="xl" src={user.avatar} />
                <Heading>Welcome, {user.name}!</Heading>
                <Text fontSize="lg">Your role: {user.role}</Text>
                
                <HStack >
                    <Button colorScheme="blue" onClick={() => navigate("/profile")}>
                        View Profile
                    </Button>
                    <Button colorScheme="red" onClick={() => navigate("/logout")}>Logout</Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default LandingPage;
