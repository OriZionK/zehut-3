import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar.jsx";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./components/pages/AboutUsPage/AboutUsPAge.jsx";
import FaqPage from "./components/pages/FAQ/faq.jsx";
import HomePage from "./components/pages/HomePage/HomePage.jsx";
import ContactUs from "./components/pages/ContactUs/ContactUs.jsx";
import Updates from "./components/pages/Updates/Updates.jsx";
import WroteAboutUs from "./components/pages/WroteAboutUs/WroteAboutUs.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/wrote-about-us" element={<WroteAboutUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
