import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "2rem 0" }}>
      <Grid container spacing={4} justifyContent="space-between" sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Grid item>
          <Typography variant="h6" color="primary">
            Your <span style={{ color: "red" }}>Logo</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" fontWeight="bold">RESOURCES</Typography>
          <Typography variant="body2">Home</Typography>
          <Typography variant="body2">About</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" fontWeight="bold">FOLLOW US</Typography>
          <Typography variant="body2">Github</Typography>
          <Typography variant="body2">Leetcode</Typography>
          <Typography variant="body2">LinkedIn</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" fontWeight="bold">LEGAL</Typography>
          <Typography variant="body2">Privacy Policy</Typography>
          <Typography variant="body2">Terms & Conditions</Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" sx={{ marginTop: "1rem" }}>
        &copy; 2024 ShopEasy. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
