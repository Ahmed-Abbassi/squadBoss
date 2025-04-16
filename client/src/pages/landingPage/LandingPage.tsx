import React, { useState } from "react";
import { Box, Text, Flex, IconButton, Link, Stack, useBreakpointValue } from "@chakra-ui/react";
import Header from "../../components/header/Header";
import FootballPitch from "../../components/footballPitch/FootballPitch";

const LandingPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
    const Nationality = "France"

  return (
    <Box display={"flex"}>
      <Header />
      <Box mt={"100px"} width={"100%"} display={"flex"} justifyContent={"space-between"}>
        <Box w={"10%"}>
          <Flex>
            <Box
              w={"20%"}
              height="100vh"
              bg="green.600"
              color="white"
              p={4}
              transition="width 0.3s"
              position="fixed"
            >
              <IconButton
                aria-label="Toggle Sidebar"
                color="white"
                onClick={toggleSidebar}
                display={isMobile ? "block" : "none"}
                mb={4}
              />
              {!isSidebarCollapsed && (
                <Stack>
                  <Link href="#">Dashboard</Link>
                  <Link href="#">Profile</Link>
                  <Link href="#">Messages</Link>
                  <Link href="#">Settings</Link>
                </Stack>
              )}
            </Box>
          </Flex>
        </Box>

        <Box display={"flex"} flexDir={"column"} w={"80%"} ml={"20%"}>
          <Box display={"flex"} alignItems={"center"} flexDir={"column"}>
            <Text fontSize="2xl">Welcome to the Dashboard</Text>
            <Text>This is a the football team of {Nationality}</Text>
          </Box>

          <FootballPitch Nationality={Nationality} />

          <Box mt={10} px={5}>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
