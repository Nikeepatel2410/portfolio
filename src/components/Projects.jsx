import React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import project from "../images/project.webp";
import PinkCard from "./PinkCard";

const Projects = () => {
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
        paddingX: "0px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${project})`,
          height: isMobile ? "30vh" : "100vh",
          width: isMobile ? "100vw" : "30vw",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgb(245 208 254)",
        }}
      ></Box>
      <Box
        margin={isMobile ? 2 : 7}
        sx={{
          textAlign: "center",
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            marginTop: isMobile ? "20px" : "30px",
            color: "rgb(134 25 143)",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Projects
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flex: 1,
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
            justifyContent: "space-evenly",
            margin: isMobile ? 2 : 5,
          }}
        >
          <PinkCard
            name="Lumba"
            skill="React.js, Redux, Material UI, Medplum, Fihr"
            url="https://www.neelyx.com/"
          />
          <PinkCard
            name="Maximum Spin"
            skill="Mantine UI, React.js, Sql "
            url="https://maximumspin.com/"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Projects;
