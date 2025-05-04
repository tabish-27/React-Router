import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ padding: "2rem 0" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
            alt="Startup Illustration"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold">
            React development is carried out by passionate developers
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            React is a powerful JavaScript library for building modern user interfaces. It enables developers to create dynamic, scalable, and high-performance applications efficiently.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            With a strong community and continuous improvements, React provides a robust ecosystem for front-end development, making it a preferred choice for developers worldwide.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
