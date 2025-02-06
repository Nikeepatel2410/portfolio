import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import bgimage from "../images/background.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Home = () => {
  const handleLinkedInPage = () => {
    window.location.href = "https://www.linkedin.com/in/nikee-patel";
  };

  const handleGithubPage = () => {
    window.location.href = "https://github.com/Nikeepatel2410";
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgimage})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          height: "30%",
          marginTop: 60,
        }}
      >
        <Typography
          sx={{ fontSize: "3rem", fontWeight: "bold" }}
          color="white"
          fontFamily="Rubik Mono One,monospace"
          lineHeight="3rem"
          fontWeight={500}
        >
          Nikee Patel
        </Typography>
        <Typography
          variant="h5"
          color="white"
          lineHeight="3rem"
          fontFamily="Satisfy"
        >
          A Software Developer
        </Typography>
        <Typography variant="h5" color="white" noWrap>
          A Computer engineering student who has a strong interest in web
          development.
        </Typography>
        <IconButton onClick={handleGithubPage}>
          <GitHubIcon
            sx={{ color: "white", height: "2.25rem", width: "3rem" }}
          />
        </IconButton>
        <IconButton onClick={handleLinkedInPage}>
          <LinkedInIcon
            sx={{ color: "white", height: "2.25rem", width: "3rem" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
