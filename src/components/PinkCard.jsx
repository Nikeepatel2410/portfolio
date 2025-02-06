import React from "react";
import { Card, CardContent, Typography, Link } from "@mui/material";
const PinkCard = ({ name, skill, github, url }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        margin: 2,
        border: "#e5e7eb",
        bgcolor: "rgb(245 208 254 / 50%)",
        width: "50%",
        height: "40%",
        textAlign: "left",
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{ lineHeight: "2.5rem", fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <Typography
          variant="h7"
          textOverflow="wrap"
          sx={{ color: "black", lineHeight: "2rem" }}
        >
          {skill}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "rgb(134 25 143)", lineHeight: "2rem" }}
        >
          {github}
        </Typography>

        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "block",
            mt: 1,
            lineHeight: "2rem",
            color: "rgb(134 25 143)",
            textDecoration: "null",
          }}
        >
          Visit Website
        </Link>
      </CardContent>
    </Card>
  );
};

export default PinkCard;
