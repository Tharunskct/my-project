import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import ComplaintForm from "./ComplaintForm";
import ComplaintDetails from "./ComplaintDetails";
import CustomerComplaintForm from "./CustomerComplaintForm";
import RuralDevelopment from "./RuralDevelopment";
import Donate from "./Donate";
import AdLoginForm from "./Admin/AdLoginForm";
import Sidebar from "./Admin/Sidebar";
import AdminHome from "./Admin/AdminHome";
import { UserProvider } from "./UserContext";
import Users from "./Users";
import { DonationProvider } from "./DonationContext";
import ComplaintsList from "./ComplaintsList";
import DonationList from "./DonationList";
import AdminPage from "./Admin/AdminPage";



const App = () => {
  return (
    <DonationProvider>
    <UserProvider>
    <Router>
    
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/comf" element={<ComplaintForm/>}/>
        <Route path="/comd" element={<ComplaintDetails/>}/>
        <Route path="/cus" element={<CustomerComplaintForm/>}/>
        <Route path="/rural" element={<RuralDevelopment/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/adlogin" element={<AdLoginForm/>}/>
        <Route path="/side" element={<Sidebar/>}/>
        <Route path="/adhome" element={<AdminHome/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/clist" element={<ComplaintsList/>}/>
        <Route path="/dlist" element={<DonationList/>}/>
        <Route path="/aduser" element={<AdminPage/>}/>
      </Routes>
    </Router>
    </UserProvider>
    </DonationProvider>
  );
};

export default App;
