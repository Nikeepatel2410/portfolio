import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Snackbar,
  Alert,
  useMediaQuery,
} from "@mui/material"; // Import Snackbar and Alert

import contact from "../images/mail.webp";

const ContactMe = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [numberField, setNumberField] = useState("");
  const [msgField, setMsgField] = useState("");
  const [open, setOpen] = useState(false); // State for Snackbar

  const handleName = (e) => {
    setNameField(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailField(e.target.value);
  };
  const handleNumber = (e) => {
    setNumberField(e.target.value);
  };
  const handleMsg = (e) => {
    setMsgField(e.target.value);
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:patelnikee2@gmail.com?subject=Contact Form Submission&body=Name: ${nameField}%0D%0AEmail: ${emailField}%0D%0ANumber: ${numberField}%0D%0AMessage: ${msgField}`;
    window.location.href = mailtoLink;
    setNameField("");
    setEmailField("");
    setNumberField("");
    setMsgField("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          backgroundImage: `url(${contact})`,
          height: isMobile ? "30vh" : "100vh",
          width: isMobile ? "100vw" : "30vw",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgb(255 237 213 )",
        }}
      ></Box>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          marginX: isMobile ? 2 : 10,
          marginBottom: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            margin: isMobile ? "20px" : "30px",
            color: "rgb(217 119 6)",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Reach Me Out
        </Typography>
        <Box
          backgroundColor="rgb(255 237 213/0.5 )"
          marginX={isMobile ? 2 : 15}
          paddingBottom={5}
          borderRadius={3}
          boxShadow={5}
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)", // Zoom out slightly on hover
            },
            display: "flex",
            flexDirection: "column", // Ensure items are in a column
            alignItems: "center", // Center align items
          }}
        >
          <TextField
            sx={{ margin: 2, width: isMobile ? "90%" : "80%" }}
            label="Name"
            name="name"
            value={nameField}
            onChange={handleName}
            variant="standard"
          />
          <TextField
            sx={{ margin: 2, width: isMobile ? "90%" : "80%" }}
            label="Email"
            name="email"
            value={emailField}
            onChange={handleEmail}
            variant="standard"
          />
          <TextField
            sx={{ margin: 2, width: isMobile ? "90%" : "80%" }}
            label="Number"
            name="number"
            value={numberField}
            onChange={handleNumber}
            variant="standard"
          />
          <TextField
            sx={{ margin: 2, width: isMobile ? "90%" : "80%" }}
            label="Msg"
            name="msg"
            value={msgField}
            onChange={handleMsg}
            variant="standard"
          />
          <Button
            sx={{
              backgroundColor: "rgb(217 119 6)",
              color: "white",
              marginTop: 2,
              width: isMobile ? "50%" : "30%",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Details submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactMe;
