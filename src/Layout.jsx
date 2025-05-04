import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box>
      <Header />
      <Box component="main" sx={{ padding: "2rem" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
