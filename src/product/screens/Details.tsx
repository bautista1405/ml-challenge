import React, { useState }  from "react";


import {Product} from "../types";
import mock from "../mock";
import {Container, Stack, Box, Text, Image, Input, Icon, Button, Divider, Spacer, Flex, Grid, FormControl,
  FormLabel,
  FormHelperText, useColorModeValue, HStack} from "@chakra-ui/react";

import {BsHeart} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"
import {HiOutlineTruck} from "react-icons/hi"
import {MdSubdirectoryArrowLeft} from "react-icons/md"
import {TiTickOutline} from "react-icons/ti"
import {GiTrophyCup} from "react-icons/gi"
import { Table, Thead, Tbody, Tr, Td} from "@chakra-ui/react"
import {BsArrowReturnRight} from "react-icons/bs"







interface Props {
  product: Product;
}



const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
   <Box >
     
   

     <Stack fontWeight="400" fontSize={14}>
       <Text>
        <strong>También puede interesarte:</strong> juguetes ninos varones - cocina de juguete - burako - valija juliana doctora grande - pistola lanza dardos
       </Text>
     </Stack>
     
     <Stack direction="row" lineHeight={10} >
       
       <Stack direction="row" flex={1} >
       <Text fontSize={14}>Volver al listado | </Text>
       <Text>
       <Button colorScheme="blue" variant="link" fontSize={14} fontWeight="400">Juegos y Juguetes</Button> {">"} 
       <Button colorScheme="blue" variant="link" fontSize={14} fontWeight="400" marginLeft={1}> Peluches</Button> {">"} 
       <Button colorScheme="blue" variant="link" fontSize={14} fontWeight="400"> Stitch</Button>
       </Text>
       </Stack>
       
       <Stack direction="row" >
       <Text color="blackAlpha.600">
       <Button colorScheme="blue" variant="link" fontWeight="400" fontSize={14}>Compartir</Button> |
       <Button colorScheme="blue" variant="link" fontWeight="400" fontSize={14} marginLeft={1}> Vender uno igual</Button>
       </Text>
       </Stack>
     
     </Stack>

    <Container maxW="container.xl" bg="white" flex={1} maxH="container.xl"  >
      <Stack color="white" direction="row" spacing={28} >
       
        <Stack w="40px" spacing={2} marginTop={4}>
        
       

         <Image src={"http://http2.mlstatic.com/D_978173-MLA32582347639_102019-O.jpg"} shadow="dark-lg"
         borderWidth="1px" borderRadius="md"  />
             
        
         <Image src={"http://http2.mlstatic.com/D_754004-MLA32299823528_092019-O.jpg"} h="40px" shadow="dark-lg"
         borderWidth="1px" borderRadius="md" />
       
        
         <Image src={"http://http2.mlstatic.com/D_616691-MLA27900381255_082018-O.jpg"} shadow="dark-lg"
         borderWidth="1px" borderRadius="md" />
        
         <Image src={"http://http2.mlstatic.com/D_918230-MLA31424182281_072019-O.jpg"} h="40px" shadow="dark-lg"
         borderWidth="1px" borderRadius="md" />

    
        </Stack>
      
       <Box flex="1" >
       <Image src={"http://http2.mlstatic.com/D_978173-MLA32582347639_102019-O.jpg"} />
       </Box>
      
       
      <Grid p={5}
       shadow="xl"
       borderWidth="1px"
       
       borderRadius="xl"
       maxWidth={350}
       padding={1.5}
       width="xl"
       height="710px"
       
       
      
      >
       
       <Stack  color="blackAlpha.800" marginTop={4} boxSize={60}  marginLeft={2} >
        
        <Text alignItems="center" fontSize="14" color="blackAlpha.600" >Nuevo  |  96 vendidos</Text>
        
        <Flex direction="row" >
        
        <Box>
        <Text fontSize="22" fontWeight="600" >Peluche Stitch Angel Lilo 1 Metro 100cm Reales Gigante</Text>
        
        <Stack direction="row" marginTop={2}>
         <Icon as={AiFillStar} />
         <Icon as={AiFillStar} />
         <Icon as={AiFillStar} />
         <Icon as={AiFillStar} />
         <Icon as={AiFillStar} />
         <Text color="blackAlpha.500" fontSize={14}>8 opiniones</Text>
        </Stack>

        <Stack>
          <Text fontSize={36} fontWeight={1}>$ 13.999</Text>
          <Text fontSize={18} lineHeight={3}>en 12x $ 1.985</Text>
          <Button colorScheme="blue" variant="link" fontWeight="400" fontSize={14} alignSelf="flex-start"
          
          >Ver los medios de pago</Button>

        </Stack>

        <Stack marginTop={4} direction="row">
         <Icon as={HiOutlineTruck} w={6} h={6}  />
         <Text color="#00a650" fontWeight="400">Llega gratis mañana</Text>
        </Stack>
        
        <Stack alignItems="center" >
          <Text fontSize={13.5} fontWeight="400" color="blackAlpha.500" pr="90px">Beneficio Mercado Puntos</Text>
          <Button colorScheme="blue" variant="link" fontSize={13.5} fontWeight="400" pr="85px">Ver más formas de entrega</Button>
        </Stack>

        <Stack marginTop={4} direction="row">
          <Icon as={MdSubdirectoryArrowLeft} w={6} h={6} />
          <Text color="#00a650" fontWeight="400">Devolución gratis</Text>
        </Stack>

        <Stack  alignItems="flex-end">
          <Text fontSize={13.5} fontWeight="400" color="blackAlpha.500" pr="70px">Tenés 30 días desde que lo recibís.</Text>
        </Stack>

        <Stack >
         <Button colorScheme="blue" variant="link" fontSize={13.5} fontWeight="400"  pr="165px">Conocer más</Button>
        </Stack>

        <Stack marginTop={6}>
          <Text> <strong> Stock disponible </strong></Text>
        </Stack>

        <Stack direction="row" marginTop={2}>
         <Text>Cantidad: <strong> 1 unidad </strong></Text>
         <Text color="blackAlpha.500" fontSize={14}>(1 disponible)</Text>
        </Stack>

        <Stack marginTop={5} alignItems="center">
          <Button w={310} colorScheme="blue" variant="solid">Comprar ahora</Button>
          <Button w={310} colorScheme="twitter" variant="outline">Agregar al carrito</Button>
        </Stack>

        <Stack marginTop={7} direction="row" fontSize={12}> 
          <Icon as={TiTickOutline} w={5} h={5} shadow="dark-lg"/>
          <Text> <Button colorScheme="blue" variant="link" fontWeight="800" fontSize={13.5} pr="165px">Compra Protegida</Button>
          </Text>
        </Stack>

        <Stack marginTop={5} direction="row">
          <Icon as={GiTrophyCup} w={5} h={5} shadow="dark-lg" />
          <Text><Button colorScheme="blue" variant="link" fontWeight="800" fontSize={13.5} pr="165px">Mercado Puntos</Button>
          </Text>
        </Stack>
        
        </Box>
        
        <Box>
        
        <Icon as={BsHeart}  />
        
        </Box>
        
        </Flex>
        
      
        
       </Stack>
       
       </Grid> 
        
       
     
      </Stack> 

      <Divider orientation="horizontal" width="65%"  />
 
    </Container>

    

    <Container maxW="container.xl"  bg="white" flex={1} maxH="container.xl" height="2000px">
     <Stack marginLeft={8}>
     <Text fontSize={24} lineHeight="110px" >Publicaciones del vendedor</Text>

     
     <Stack direction="row">
     
     <Stack> 
     <Box w="240px" borderRadius="base" overflow="hidden" shadow="xl" borderWidth="1px" height="400px" >
        <Image src={"https://http2.mlstatic.com/D_NQ_NP_844410-MLA27947026686_082018-O.webp"} alt="Card Image" boxSize="250px" width="350px" height="250px" />
        
        <Box p={5}>
          <Stack >
           <Text fontSize={20} fontWeight="500">$5.999</Text>
          </Stack>
          <Stack align="center">
            <Text color="#00a650" fontWeight="400" alignSelf="flex-start" >
              Envío gratis
            </Text>
            <Text fontWeight="light">
            Peluche Stitch Y Angel 60 Cm Calidad Unica
            </Text>
          </Stack>
          
        </Box>
      </Box>
      </Stack> 

      <Stack> 
     <Box w="240px" borderRadius="base" overflow="hidden" shadow="xl" borderWidth="1px" height="400px" >
        <Image src={"https://http2.mlstatic.com/D_NQ_NP_607175-MLA29442618855_022019-O.webp"} alt="Card Image" boxSize="250px" width="350px" height="250px" />
        
        <Box p={5}>
          <Stack >
           <Text fontSize={20} fontWeight="500">$3.299</Text>
          </Stack>
          <Stack align="center">
            <Text color="#00a650" fontWeight="400" alignSelf="flex-start" >
              Envío gratis
            </Text>
            <Text fontWeight="light">
              Osos Escandolosos 50 Cm Echados Acostados
            </Text>
          </Stack>
          
        </Box>
      </Box>
      </Stack> 

      <Stack> 
     <Box w="240px" borderRadius="base" overflow="hidden" shadow="xl" borderWidth="1px" height="400px" >
        <Image src={"https://http2.mlstatic.com/D_NQ_NP_950029-MLA31041818816_062019-O.webp"} alt="Card Image" boxSize="250px" width="350px" height="250px" />
        <Divider orientation="horizontal"  />
        <Box p={5}>
          <Stack >
           <Text fontSize={20} fontWeight="500">$1.650</Text>
          </Stack>
          <Stack align="center">
            <Text color="#00a650" fontWeight="400" alignSelf="flex-start" >
              Envío gratis
            </Text>
            <Text fontWeight="light">
               Peluche Stitch 25 Cm Muy Suave Lilo Y Stitch 
            </Text>
          </Stack>
          
        </Box>
      </Box>
      </Stack> 
      </Stack>
       
      <Stack marginTop={7}>
      <Button colorScheme="blue" variant="link" fontSize={13.5} fontWeight="400" alignSelf="flex-start" >Ver más publicaciones del vendedor</Button>
      </Stack>
       
      <Divider orientation="horizontal" width="65%" marginTop={12} /> 

      <Text fontSize={24} lineHeight="110px" >Características principales</Text>

      <Table variant="striped" colorScheme="gray" width="65%">
  
  <Thead>
    
  </Thead>
  <Tbody>
    <Tr>
      <Td>Marca</Td>
      <Td>Disney</Td>
      
    </Tr>
    <Tr>
      <Td>Modelo</Td>
      <Td>Stitch</Td>
      
    </Tr>
    <Tr>
      <Td>Franquicia</Td>
      <Td>Stitch</Td>
     
    </Tr>
    <Tr>
      <Td>Animal</Td>
      <Td>Stitch</Td>
    </Tr>
    <Tr>
      <Td>Personaje</Td>
      <Td>Stitch</Td>
    </Tr>
  </Tbody>
  
</Table>

<Text fontSize={20} lineHeight="110px" >Otras características</Text>

<Stack direction="row" fontSize={14}>
  <Text pl="20px"> <strong> Material</strong>: Plush</Text>
  <Spacer/>
  <Text pr="600px"> <strong>Altura x Ancho</strong>: 100 cm x 50 cm</Text>
</Stack>

<Stack direction="row" fontSize={14}>
  <Text pl="20px"> <strong> Es material hipoalergénico</strong>: Sí</Text>
  <Spacer/>
  <Text pr="600px" marginTop={6}> <strong>Edad mínima recomendada</strong>: 0 años </Text>
</Stack>

<Divider orientation="horizontal" width="65%" marginTop={12}  />
  
      
    </Stack>
    </Container>

    <Container maxW="container.xl"  bg="white" flex={1} maxH="container.xl" height="2000px" >
     <Stack marginLeft={8}>
     <Text fontSize={24} lineHeight="110px" >Descripción</Text>

     <Stack width="65%">
     <Text color="blackAlpha.700" fontSize={20}>
     PELUCHE STITCH 1 METRO - 100 CM + ENVIO GRATIS POR CORREO ARGENTINO!!!
     <br></br>
MATERIAL: PLUSH MUY SUAVE RELLENO DE VELLON SILICONADO
<br></br>
SE PUEDE RETIRAR POR:
AV. CORRIENTES Y URUGUAY (zona tribunales - Subte B )
AV. CORRIENTES Y CARLOS PELLEGRINI (Subte B)
AV. CORRIENTES Y ALEM (Subte B)
VILLA PUEYRREDON
VILLA BALLESTER
<br></br>
REALIZAMOS ENVÍOS A TODO EL PAÍS Y HACEMOS ENVÍOS A DOMICILIO POR MOTOMENSAJERÍA.
<br></br>
*****NO SE OLVIDE DE VISITAR TODOS NUESTROS PRODUCTOS*****
     </Text>
     </Stack>

     <Text fontSize={24} lineHeight="110px" marginTop={10}>Preguntas y respuestas</Text>

     <Text fontSize={18} lineHeight="50px" > <strong>¿Qué querés saber? </strong></Text>

     <Stack direction="row" spacing={4} align="center" >
  <Button colorScheme="linkedin" variant="ghost" blockSize="30px" fontSize={14}>
    Costo de tiempo y envío
  </Button>
  <Button colorScheme="linkedin" variant="ghost" blockSize="30px" fontSize={14}>
    Devoluciones gratis
  </Button>
  <Button colorScheme="linkedin" variant="ghost" blockSize="30px" fontSize={14}>
    Medios de pago y promociones
  </Button>
  <Button colorScheme="linkedin" variant="ghost" blockSize="30px" fontSize={14}> 
   Garantía
  </Button>
</Stack>

<Stack direction="row" marginTop={8}>

<Stack width="60%">
<FormControl marginTop={3} >
  <FormLabel>Preguntale al vendedor</FormLabel>
  <Input  />
  <FormHelperText color="blackAlpha.500" fontSize={13}>Tiempo aproximado de respuesta: 13 minutos</FormHelperText>
</FormControl>
</Stack>

<Stack pt="43px">
<Button colorScheme="blue">Preguntar</Button>
</Stack>

</Stack>

<Stack >
<Text fontSize={18} marginTop={8} fontWeight="600">Últimas realizadas</Text>
</Stack>

<Stack pl="20px" pt="15px">
  <Text>Hola solo esos no tenes conejas??</Text>
</Stack>
<Stack pl="35px" direction="row">
 <Icon as={BsArrowReturnRight} />
 <Text color="blackAlpha.500">Hola, si solo esos. 03/09/2021</Text>
</Stack>

<Stack pl="20px" pt="20px"> 
  <Text>Hola, tenes una página web? Así veo tu catálogo..</Text>
</Stack>
<Stack pl="35px" direction="row">
 <Icon as={BsArrowReturnRight} />
 <Text color="blackAlpha.500">Hola. No tenemos por el momento. 26/08/2021</Text>
</Stack>

<Stack pl="20px" pt="20px">
  <Text>Hola es original de disney?</Text>
</Stack>
<Stack pl="35px" direction="row">
 <Icon as={BsArrowReturnRight} />
 <Text color="blackAlpha.500">Hola, es importado de muy buena calidad. 08/08/2021</Text>
</Stack>

<Stack pl="20px" pt="20px">
  <Text>Dale. Buenísimo. En la semana realizó la compra. El embalaje tiene algún costo adicional?</Text>
</Stack>
<Stack pl="35px" direction="row">
 <Icon as={BsArrowReturnRight} />
 <Text color="blackAlpha.500">No ningún costo. 31/07/2021</Text>
</Stack>

    </Stack>
    </Container>

   </Box>  
  )
};

export default DetailsScreen;
