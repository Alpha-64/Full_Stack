import { Grid } from '@mui/material'
import React from 'react'
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { useState, useEffect} from 'react'

const BookNowHome = () => {
    
  const [departing, setDeparting] = useState(null);
  const [returning, setReturning] = useState(null);
  const [showCounter, SetShowCounter] = useState(false);
  const [adults, setAdults] = useState(0);
  const [childs, setChilds] = useState(0);
  const [infant, setInfant] = useState(0);
  const [tripType, setTripType] = useState('round-trip');
  

  const increase = (setter, value, e) => {
    e.preventDefault();
    if(value < 8)setter(value + 1)
  }
  const decrease = (setter, value, e) => {
    e.preventDefault();
    if(value > 0){setter(value - 1)}
  }
  const passengerCounter = () => {
    SetShowCounter(!showCounter)
  }
  const tripChange = (e) => {
    setTripType(e.target.value)
  }
  useEffect(() => {
    const ClickOutside = (event) => {
      if (!event.target.closest(".passengers")) {
        SetShowCounter(false);
      }
    };
  
    document.addEventListener("click", ClickOutside);
    return () => document.removeEventListener("click", ClickOutside);
  }, []);
  return (
    <>
            <Box style={{ position: "relative" }} id="bookNow">
        <Box className="BookWrapper">
          <Container>
            <Grid container spacing={3}>
              <Grid item lg={12}>
              <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }} 
                    whileInView={{ scale: 1, opacity: 1 }} 
                    transition={{ duration: 0.9, ease: "easeInOut"  }} 
                    viewport={{ once: false }} 
                  >
                <Box  component="form" className="bookFrom">
                  <Typography variant="subtitle1" className="D-font">shankh air</Typography>
                  <Typography variant="h2" className="D-font">Book your Flight</Typography>
                  <Grid className="mb-3 pt-3">
                  <Grid lg='12' className='mb-4'>
                      <FormControl>
                          <RadioGroup
                              row
                              value={tripType}
                              onChange={tripChange}
                              name="trip-type"
                            >
                              <FormControlLabel value="oneway" control={<Radio />} label="Oneway" />
                              <FormControlLabel
                                  value="round-trip"
                                  control={<Radio Gridor="success" />}
                                  label="Round Trip"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid lg={2} md={6} sm={12} className="mb-3">
                      <TextField id="outlined-basic" fullWidth  className="bookTextfield"  label="Fly From " variant="outlined" />
                    </Grid><Grid lg={2} md={6} sm={12} className="mb-3">
                      <TextField id="outlined-basic" fullWidth  label="Fly To" className="bookTextfield"  variant="outlined" />
                    </Grid>
                    <Grid lg={2} md={6} sm={12} className="mb-3 dateWidth">
                      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Departing"
                            value={departing}
                            className="bookTextfield" 
                            onChange={(newValue) => setDeparting(newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                      </LocalizationProvider> */}
                    </Grid>
                    <Grid lg={2} md={6} sm={12} className="mb-3 dateWidth">
                      {/* <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                          <DatePicker
                            label="Returning"
                            disabled={tripType === 'oneway'}
                            value={returning}
                            className="bookTextfield" 
                            onChange={(newValue) => setReturning(newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                      </LocalizationProvider> */}
                    </Grid>
                    <Grid lg={2} className="passengers mb-3">
                      <Box className="counts" onClick={passengerCounter}>
                        <Box>
                          <span>{adults} Adults</span> 
                          <span>{childs} Childs </span>
                          <span>{infant} Infants </span>
                        </Box>
                      </Box>
                      <Box className={`selector ${showCounter ? 'show' : ''}`}>
                        <Box className="counterBtn">
                          <span>Adults <small>(Aged 12+ yrs)</small></span>
                          <button onClick={ (e)=> increase(setAdults, adults, e)} disabled={adults >= 8} className=" increment adult+"></button>
                          <span class="fw-500">{adults}</span>
                          <button onClick={(e)=> decrease(setAdults, adults, e)} disabled={adults <= 0} className="decrement adult-"></button>
                        </Box>
                        <Box className="counterBtn">
                          <span>Childrens <small>(2 - 12 yrs)</small></span>
                          <button onClick={ (e)=> increase(setChilds, childs, e)} disabled={childs >= 8} className=" increment child+"></button>
                          <span class="fw-500">{childs}</span>
                          <button onClick={(e)=> decrease(setChilds, childs, e)} disabled={childs <= 0} className="decrement child-"></button>
                        </Box>
                        <Box className="counterBtn">
                          <span>Infants <small>(Below 2 yrs)</small></span>
                          <button onClick={ (e)=> increase(setInfant, infant, e)} disabled={infant >= 8} className=" increment infant+"></button>
                          <span class="fw-500">{infant}</span>
                          <button onClick={(e)=> decrease(setInfant, infant, e)} disabled={infant <= 0} className="decrement infant+"></button>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid lg={2}>
                      <Box className='btnWrapper text-end'>
                        <Button variant="link" className="coverBtn bg-orange btnIcon"><span>Book Now </span></Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default BookNowHome
