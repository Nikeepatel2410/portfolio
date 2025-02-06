import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
const CardComponent = ({ degree, clg, cgpa }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        marginX: 5,
        marginY: 2,
        border: "#e5e7eb",
        bgcolor: "#f6f7f9",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        borderRadius: 2,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)", // Zoom in effect
          boxShadow: 6, // Increase shadow on hover
        },
        textAlign: "left",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", letterSpacing: ".1rem" }}
        >
          {degree}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "grey",
            letterSpacing: ".1rem",
            fontWeight: "bold",
            fontSize: "1rem",
            paddingY: 1,
          }}
        >
          {clg}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "darkgrey",
            letterSpacing: ".1rem",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          {cgpa}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
