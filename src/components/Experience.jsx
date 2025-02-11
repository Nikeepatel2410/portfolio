import { Container, Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import experience from "../images/experience.webp";

import GreenCard from "./GreenCard";
const Experience = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        margin: 0,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${experience})`,
          height: isMobile ? "30vh" : "100vh",
          width: isMobile ? "100vw" : "30vw",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgb(236 252 203)",
        }}
      ></Box>
      <Box
        margin={isMobile ? 2 : 7}
        sx={{
          textAlign: "center",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          padding: isMobile ? "20px" : "0px",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            color: "rgb(63 98 18 )",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Experience
        </Typography>
        <GreenCard
          position="System Engineer"
          duration="June 2022 - Sept 2023"
          company="📍Infosys (Mysore)"
          skill="Html, Css, JavaScript, Java, React.js, Jmeter, Selenium, SoapUI, RestAssured, LoadRunner"
        />
        <GreenCard
          position="Software Devloper"
          duration="Oct 2023 - Dec 2024"
          company="📍Trusted Communities Organizations (Gandhinagar)"
          skill="React.js, JavaScript, Redux, Typescript, Sql, Medplum, Fihr, React Router"
        />
      </Box>
    </Container>
  );
};

export default Experience;
