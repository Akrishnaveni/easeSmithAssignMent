import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/Home";
import PlantsAndPotsPage from "./components/PlantsAndPots";
import ProfilePage from "./components/Profile";
import CartPage from "./components/Cart";
import FAQPage from "./components/FAQ";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Ourstories from "./components/Ourstories";
import Blog from "./components/Blog";
import "./styles.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants-and-pots" element={<PlantsAndPotsPage />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourstories" element={<Ourstories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}
{
  /**/
}

export default App;
