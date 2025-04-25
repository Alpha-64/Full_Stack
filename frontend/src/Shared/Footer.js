import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  let navigate = useNavigate();
  return (
    <>
      <Box component='section'>
        <Container fluid maxWidth="lg">
            You are looking into the footer 
        </Container>
      </Box>
    </>
  );
};

export default Footer;
