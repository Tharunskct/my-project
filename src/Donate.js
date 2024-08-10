import React, { useState } from "react";
import {
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/system";
import NavBar from "./Navbar";
import Footer from "./Footer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DonationChart from "./DonationChart";

// Create a custom theme with Material-UI's createTheme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 600,
      marginBottom: "20px",
    },
    body1: {
      color: "#555",
    },
  },
});

// Styled components using MUI's styling system
const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(4),
  marginTop: theme.spacing(100),
  marginBottom: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "8px",
  textTransform: "none",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    feedback: "",
    category: "", // Add a new state for category selection
  });

  // State to track total donations by category
  const [donations, setDonations] = useState({
    Infrastructure: 0,
    Health: 0,
    Education: 0,
    Environment: 0,
    Agriculture: 0,
    "Social Issues": 0,
    Technology: 0,
    Others: 0,
  });

  const handleAmountClick = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      amount: value.toString(),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePayClick = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Basic form validation
    if (!formData.name || !formData.amount || !formData.category) {
      alert("Please fill out all required fields.");
      return;
    }

    const donationAmount = parseFloat(formData.amount);

    // Update the total donations by category
    setDonations((prevDonations) => ({
      ...prevDonations,
      [formData.category]: prevDonations[formData.category] + donationAmount,
    }));

    // Here you can integrate the payment functionality
    // Send data to the backend
    try {
      const response = await fetch('http://localhost:8080/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit donation');
      }

      // Reset form fields after successful submission
      setFormData({
        name: '',
        amount: '',
        feedback: '',
        category: '',
      });

      alert('Donation successful');
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('Failed to submit donation');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="donate-page">
        <NavBar />
        <StyledContainer component={Paper} elevation={3} maxWidth="sm">
          <Typography variant="h4" component="h2" align="center" color="primary">
            Make a Donation <FavoriteIcon color="secondary" />
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Your support makes a big difference! Please select an amount to donate.
          </Typography>
          <form onSubmit={handlePayClick} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  label="Full Name"
                  fullWidth
                  variant="outlined"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    label="Category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Infrastructure">Infrastructure</MenuItem>
                    <MenuItem value="Health">Health</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Environment">Environment</MenuItem>
                    <MenuItem value="Agriculture">Agriculture</MenuItem>
                    <MenuItem value="Social Issues">Social Issues</MenuItem>
                    <MenuItem value="Technology">Technology</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="div" gutterBottom>
                  Choose an Amount:
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
                  {[100, 200, 500, 1000].map((value) => (
                    <StyledButton
                      key={value}
                      variant={formData.amount === value.toString() ? "contained" : "outlined"}
                      color={formData.amount === value.toString() ? "secondary" : "primary"}
                      onClick={() => handleAmountClick(value)}
                    >
                      ${value}
                    </StyledButton>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="amount"
                  label="Custom Amount"
                  fullWidth
                  variant="outlined"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="Enter custom amount"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="feedback"
                  label="Feedback"
                  multiline
                  fullWidth
                  rows={4}
                  variant="outlined"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  placeholder="Enter your feedback here"
                />
              </Grid>
            </Grid>
            <Box mt={3}>
              <StyledButton
                type="submit" // Change from `button` to `submit` to trigger form submission
                variant="contained"
                color="primary"
                fullWidth
              >
                Donate Now
              </StyledButton>
            </Box>
          </form>
        </StyledContainer>

        {/* Render the DonationChart component with donations data */}
        <DonationChart donations={donations} />

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Donate;
