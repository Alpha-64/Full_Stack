import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import airportBlu from "../../assets/Images/airport-blu.png";
import hoursBlu from "../../assets/Images/24-hours-support-blu.png";
import flyBlu from "../../assets/Images/direct-flight-blu.png";
import certifiedBlu from "../../assets/Images/certified-blu.png";

const FeaturedBoxes = () => {
  return (
    <>
      <Box>
        <Container className="quickHighlights">
          <Grid container spacing={3}>
            <Grid item lg={3} md={6} sm={12} className="my-5">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: false }}
              >
                <Box className="highLight shine-hover">
                  <Box className="ribbon">New</Box>
                  <Box component="img" className="img-fluid" src={airportBlu} />
                  <Typography variant="body1" component="p">
                    Partnered with major airports
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item lg={3} md={6} sm={12} className="my-5">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: false }}
              >
                <Box className="highLight shine-hover">
                  <Box className="ribbon">24x7</Box>
                  <Box component="img" className="img-fluid" src={hoursBlu} />
                  <Typography variant="body1" component="p">
                    24/7 Customer Support
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item lg={3} md={6} sm={12} className="my-5">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: false }}
              >
                <Box className="highLight shine-hover">
                  <Box className="ribbon">Featured</Box>
                  <Box component="img" className="img-fluid" src={flyBlu} />
                  <Typography variant="body1" component="p">
                    Fly Across All India
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item lg={3} md={6} sm={12} className="my-5">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: false }}
              >
                <Box className="highLight shine-hover">
                  <Box className="ribbon">Exclusive</Box>
                  <Box
                    component="img"
                    className="img-fluid"
                    src={certifiedBlu}
                  />
                  <Typography variant="body1" component="p">
                    Certified by DGCA & ISO
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FeaturedBoxes;
