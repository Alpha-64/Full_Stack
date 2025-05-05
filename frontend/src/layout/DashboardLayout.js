import React, {useState} from "react";
import { Box, CssBaseline } from "@mui/material";
import DashboardSidebar from "../Dashboard/DashboardSidebar";
import DashboardHeader from "../Dashboard/DashboardHeader";
import { Outlet } from "react-router-dom";
import '../assets/CSS/dashboard.css'

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const toggleDrawer = () => setOpen((prev) => !prev); 
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DashboardHeader open={open} handleDrawerOpen={handleDrawerOpen}/>
      <DashboardSidebar open={open} handleDrawerClose={handleDrawerClose}/>
      <Box component="main" className="dashboardMain" sx={{ flexGrow: 1, p: 3 }}>
        {/* Use this to offset the top bar height */}
        <Box sx={{ height: "64px" }} />
          <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout
