"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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
    <main
      style={{
        fontSize: "18px",
        background:
          "linear-gradient(135deg, #08074B 0%, #9EA7C1 50%, #08074B 100%)",
        backgroundSize: "200% 200%",
        animation: "gradientScroll 8s linear infinite alternate",
      }}
    >
      <style jsx>{`
        @keyframes gradientScroll {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 100%;
          }
        }
      `}</style>
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
          // backgroundColor: "#08074B",
          height: "1000px",
          display: "flex",
        }}
      >
        <Parallax translateX={["400px", "200px"]}>
          <div
            style={{
              position: "absolute",
              zIndex: -1,
            }}
          >
            <Image
              src={cloudRight}
              alt="right cloud"
              width={1600}
              height={900}
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
          <Parallax translateX={["-100px", "100px"]}>
            <Box sx={{ paddingLeft: "20px" }}>
              <Image
                src={rabbitRocket}
                alt="rabbit and rocket"
                width={500}
                height={700}
              />
            </Box>
          </Parallax>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="flex-start"
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
                borderRadius: "10px",
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
          // backgroundColor: "#08074B",
          height: "700px",
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
        <div
          style={{
            position: "relative",
            zIndex: 1,
            fontFamily: "var(--font-red_hat_text)",
            textAlign: "center",
            fontSize: "22px",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontFamily: "var(--font-orbitron)",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            Key Features
          </Typography>
          <Parallax translateX={["100px", "0px"]}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{
                  width: "700px",
                  backgroundColor: "#FFFCFC",
                  padding: "20px",
                  opacity: "80%",
                  color: "#3542B7",
                  marginTop: "50px",
                  borderRadius: "10px",
                }}
              >
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 600,
                    margin: "0 auto",
                    padding: 0,
                  }}
                >
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      padding: "10px 0",
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "20px",
                            lineHeight: "1.6",
                            fontFamily: "var(--font-red_hat_text)",
                            fontWeight: 500,
                          }}
                        >
                          Complicated Form Fields:
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "18px",
                            lineHeight: "1.6",
                            fontFamily: "var(--font-red_hat_text)",
                          }}
                        >
                          Forms are made deliberately inaccessible to challenge
                          users.
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      padding: "10px 0",
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "20px",
                            lineHeight: "1.6",
                            fontFamily: "var(--font-red_hat_text)",
                            fontWeight: 500,
                          }}
                        >
                          Blacklist Websites:
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "18px",
                            lineHeight: "1.6",
                            fontFamily: "var(--font-red_hat_text)",
                          }}
                        >
                          Customize your experience by blacklisting websites
                          where you do not want the extension to run.
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      padding: "10px 0",
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "20px",
                            lineHeight: "1.6",
                            fontFamily: "var(--font-red_hat_text)",
                            fontWeight: 500,
                          }}
                        >
                          Popup Management:
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "18px",
                            lineHeight: "1.6",
                            fontFamily: "var(--font-red_hat_text)",
                          }}
                        >
                          Quickly access settings and blacklist features through
                          a convenient popup.
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Parallax>
        </div>
      </Box>
      <Box
        id="cta"
        style={{
          padding: "100px 0",
          // backgroundColor: "#08074B"
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Parallax scale={[0.5, 2]}>
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
              marginTop: "50px",
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
