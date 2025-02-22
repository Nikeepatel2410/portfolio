import {
  Container,
  Box,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import skill from "../images/skills.webp";
import reactlogo from "../images/react.png";
import jslogo from "../images/js.png";
import reduxlogo from "../images/redux.png";
import html from "../images/html.png";
import css from "../images/css.png";
import bootsrap from "../images/bootstrap-5.svg";
import mysql from "../images/mysql.png";
import tailwind from "../images/tailwind-css-2.svg";
import materialui from "../images/material-ui-1.svg";
import { BorderAllRounded } from "@mui/icons-material";

const Skills = () => {
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
          height: isMobile ? "30vh" : "100vh",
          width: isMobile ? "100vw" : "30vw",
          backgroundImage: `url(${skill})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgb(254 205 211)",
          padding: "0px",
        }}
      ></Box>
      <Box
        margin={isMobile ? 2 : 7}
        disableGutters
        sx={{
          display: "flex",
          flex: 1,
          textAlign: "center",
          flexDirection: "column",

          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginY: "30px",
            color: "darkpink",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Skills
        </Typography>
        <Grid2 container justifyContent="center" spacing={10}>
          <Grid2 item>
            <img
              src={reactlogo}
              alt="react"
              height="100"
              width="100"
              sx={{}}
            ></img>
          </Grid2>
          <Grid2 item>
            <img src={reduxlogo} alt="redux" height="100" width="100"></img>
          </Grid2>
          <Grid2 item>
            <img src={jslogo} alt="js" height="100" width="100"></img>
          </Grid2>
        </Grid2>
        <Grid2 container justifyContent="center" spacing={10} marginTop={5}>
          <Grid2 item>
            <img src={html} alt="react" height="100" width="100"></img>
          </Grid2>
          <Grid2 item>
            <img src={css} alt="redux" height="100" width="100"></img>
          </Grid2>
          <Grid2 item>
            <img src={bootsrap} alt="js" height="100" width="100"></img>
          </Grid2>
        </Grid2>
        <Grid2 container justifyContent="center" spacing={10} marginTop={5}>
          <Grid2 item>
            <img src={mysql} alt="react" height="100" width="100"></img>
          </Grid2>
          <Grid2 item>
            <img src={materialui} alt="redux" height="100" width="100"></img>
          </Grid2>
          <Grid2 item>
            <img src={tailwind} alt="js" height="100" width="100"></img>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Skills;
