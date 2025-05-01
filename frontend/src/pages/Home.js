import React from "react";
import { Box, Typography } from '@mui/material'
import CoverSlider from "../components/HomeComponents/CoverSlider";
import FeaturedBoxes from "../components/HomeComponents/FeaturedBoxes";
import BookNowHome from "../components/HomeComponents/BookNowHome";
import ServeceNextGen from "../components/HomeComponents/ServeceNextGen";


const Home = () => {
  return (
    <>
      <Box as="section" className="homepage">
        <CoverSlider />
        <FeaturedBoxes />
        <BookNowHome />
        <ServeceNextGen />
      </Box>
    </>
  );
};

export default Home;
