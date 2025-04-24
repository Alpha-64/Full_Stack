import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
const Login = () => {


  return (
    <Container maxWidth="xl">
      <Box
        component="section"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
       <LoginForm /> 
       <SignUpForm />
      </Box>
    </Container>
  );
};

export default Login;
