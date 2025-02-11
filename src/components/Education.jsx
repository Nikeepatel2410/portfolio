import { Typography, Box, Container, useMediaQuery } from "@mui/material";
import React from "react";
import CardComponent from "./CardComponent";
import education from "../images/education.jpeg";

const Education = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        paddingX: "0px",
        margin: 0,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${education})`,
          height: isMobile ? "30vh" : "100vh",
          width: isMobile ? "100vw" : "30vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgb(176 208 217)",
          padding: "0px",
        }}
      />

      <Box
        margin={isMobile ? 2 : 7}
        sx={{
          textAlign: "center",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          padding: "0px",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          marginBottom="20px"
          sx={{
            textDecoration: "underline",
            fontWeight: "bold",
            color: "rgb(8 47 73)",
          }}
        >
          Education
        </Typography>
        <CardComponent
          degree="Bachelor of Engineering"
          clg="Leelaben Dasrathbhai Ramdas Patel Institute of Technology & Research, Gandhinagar"
          cgpa="CGPA: 6.87"
        />
        <CardComponent
          degree="Higher Secondary School"
          clg="Bright Junior Science College, Modasa"
          cgpa="Percentage: 70%"
        />
        <CardComponent
          degree=" Secondary HighSchool"
          clg="Shree K n Shah Modasa Highschool, Modasa"
          cgpa="Percentage: 89.33%"
        />
      </Box>
    </Container>
  );
};

export default Education;
