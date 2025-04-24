import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
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
        <Box sx={{ mt: 4, mb: 4, p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </Box>
       <LoginForm />
      </Box>
    </Container>
  );
};

export default Login;
