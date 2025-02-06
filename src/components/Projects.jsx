import React from "react";
import { Box, Container, Typography } from "@mui/material";
import project from "../images/project.webp";
import PinkCard from "./PinkCard";

const Projects = () => {
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
          backgroundImage: `url(${project})`,
          height: "100vh",
          width: "30vw",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgb(245 208 254)",
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
            flexDirection: "row",
            marginX: 10,
            justifyContent: "space-evenly",
            margin: 5,
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
