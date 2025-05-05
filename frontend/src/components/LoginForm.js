import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Payload front function:", {
        emailOrPhone: formData.email,
        password: formData.password,
      });
      // Send the login request to the backend
      const response = await axios.post(
        "http://localhost:5000/api/fullstack/login",
        {
          emailOrPhone: formData.emailOrPhone,
          password: formData.password,
        }
      );
      console.log("Response data", response.data);
      toast.success("Login successful!");
      setFormData({ name: "", email: "" });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.log("Error", err.response.data);
      if (err.response.status === 401) {
        toast.error("Invalid credentials!");
      } else if (err.response.status === 500) {
        toast.error("Internal server error!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
  return (
    <>
      <Box sx={{ mt: 4, mb: 4, p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Email or Phone"
            name="emailOrPhone"
            variant="outlined"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            margin="normal"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
          <Box className="googleLogin btnWrapper" style={{margin: '10px 0',textAlign: 'center'}}>
            <Button className="btn btn-link coverBtn bg-orange" style={{fontSize: '16px'}}>Continue With Google</Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default LoginForm;
