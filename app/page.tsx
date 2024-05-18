"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

import Image from "next/image"; // Import next/image for optimized image rendering

// Import images from the local folder
import rabbit from "../public/images/Energizer Rabbit.jpeg";

export default function Home() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>

          <Button color="inherit" onClick={() => handleScroll("home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handleScroll("features")}>
            Features
          </Button>
          <Button color="inherit" onClick={() => handleScroll("contact")}>
            Contact
          </Button>
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
      <Container id="contact" style={{ padding: "100px 0" }}>
        <Typography variant="h2" gutterBottom>
          Contact Section
        </Typography>
        <Typography variant="body1">
          This is the Contact section of the landing page.
        </Typography>
      </Container>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </main>
  );
}
