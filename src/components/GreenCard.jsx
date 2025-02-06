import React from "react";
import { Card, CardContent, Divider, Grid2, Typography } from "@mui/material";
const GreenCard = ({ position, company, skill, duration }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        margin: 2,
        border: "#e5e7eb",
        bgcolor: "#ecfcc840",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)", // Zoom in effect
          boxShadow: 6, // Increase shadow on hover
        },
        textAlign: "left",
      }}
    >
      <CardContent>
        <Grid2
          container
          spacing={2}
          margin="0px"
          sx={{ justifyContent: "center" }}
        >
          <Grid2 item size={3}>
            <Typography
              sx={{
                fontFamily: "Satisfy, cursive",
                fontWeight: "bold",
                fontSize: "1.5rem",
                lineHeight: "2rem",
              }}
            >
              {position}
            </Typography>
          </Grid2>
          <Grid2 item size={6} alignContent="center">
            <Divider
              variant="middle"
              sx={{ border: 1, borderBlockColor: "lightgrey" }}
            />
          </Grid2>
          <Grid2 item size={3}>
            <Typography sx={{ fontWeight: "bold" }}>{duration}</Typography>{" "}
          </Grid2>
        </Grid2>

        <Typography
          variant="h6"
          sx={{ color: "black", padding: 1, letterSpacing: 1 }}
        >
          {company}
        </Typography>
        <Typography variant="h6" sx={{ color: "darkgreen", padding: 1 }}>
          {skill}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GreenCard;
