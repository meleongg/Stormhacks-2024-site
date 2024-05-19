"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

import Box from "@mui/material/Box"; // Import the Box component from Material-UI
import Image from "next/image"; // Import next/image for optimized image rendering

// Import images from the local folder
import { Parallax } from "react-scroll-parallax";
import cloudLeft from "../public/images/cloud left.svg";
import cloudRight from "../public/images/cloud right.svg";
import logo from "../public/images/logo.svg";
import rabbitLogo from "../public/images/rabbit logo.svg";
import rabbitRocket from "../public/images/rabbit rocket.svg";

export default function Home() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main style={{ fontSize: "18px" }}>
      <AppBar position="static" sx={{ color: "#333" }}>
        <Toolbar
          sx={{
            backgroundColor: "#B2B1DE",
            color: "#333",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Image src={logo} alt="Logo" width={50} height={50} />
              <Typography
                variant="h6"
                sx={{ fontFamily: "var(--font-orbitron)" }}
              >
                HackerHare
              </Typography>
            </Box>

            <Box>
              <Button
                color="inherit"
                onClick={() => handleScroll("home")}
                sx={{
                  textTransform: "none",
                  fontFamily: "var(--font-red_hat_text)",
                  fontWeight: 700,
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleScroll("features")}
                sx={{
                  textTransform: "none",
                  fontFamily: "var(--font-red_hat_text)",
                  fontWeight: 700,
                }}
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
                    backgroundColor: "#FFD9A6",
                  },
                  marginLeft: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontFamily: "var(--font-orbitron)",
                  fontWeight: "700",
                }}
              >
                Add to Chrome
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        id="home"
        style={{
          padding: "50px 0",
          backgroundColor: "#08074B",
          height: "800px",
          display: "flex",
        }}
      >
        <Parallax translateX={["600px", "450px"]}>
          <div
            style={{
              position: "absolute",
              zIndex: -1,
            }}
          >
            <Image
              src={cloudRight}
              alt="right cloud"
              width={1200}
              height={700}
            />
          </div>
        </Parallax>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ paddingLeft: "20px" }}>
            <Image
              src={rabbitRocket}
              alt="rabbit and rocket"
              width={500}
              height={700}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="center"
            sx={{
              opacity: "80%",
              color: "#3542B7",
            }}
          >
            <Box
              sx={{
                width: "800px",
                backgroundColor: "#FFFCFC",
                padding: "30px",
                marginTop: "300px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "70px",
                  fontFamily: "var(--font-orbitron)",
                  textAlign: "center",
                }}
              >
                HackerHare
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-red_hat_text)",
                  textAlign: "center",
                  fontSize: "22px",
                }}
              >
                Committed to protecting you with just a few clicks.
              </Typography>
            </Box>
          </Box>
        </div>
      </Box>
      <Box
        id="features"
        style={{
          position: "relative",
          padding: "50px 0",
          backgroundColor: "#08074B",
          height: "800px",
        }}
      >
        <Parallax translateX={["-800px", "-150px"]}>
          <div
            style={{
              position: "absolute",
              zIndex: -1,
            }}
          >
            <Image src={cloudLeft} alt="left cloud" width={1200} height={700} />
          </div>
        </Parallax>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" gutterBottom>
            Features Section
          </Typography>
          <Typography variant="body1">
            This is the Features section of the landing page.
          </Typography>
        </div>
      </Box>
      <Box id="cta" style={{ padding: "100px 0", backgroundColor: "#08074B" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Parallax scale={[0.5, 1.5]}>
            <Image
              src={rabbitLogo}
              alt="rabbit logo"
              width={200}
              height={200}
            />
          </Parallax>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              width: "400px",
              fontSize: "22px",
              marginBottom: "25px",
              marginTop: "25px",
              fontFamily: "var(--font-orbitron)",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Ready to safeguard your online form-filling experience?
          </Typography>
          <Button
            sx={{
              backgroundColor: "#F0B256",
              color: "#fff",
              textTransform: "none", // Disable all-uppercase transformation
              "&:hover": {
                backgroundColor: "#FFD9A6", // Complementary color for hover
                // Additional hover styles if needed
              },
              fontSize: "28px",
              fontFamily: "var(--font-orbitron)",
              fontWeight: "700",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            Use HackerHare Now
          </Button>
        </Box>
      </Box>
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
            sx={{
              flexGrow: 1,
              backgroundColor: "#B2B1DE",
              fontFamily: "var(--font-red_hat_text)",
              fontWeight: 700,
            }}
          >
            © {new Date().getFullYear()} HackerHare
          </Typography>
        </Toolbar>
      </AppBar>
    </main>
  );
}
