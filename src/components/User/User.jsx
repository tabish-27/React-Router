import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const User = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            User Details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is the User Page. More info about the user will be displayed here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default User;
