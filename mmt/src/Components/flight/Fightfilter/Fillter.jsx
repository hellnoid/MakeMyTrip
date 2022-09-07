
import { Checkbox,
  CheckboxGroup,
  Text,Stack,Box
 } from '@chakra-ui/react'
 import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import { FaFighterJet } from "react-icons/fa";
import { WiHorizon,WiDaySunny,WiSunset,WiNightAltCloudy } from "react-icons/wi";





export  const Flightfilter = () =>{

    return(
<Box width="20%" border="2px solid black" padding="10px">
               <Box display="flex"  flexDirection="column" alignItems="flex-start">
                <Text fontSize='lg' color="black" 	fontWeight="600" mb="10px"> Popular Filters</Text>
                <CheckboxGroup>
                <Stack spacing={[2,2]}>
                <Checkbox>Refundable Fares(65)</Checkbox>
                <Checkbox>Non stop(5)</Checkbox>
                <Checkbox>IndiGo(8)</Checkbox>
                <Checkbox>Morning Departure(5)</Checkbox>
                <Checkbox>Late Departure(4)</Checkbox>
                <Checkbox>Go First(5)</Checkbox>
                <Checkbox>Vistara(6)</Checkbox>
                <Checkbox>Air India(8)</Checkbox>
                <Checkbox>AirAsia(3)</Checkbox>
                <Checkbox>SpiceJet(2)</Checkbox>
                </Stack>
                </CheckboxGroup>
                </Box>
               


                <Box display="flex"  flexDirection="column" alignItems="flex-start" mt="30px">
                <Text fontSize='lg' color="black" 	fontWeight="600" mb="10px">One Way Price</Text>
                <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 30]}>
                <RangeSliderTrack>
                 <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={1} >
                <Box color='blue' as={FaFighterJet} boxSize={5} />
                </RangeSliderThumb>
               </RangeSlider>
               <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" mt="8px">
                <Text>₹8,683</Text>
                <Text>₹26,600</Text>
               </Box>
                </Box>
               

                <Box display="flex"  flexDirection="column" alignItems="flex-start" mt="30px">
                <Text fontSize='lg' color="black" 	fontWeight="600" mb="10px">Stops From New Delhi</Text>
                <CheckboxGroup>
                <Stack spacing={[2,2]}>
                <Checkbox>Non Stop(5)</Checkbox>
                <Checkbox>1 Stop(2)</Checkbox>
                </Stack>
                </CheckboxGroup>
                </Box>

                <Box display="flex"  flexDirection="column" alignItems="flex-start" mt="30px">
                <Text fontSize='lg' color="black" 	fontWeight="600" mb="10px">Departure From New Delhi</Text>
                <Box display="flex" flexDirection="row"   alignItems='center' width='100%' justifyContent='space-between'>
                  <Box display="flex" flexDirection="column"  justifyContent='center' alignItems='center' fontWeight='600' border='1px solid gray' borderRadius='5px' width='23%'height='70px'>
                  <WiHorizon size={25}/>
                    <Text fontSize='8px'>Before 6 AM</Text>
                    <Text fontSize='12px'>₹9,483</Text>
                  </Box>

                  <Box display="flex" flexDirection="column"  justifyContent='center' alignItems='center' fontWeight='600'  border='1px solid gray' borderRadius='5px' width='23%'height='70px'>
                  <WiDaySunny size={25}/>
                    <Text fontSize='8px'>6 AM - 12 PM</Text>
                    <Text fontSize='12px'>₹9,673</Text>
                  </Box>

                  <Box display="flex" flexDirection="column"  justifyContent='center' alignItems='center'fontWeight='600'  border='1px solid gray' borderRadius='5px' width='23%'height='70px'>
                  <WiSunset size={25}/>
                    <Text fontSize='8px'>12 PM - 6 PM</Text>
                    <Text fontSize='12px'>₹9,892</Text>
                  </Box>

                  <Box display="flex" flexDirection="column"  justifyContent='center' alignItems='center' fontWeight='600' border='1px solid gray' borderRadius='5px' width='23%'height='70px'>
                  <WiNightAltCloudy size={25}/>
                    <Text fontSize='8px'>After 6 PM</Text>
                    <Text fontSize='12px'>₹9,483</Text>
                  </Box>

                </Box>
                </Box> 

                 

                <Box display="flex"  flexDirection="column" alignItems="flex-start" mt="30px">
                <Text fontSize='lg' color="black" 	fontWeight="600" mb="10px">Arrival at Bengaluru</Text>
                <Box display="flex" flexDirection="row"   alignItems='center' width='100%' justifyContent='space-between'>
                  <Box display="flex" flexDirection="column"  justifyContent='center' alignItems='center' fontWeight='600' border='1px solid gray' borderRadius='5px' width='23%' height='70px'>
                  <WiHorizon size={25}/>
                    <Text fontSize='8px'>Before 6 AM</Text>
                    <Text fontSize='12px'>₹9,483</Text>
                  </Box>

                  <Box display="flex" flexDirection="column"  justifyContent='center' alignItems='center' fontWeight='600'  border='1px solid gray' borderRadius='5px' width='23%' height='70px'>
                  <WiDaySunny size={25}/>
                    <Text fontSize='8px'>6 AM - 12 PM</Text>
                    <Text fontSize='12px'>₹9,673</Text>
                  </Box>

                  <Box display="flex" flexDirection="column"  justifyContent='center' alignItems='center'fontWeight='600'  border='1px solid gray' borderRadius='5px' width='23%'height='70px'>
                  <WiSunset size={25}/>
                    <Text fontSize='8px'>12 PM - 6 PM</Text>
                    <Text fontSize='12px'>₹9,892</Text>
                  </Box>

                  <Box display="flex" flexDirection="column"  justifyContent='center' alignItems='center' fontWeight='600' border='1px solid gray' borderRadius='5px' width='23%'height='70px'>
                  <WiNightAltCloudy size={25}/>
                    <Text fontSize='8px'>After 6 PM</Text>
                    <Text fontSize='12px'>₹9,483</Text>
                  </Box>

                </Box>
                </Box> 
                <Box display="flex"  flexDirection="column" alignItems="flex-start" mt="30px">
                <Text fontSize='lg' color="black" 	fontWeight="600" mb="10px">Airlines</Text>
                <CheckboxGroup>
                <Stack spacing={[2,2]}>
                <Checkbox>Air India (8)</Checkbox>
                <Checkbox>Indigo (8)</Checkbox>
                <Checkbox>Vistara (6)</Checkbox>
                <Checkbox> Go First (5)</Checkbox>
                <Checkbox> SpiceJet (3)</Checkbox>
                <Checkbox>Go First(5)</Checkbox>
                <Checkbox>Vistara(6)</Checkbox>
                </Stack>
                </CheckboxGroup>
                </Box>
        
            </Box>
    )
}