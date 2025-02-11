import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import bgimage from "../images/background.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Home = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const handleLinkedInPage = () => {
    window.open(
      "https://www.linkedin.com/in/nikee-patel-b7373b215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      "_blank"
    );
  };

  const handleGithubPage = () => {
    window.open("https://github.com/Nikeepatel2410", "_blank");
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
          height: "auto",
          marginTop: isMobile ? 40 : 50,
        }}
      >
        <Typography
          sx={{ fontSize: isMobile ? "2rem" : "3rem", fontWeight: "bold" }}
          color="white"
          fontFamily="Rubik Mono One,monospace"
          lineHeight="3rem"
          fontWeight={500}
        >
          Nikee Patel
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          color="white"
          lineHeight="3rem"
          fontFamily="Satisfy"
        >
          A Software Developer
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h5"}
          color="white"
          sx={{ marginTop: isMobile ? "10px" : "0px" }}
        >
          A Computer engineering student who has a strong interest in web
          development.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: isMobile ? "10px" : "20px",
          }}
        >
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
    </Box>
  );
};

export default Home;
