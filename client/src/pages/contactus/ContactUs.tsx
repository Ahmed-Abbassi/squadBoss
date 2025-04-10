import { Box, Button, Fieldset, Input,Text , InputProps, Stack, Textarea, TextareaProps } from '@chakra-ui/react'
import { Field } from "../../components/ui/field";
import Navbar from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function ContactUs() {
    const inputStyles: InputProps & TextareaProps = {
      width: "100%",
      borderColor: "gray.300",
      bgColor: "white"
    };
  return (
    <>
    <Box h={"1000px"}>
      <Box>
          <Navbar/>
          <Box width={"100%"} mt={"75px"} height={"150px"} bgColor={"green.600"} position={"relative"}>
            <Text pos={"absolute"} fontSize={"18px"} left={"15%"} top={"20%"} color={"white"}>We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us—we’re here to help!</Text>
          </Box>
      </Box>
      <Box>
      <Fieldset.Root
                    
                    size="lg"
                    w={"60%"}
                    backgroundColor={"gray.50"}
                    borderRadius={"30px"}
                    
                    p={"50px"}
                    height={"fit-content"}
                    m={"auto"}
                   position={"absolute"}
                   top={"100px"}
                   zIndex={"2"}
                   left={"20%"}
                  >
                    <Stack >
                      <Fieldset.Legend fontSize={"50px"} fontWeight={"bold"} textAlign={"center"} >
                       Get in touch
                      </Fieldset.Legend>
                      <Fieldset.HelperText textAlign={"center"} mt={"20px"}>
                        Please provide your informations below.
                      </Fieldset.HelperText>
                    </Stack>
        
                    <Fieldset.Content>


                    <Box display={"flex"} justifyContent={"space-between"}>
                    <Field label="Firstname" width={"48%"} color={"gray.500"}>
                        <Input {...inputStyles} placeholder='please enter Firstname' type="text" name="Firstname" />
                      </Field>
        
                      <Field label="Lastname" width={"48%"} color={"gray.500"}>
                        <Input {...inputStyles} placeholder='please enter Lastname' type="text" name="Lastname" />
                      </Field>
                    </Box>

                    <Box display={"flex"} justifyContent={"space-between"}>
                    <Field label="Email" width={"48%"} color={"gray.500"}>
                        <Input {...inputStyles} placeholder='please enter Email' type="email" name="email" />
                      </Field>
        
                      <Field label="Phone" width={"48%"} color={"gray.500"}>
                        <Input {...inputStyles}  placeholder='please enter Phone' type="text" name="Phone" />
                      </Field>
                    </Box>
        
                      <Field label="Message" color={"gray.500"}>
                        <Textarea {...inputStyles} height={"150px"}/>
                      </Field>
        
                    </Fieldset.Content>
        
                    <Button
                      backgroundColor={"gray.700"}
                      color={"white"}
                      w={"100%"}
                      type="submit"
                      alignSelf="flex-start"
                    >
                      Submit
                    </Button>
                  </Fieldset.Root>
      </Box>
      <Box position={"absolute"} bottom={"0"} w={"100%"}>
        <Box width={"100%"} bottom={"0"} mt={"75px"} height={"150px"} bgColor={"green.600"} zIndex={"1"}></Box>
        <Footer/>
      </Box>
      
    </Box>
    </>
  )
}

export default ContactUs