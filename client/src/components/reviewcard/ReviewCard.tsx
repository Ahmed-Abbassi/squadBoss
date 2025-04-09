import React from "react";
import {  Box, Text, VStack } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
interface Review {
  name: string;
  image: string;
  role: string;
}

const reviews: Review[] = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Lead Developer",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "UI/UX Designer",
  },
  {
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    role: "Backend Engineer",
  },
  {
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    role: "Project Manager",
  },
];

const ReviewCard: React.FC = () => {
  return (
<Box width={"80%"} margin={"auto"} my={"60px"} padding={"20px"} display={"flex"} justifyContent={"space-around"}>
        {reviews.map((review)=>(
            <Box p={4} bg="gray.100" borderRadius="lg" boxShadow="md" maxW="sm" textAlign="center">
            <VStack >
              <Avatar name={review.name} src={review.image} size="lg" />
              <Text fontSize="lg" fontWeight="bold">{review.name}</Text>
              <Text fontSize="md" color="gray.600">"{review.role}"</Text>
            </VStack>
          </Box>
        ))}
    </Box>
  );
};



export default ReviewCard;
