import React, { createContext, useState } from "react";

// Create the DonationContext
export const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);

  // Function to add a new donation
  const addDonation = (donation) => {
    setDonations((prevDonations) => [...prevDonations, donation]);
  };

  return (
    <DonationContext.Provider value={{ donations, addDonation }}>
      {children}
    </DonationContext.Provider>
  );
};
