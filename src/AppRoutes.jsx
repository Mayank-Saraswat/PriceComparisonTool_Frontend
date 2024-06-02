import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from ".";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import PrivacyPolicy from "./Components/PrivacyPolicy";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="privacypolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRoutes;
