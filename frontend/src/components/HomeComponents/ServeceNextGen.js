import React from "react";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import bgDot from "../../assets/Images/bgDots.png";
import halfTransMark from "../../assets/Images/halfTransCity.png";

const ServeceNextGen = () => {
  return (
    <>
      <Box sx={{ backgroundImage: `url(${bgDot})`, backgroundSize: "20%" }}>
        <Container style={{ padding: "100px 0px 100px" }}>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <motion.div
                initial={{ opacity: 0.5, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <Box className="serviceImgWrap relative">
                  <Box className="serviceImg">
                    <Box
                      as="image"
                      src={halfTransMark}
                      className="img-fluid"
                    ></Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item lg={6} className="serRight-text">
              <motion.div
                initial={{ opacity: 0.5, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" color="">
                  What will you get
                </Typography>
                <Typography variant="h2" color="">
                  A Next-Generation Travel Experience
                </Typography>
                <Typography variant="body1" component="p">
                  Shankh Air is set to become Uttar Pradesh’s leading
                  full-service airline, offering reliable and affordable travel
                  with a customer-first approach. Operating from Noida
                  International Airport.
                </Typography>
                <Typography variant="body1" component="p">
                  Shankh Air will connect major cities within and outside Uttar
                  Pradesh, boosting regional connectivity and economic growth.
                  Initial routes include Lucknow, Varanasi, Gorakhpur, and key
                  metros like Delhi, Mumbai, and Bengaluru, with service
                  expected to begin by year-end for seamless travel across the
                  state.
                </Typography>
                <Box className="text-bottom">
                  <div className="btnWrapper">
                    <Button
                      variant="link"
                      className="coverBtn bg-green mb-0 btnIcon"
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        Discover More{" "}
                        
                      </span>
                    </Button>
                  </div>
                  <Box className="callInfo" as="a" href="tel:1234567890">
                    <Typography variant="body1" component="span">
                      +91 (99351) 52025
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ServeceNextGen;
