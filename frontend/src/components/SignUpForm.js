import React, { useState } from 'react'
import {TextField, Button, Typography, Box } from "@mui/material";
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
      });
      const [submitData, setSubmitData] = useState([]);

      const handleChange = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const Response = await axios.post('http://localhost:5000/api/fullstack/signup', formData);
          console.log('Response data',Response.data);
          toast.success('User registered successfully!');
          setFormData({name: '', email: '', phone: '', password: ''});
        }catch(err){
          console.log('Error', err.response.data);
          if(err.response.status === 409){
            toast.error('User already exists!');
          }else if(err.response.status === 500){
            toast.error('Internal server error!');
          }else{
            toast.error('Something went wrong!');
          }
        }
      };


  return (
    <>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
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

export default SignUpForm
