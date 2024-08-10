import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Paper,
  Grid,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Create a custom theme with Material-UI's createTheme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#ff4081", // Pink
    },
    background: {
      default: "#f4f6f8",
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 700,
      marginBottom: "20px",
    },
    body1: {
      color: "#555",
    },
  },
});

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/donations");
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component={Paper}
        elevation={4}
        maxWidth="lg"
        sx={{
          padding: 4,
          marginTop: 1,
          backgroundColor: "#ffffff",
          borderRadius: 12,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" component="h2" align="center" color="primary">
          Donation List
        </Typography>
        <Box
          sx={{
            maxHeight: 500, // Adjust this value based on your design
            overflowY: 'auto',
            marginTop: 2,
            padding: 2,
            background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
            borderRadius: 8,
          }}
        >
          <Grid container spacing={3}>
            {donations.map((donation) => (
              <Grid item xs={12} key={donation.id}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 3,
                    background: `linear-gradient(145deg, ${getRandomColor()}, ${getRandomColor()})`,
                    color: "#fff",
                    borderRadius: 10,
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    '&:hover': {
                      transform: "scale(1.02)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">Name: {donation.name}</Typography>
                  <Typography variant="body1">Amount: ${donation.amount}</Typography>
                  <Typography variant="body1">Category: {donation.category}</Typography>
                  <Typography variant="body1">Feedback: {donation.feedback}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

// Utility function to generate random colors
const getRandomColor = () => {
  const colors = [
    "#ff7f7f", "#ffb84d", "#80e3ff", "#c280ff", "#80ff80",
    "#ff80c0", "#80b3ff", "#ff6666", "#66ff99", "#ffcc66"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default DonationList;
