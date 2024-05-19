"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

import Box from "@mui/material/Box"; // Import the Box component from Material-UI

import Image from "next/image"; // Import next/image for optimized image rendering

// Import images from the local folder
import rabbit from "../public/images/Energizer Rabbit.jpeg";
import logo from "../public/images/logo.svg";

export default function Home() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main style={{ backgroundColor: "#001143", fontSize: "18px" }}>
      <AppBar position="static" sx={{ color: "#333" }}>
        <Toolbar
          sx={{
            backgroundColor: "#B2B1DE",
            color: "#333",
          }}
        >
          {/* Use flexbox to split content into two sections */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            {/* Left section */}
            <Box display="flex" alignItems="center" gap={1}>
              {/* Logo */}
              <Image src={logo} alt="Logo" width={50} height={50} />
              <Typography variant="h6">HackerHare</Typography>
            </Box>

            {/* Right section */}
            <Box>
              {/* Buttons */}
              <Button
                color="inherit"
                onClick={() => handleScroll("home")}
                sx={{ textTransform: "none" }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleScroll("features")}
                sx={{ textTransform: "none" }}
              >
                Features
              </Button>
              <Button
                color="inherit"
                onClick={() => handleScroll("cta")}
                sx={{
                  backgroundColor: "#F0B256",
                  color: "#333",
                  textTransform: "none", // Disable all-uppercase transformation
                  "&:hover": {
                    backgroundColor: "#FFD9A6", // Complementary color for hover
                    // Additional hover styles if needed
                  },
                  marginLeft: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                Add to Chrome
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Container id="home" style={{ padding: "100px 0" }}>
        <Image src={rabbit} alt="rabbit image" width={500} height={300} />
        <Typography variant="body1">
          This is the Home section of the landing page.
        </Typography>
      </Container>
      <Container id="features" style={{ padding: "100px 0" }}>
        <Typography variant="h2" gutterBottom>
          Features Section
        </Typography>
        <Typography variant="body1">
          This is the Features section of the landing page.
        </Typography>
      </Container>
      <Container id="cta" style={{ padding: "100px 0" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="body1"
            textAlign="center"
            marginBottom={2}
            sx={{ width: "300px", fontSize: "22px" }}
          >
            Ready to safeguard your online form-filling experience?
          </Typography>
          <Button
            sx={{
              backgroundColor: "#F0B256",
              color: "#333",
              textTransform: "none", // Disable all-uppercase transformation
              "&:hover": {
                backgroundColor: "#FFD9A6", // Complementary color for hover
                // Additional hover styles if needed
              },
            }}
          >
            Use HackerHare Now
          </Button>
        </Box>
      </Container>
      <AppBar position="static" color="primary">
        <Toolbar
          sx={{
            backgroundColor: "#B2B1DE",
            textAlign: "center",
            color: "#333",
          }}
        >
          <Typography
            variant="body1"
            color="inherit"
            sx={{ flexGrow: 1, backgroundColor: "#B2B1DE" }}
          >
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </main>
  );
}
