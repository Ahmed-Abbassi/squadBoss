import {
    Box,
    Text,
    Button,
    Flex,
    IconButton,
    Stack,
    Link,
    useBreakpointValue,
    VStack,
    Heading,
    Divider,
    Image, // Added for displaying player photos
  } from "@chakra-ui/react";
  import { FaBars } from "react-icons/fa";
  import Highcharts from "highcharts";
  import HighchartsReact from "highcharts-react-official";
  import { useState, useMemo } from "react";
  import FootballPitch from "../../components/footballPitch/FootballPitch.tsx";
  
  const LandingPage = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    const toggleSidebar = () => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    };
  
    // Use root path for public assets
    const basePath = "/";
  
    const chartOptions: Highcharts.Options = useMemo(
      () => ({
        chart: {
          type: "line",
          backgroundColor: "transparent",
        },
        title: {
          text: "Statistiques d'équipe",
          style: { fontSize: "18px", fontWeight: "bold", color: "#2D3748" },
        },
        xAxis: {
          categories: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil"],
          labels: { style: { fontSize: "12px", color: "#718096" } },
        },
        yAxis: {
          title: {
            text: "Valeurs",
            style: { fontSize: "14px", color: "#718096" },
          },
          gridLineColor: "#e6e6e6",
        },
        series: [
          {
            type: "line",
            name: "Buts",
            data: [5, 10, 15, 20, 25, 30, 35],
            color: "#2ecc71",
          },
          {
            type: "line",
            name: "Passes décisives",
            data: [3, 8, 12, 18, 22, 28, 32],
            color: "#3498db",
          },
        ],
        credits: { enabled: false },
      }),
      []
    );
  
    // Substitutes data
    const substitutes = [
        { name: "Raya", position: "Goalkeeper", shirtNumber: 1, x: "41%", y: "80%", imageUrl: basePath + "raya.jpeg" },
        { name: "Cucurella", position: "Left Back", shirtNumber: 3, x: "2%", y: "35%", imageUrl: basePath + "cucurella.png" },
        { name: "Aina", position: "Center Back", shirtNumber: 4, x: "28%", y: "60%", imageUrl: basePath + "aina.jpeg" },
        { name: "Gvardiol", position: "Center Back", shirtNumber: 5, x: "54%", y: "60%", imageUrl: basePath + "gvardiol.jpeg" },
        { name: "Walker", position: "Right Back", shirtNumber: 2, x: "73%", y: "55%", imageUrl: basePath + "walker.png" },
        { name: "Sarr", position: "Left Midfield", shirtNumber: 6, x: "12%", y: "35%", imageUrl: basePath + "sarr.jpeg" },
        { name: "Bowen", position: "Central Midfield", shirtNumber: 8, x: "41%", y: "42%", imageUrl: basePath + "bowen.jpeg" },
        { name: "Palmer", position: "Right Midfield", shirtNumber: 7, x: "70%", y: "35%", imageUrl: basePath + "palmer.jpeg" },
        { name: "Marmoush", position: "Left Wing", shirtNumber: 10, x: "17%", y: "17%", imageUrl: basePath + "marmoush.jpeg" },
        { name: "Watkins", position: "Striker", shirtNumber: 9, x: "41%", y: "10%", imageUrl: basePath + "watkins.jpeg" },
        { name: "Kai Havertz", position: "Right Wing", shirtNumber: 29, x: "65%", y: "17%", imageUrl: basePath + "Havertz.png" },
    ];
  
    return (
      <Box display="flex" minHeight="100vh" flexDirection="column" bg="gray.100">
        {/* Header */}
        <Box
          as="header"
          bg="white"
          boxShadow="sm"
          p={4}
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={1000}
        >
          <Flex justify="space-between" align="center">
            <Heading size="md" color="green.600">
              SquadBoss
            </Heading>
            <Flex gap={4}>
              <Link color="gray.600" _hover={{ color: "green.600" }}>
                Accueil
              </Link>
              <Link color="gray.600" _hover={{ color: "green.600" }}>
                À propos
              </Link>
              <Link color="gray.600" _hover={{ color: "green.600" }}>
                Contact
              </Link>
              <Button colorScheme="green" size="sm">
                Connexion
              </Button>
              <Button colorScheme="green" variant="outline" size="sm">
                Inscription
              </Button>
            </Flex>
          </Flex>
        </Box>
  
        <Flex mt="60px" width="100%" flex="1">
          {/* Sidebar */}
          <Box
            as="nav"
            width={isSidebarCollapsed ? "60px" : "250px"}
            height="100vh"
            bg="green.700"
            color="white"
            p={4}
            transition="width 0.3s ease"
            position="fixed"
            zIndex="100"
            boxShadow="lg"
          >
            <IconButton
              aria-label="Toggle Sidebar"
              icon={<FaBars />}
              color="white"
              bg="green.800"
              _hover={{ bg: "green.900" }}
              onClick={toggleSidebar}
              mb={4}
              display={isMobile ? "block" : "none"}
            />
            {!isSidebarCollapsed && (
              <Stack spacing={4}>
                <Link href="#" fontSize="lg" fontWeight="bold" _hover={{ color: "green.200" }}>
                  Tableau de bord
                </Link>
                <Link href="#" _hover={{ color: "green.200" }}>
                  Profil
                </Link>
                <Link href="#" _hover={{ color: "green.200" }}>
                  Messages
                </Link>
                <Link href="#" _hover={{ color: "green.200" }}>
                  Paramètres
                </Link>
              </Stack>
            )}
          </Box>
  
          {/* Main Content */}
          <Box
            width="100%"
            ml={isSidebarCollapsed ? "60px" : "250px"}
            p={{ base: 4, md: 8 }}
            transition="margin-left 0.3s ease"
          >
            <VStack align="start" spacing={3} mb={8}>
              <Heading size={{ base: "lg", md: "xl" }} color="gray.800">
                Bienvenue sur le Tableau de Bord
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                Gérez votre équipe et analysez les performances en temps réel.
              </Text>
            </VStack>
  
            {/* Football Pitch Section */}
            <Box
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
              p={{ base: 4, md: 6 }}
              mb={8}
            >
              <Heading size="md" mb={4} color="gray.800">
                Composition de l'équipe
              </Heading>
              <Box maxW="1000px" mx="auto">
                <FootballPitch />
              </Box>
            </Box>
  
            {/* Substitutes Section */}
            <Box
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
              p={{ base: 4, md: 6 }}
              mb={8}
            >
              <Heading size="md" mb={4} color="gray.800">
                Remplaçants
              </Heading>
              <Flex gap={4} wrap="wrap">
                {substitutes.map((sub, index) => (
                  <Box
                    key={index}
                    p={4}
                    bg="gray.50"
                    borderRadius="md"
                    boxShadow="md"
                    minW="200px"
                    textAlign="center"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    {/* Player Photo */}
                    <Image
                      src={sub.imageUrl}
                      alt={sub.name}
                      boxSize="80px"
                      objectFit="cover"
                      borderRadius="md"
                      mb={2}
                    />
                    <Text fontWeight="bold" color="gray.800">
                      {sub.name}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {sub.position}
                    </Text>
                    <Text fontWeight="bold" color="green.600">
                      #{sub.shirtNumber}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>
  
            {/* Cards Section */}
            <Flex gap={6} justify="space-between" wrap="wrap" mb={8}>
              {[
                {
                  title: "Performance de l'équipe",
                  desc: "Analysez les statistiques des joueurs sur le terrain.",
                  btn: "Voir les détails",
                },
                {
                  title: "Graphiques de statistiques",
                  desc: "Visualisez les performances globales de l'équipe.",
                  btn: "Voir les graphiques",
                },
                {
                  title: "Classements",
                  desc: "Consultez le classement actuel des joueurs.",
                  btn: "Voir le tableau",
                },
              ].map((card, index) => (
                <Box
                  key={index}
                  flex="1"
                  minW={{ base: "100%", md: "300px" }}
                  borderRadius="xl"
                  p={6}
                  bg="white"
                  boxShadow="md"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "xl",
                    bg: "gray.50",
                  }}
                >
                  <Heading size="sm" color="gray.800" mb={2}>
                    {card.title}
                  </Heading>
                  <Text color="gray.600" mb={4}>
                    {card.desc}
                  </Text>
                  <Button
                    colorScheme="green"
                    size="sm"
                    variant="outline"
                    _hover={{ bg: "green.50" }}
                  >
                    {card.btn}
                  </Button>
                </Box>
              ))}
            </Flex>
  
            {/* Chart Section */}
            <Box bg="white" p={6} borderRadius="xl" boxShadow="lg">
              <Heading size="md" mb={4} color="gray.800">
                Statistiques mensuelles
              </Heading>
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  };
  
  export default LandingPage;```javascript
// Substitutes data
const substitutes = useMemo(() => [
  { name: "Raya", position: "Goalkeeper", shirtNumber: 1, x: "41%", y: "80%", imageUrl: basePath + "raya.jpeg" },
  { name: "Cucurella", position: "Left Back", shirtNumber: 3, x: "2%", y: "35%", imageUrl: basePath + "cucurella.png" },
  { name: "Aina", position: "Center Back", shirtNumber: 4, x: "28%", y: "60%", imageUrl: basePath + "aina.jpeg" },
  { name: "Gvardiol", position: "Center Back", shirtNumber: 5, x: "54%", y: "60%", imageUrl: basePath + "gvardiol.jpeg" },
  { name: "Walker", position: "Right Back", shirtNumber: 2, x: "73%", y: "55%", imageUrl: basePath + "walker.png" },
  { name: "Sarr", position: "Left Midfield", shirtNumber: 6, x: "12%", y: "35%", imageUrl: basePath + "sarr.jpeg" },
  { name: "Bowen", position: "Central Midfield", shirtNumber: 8, x: "41%", y: "42%", imageUrl: basePath + "bowen.jpeg" },
  { name: "Palmer", position: "Right Midfield", shirtNumber: 7, x: "70%", y: "35%", imageUrl: basePath + "palmer.jpeg" },
  { name: "Marmoush", position: "Left Wing", shirtNumber: 10, x: "17%", y: "17%", imageUrl: basePath + "marmoush.jpeg" },
  { name: "Watkins", position: "Striker", shirtNumber: 9, x: "41%", y: "10%", imageUrl: basePath + "watkins.jpeg" },
  { name: "Kai Havertz", position: "Right Wing", shirtNumber: 29, x: "65%", y: "17%", imageUrl: basePath + "Havertz.png" },
], [basePath]);

// ...

// Substitutes Section
<Box
  bg="white"
  borderRadius="xl"
  overflow="hidden"
  boxShadow="lg"
  p={{ base: 4, md: 6 }}
  mb={8}
>
  <Heading size="md" mb={4} color="gray.800">
    Remplaçants
  </Heading>
  <Flex gap={4} wrap="wrap">
    {substitutes.map((sub, index) => (
      <Box
        key={index}
        p={4}
        bg="gray.50"
        borderRadius="md"
        boxShadow="md"
        minW="200px"
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* Player Photo */}
        <Image
          src={sub.imageUrl}
          alt={sub.name}
          boxSize="80px"
          objectFit="cover"
          borderRadius="md"
          mb={2}
          onError={(e) => {
            e.target.src = basePath + "default-player-image.png";
          }}
        />
        <Text fontWeight="bold" color="gray.800">
          {sub.name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {sub.position}
        </Text>
        <Text fontWeight="bold" color="green.600">
          #{sub.shirtNumber}
        </Text>
      </Box>
    ))}
  </Flex>
</Box>
```