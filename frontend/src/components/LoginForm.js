import React, { useState } from 'react'
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
      });

      const handleChange = (e) => {
        setFormData(prev => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        };
    
        try {
          const res = await axios.post('http://localhost:5000/api/signup', payload);
          console.log('User created:', res.data);
        } catch (err) {
          console.error('Signup error:', err);
        }
      };


  return (
    <>
       <Box sx={{ mt: 4, mb: 4, p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Signup
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="phone"
              label="Phone"
              variant="outlined"
              margin="normal"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Signup
            </Button>
          </Box>
        </Box>
    </>
  )
}

export default LoginForm
