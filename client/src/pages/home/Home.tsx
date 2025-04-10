import { Box } from '@chakra-ui/react'
import Main from '../../components/main/Main'
import Header from '../../components/header/Header'


export default function Home() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
        
        <Header/>
        <Main/>
        
    </Box>
  )
}
