    import { Box, Image, Text } from "@chakra-ui/react";
import undefined from "../../../public/undefined.webp"
    function PlayerCard({ player, key }: any) {
    return (
        <Box 
        transform={"rotate(-90deg)"}
        key={key}
        position="absolute"
        left={player.x}
        top={player.y}
        width="80px"
        height="100px"
        _hover={{
            width: "120px",
            height: "180px",
            transition: "all 0.3s ease", // Smooth transition
            cursor: "pointer",
            zIndex: 100,
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
            <Box position={"relative"}>
                <Box pos={"absolute"} top={"-10px"} left={"45px"}  width={"25px"} bgColor={"red.400"} borderRadius={"50%"}>
                <Text textAlign={"center"} >{player.Overall || 99}</Text>
                </Box>
            </Box>
        {/* Player Image */}
        <Image
            src={undefined}
            alt={player.name}
            width="100%"
            height="100px"
            objectFit="cover"
            borderRadius="5px"
        />

        {/* Player Info */}
        <Box textAlign="center" mt="8px">
            <Text fontWeight="bold" fontSize="14px" color="black">
            {player.name}
            </Text>
            <Text fontSize="12px" color="gray.500">
            {player.position}
            </Text>
            <Text fontWeight="bold" fontSize="16px" color="black">
            #{player.shirtNumber}
            </Text>
        </Box>

        {/* Player Stats (Optional) */}
        <Box
            display="flex"
            justifyContent="space-between"
            mt="8px"
            fontSize="12px"
        >
            <Text color="gray.600">Goals: {player.goals || 0}</Text>
            <Text color="gray.600">Assists: {player.assists || 0}</Text>
        </Box>
        </Box>
    );
    }

    export default PlayerCard;
