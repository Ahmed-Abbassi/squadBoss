
import FootballPitch from "../../components/footballPitch/FootballPitch.tsx";
import {Box, Text, Flex, IconButton, Link, Stack, useBreakpointValue} from "@chakra-ui/react";
import Header from "../../components/header/Header.tsx";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {useState} from "react";

const LandingPage = () => {


    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: false });

    // Function to toggle the collapse/expand state of the sidebar
    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    //mock data for test
    const options: Highcharts.Options | any = {
        chart: {
            type: 'line', // You can change this to other types like 'bar', 'pie', etc.
        },
        title: {
            text: 'Sample Highcharts Line Chart',
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        yAxis: {
            title: {
                text: 'Values',
            },
        },
        series: [
            {
                name: 'Sales',
                data: [10, 20, 30, 40, 50, 60],
            },
        ],
    };

    return (
        <Box  display={"flex"}>
                <Header/>
                <Box mt={"100px"} width={"100%"} display={"flex"} justifyContent={"space-between"}>
                    <Box width={"20%"} >
                        <Flex>
                            {/* Sidebar */}
                            <Box
                                width={isSidebarCollapsed ? '60px' : '250px'}
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
                                    display={isMobile ? 'block' : 'none'}
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

                            {/* Main Content */}

                        </Flex>
                    </Box>
                    <Box width={"75%"} margin={"auto"} >
                        <Box>
                            <Text fontSize="2xl">Welcome to the Dashboard</Text>
                            <Text>This is a sidebar example using Chakra UI and React with TypeScript.</Text>
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Box >
                                <FootballPitch/>
                            </Box>
                            {<Box>
                                <HighchartsReact highcharts={Highcharts} options={options} />
                            </Box>}
                        </Box>
                    </Box>
                </Box>

        </Box>
    );
};

export default LandingPage;
