import React from "react";
import {Container, Stack, Box, Text, Image, Input, Icon, StackDivider, Button, useColorMode,
  useColorModeValue, LightMode, DarkMode, IconButton} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {FiPrinter} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BsToggles} from "react-icons/bs"
import Routes from "./routes";
import logo from "../assets/logo.png"


const App: React.FC = () => {

  
  
  
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={4} >
        <Container maxWidth="container.xl" paddingX={0}>
       <Stack spacing={2}>
        <Stack direction={{base: "column", md: "row"}} justifyContent="space-between">
          <Stack direction="row" spacing={12} flex={1}>
          
            <Image src={logo} objectFit="contain"  />
            
            
            
          
          
          

             <Stack
              alignItems="center"
              backgroundColor="white"
              borderRadius="sm"
              boxShadow="sm"
              direction="row"
              divider={<StackDivider />}
              maxWidth={600}
              padding={2}
              width="100%"
             >
              <Input paddingX={2} variant="unstyled" />
              <Icon as={AiOutlineSearch} color="gray.400" height={5} width={5} />

             </Stack>
            </Stack> 
             <Stack direction="row" alignItems="center" color="blackAlpha.700" spacing={3}>
               <Icon as={FiPrinter} height={6} width={6} />
               <Text fontSize="lg" fontWeight="500"
               >Comprá tu Point y QR a $189</Text>
             </Stack>
            
          </Stack>
          
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" >
          <Stack direction="row" spacing={12} alignItems="baseline" >
            <Stack alignItems="center" direction="row" spacing={1}>
              <Icon as={GoLocation} width={5} height={5} />
              <Stack spacing={0} >
                <Text color="blackAlpha.700" fontSize="xs" lineHeight="normal"
                >Enviar a </Text>
                <Text fontSize="sm" lineHeight="normal"
                >Buenos Aires</Text>
              </Stack>
            </Stack>
          <Stack direction="row" fontSize="sm" color="blackAlpha.600" spacing={5} >
            <Text>Categorías</Text>
            <Text>Ofertas</Text>
            <Text>Historial</Text>
            <Text>Supermercado</Text>
            <Text>Moda</Text>
            <Text>Vender</Text>
            <Text>Ayuda</Text>
          </Stack>
          </Stack>
          <Stack direction="row" spacing={5} fontSize={14}>
            <Text>Creá tu cuenta</Text>
            <Text>Ingresá</Text>
            <Text>Mis compras</Text>
            <Icon as={AiOutlineShoppingCart} height={5} width={5} />
          </Stack>
          </Stack>
        </Stack>
       
        </Container>
      </Box>
        <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
          <Routes />
        </Container>
     
    </Stack>
    
  );
}

export default App;
