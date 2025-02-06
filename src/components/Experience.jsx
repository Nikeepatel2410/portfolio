import { Container, Box, Typography } from "@mui/material";
import React from "react";
import experience from "../images/experience.webp";

import GreenCard from "./GreenCard";
const Experience = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        paddingX: "0px",
        margin: 0,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${experience})`,
          height: "100vh",
          width: "30vw",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgb(236 252 203)",
        }}
      ></Box>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          marginX: 10,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginTop: "30px",
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
