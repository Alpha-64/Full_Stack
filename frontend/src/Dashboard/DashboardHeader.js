import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const drawerWidth = 200;

const DashboardHeader = ({ handleDrawerOpen, open }) => {
  let navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 1000); // wait for 1 sec
  };
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: (theme) =>
          theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        ...(open && {
          marginLeft: `${drawerWidth}px`,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }),
      }}
    >
      <Toolbar>
        <ToastContainer position="top-right" autoClose={2000} />
        {!open && (
          <IconButton
            onClick={handleDrawerOpen}
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap component="div">
          Mr Admin Dashboard
        </Typography>

        <Button
          sx={{ color: "#fff", backgroundColor: "#ccc" }}
          onClick={logoutUser}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
