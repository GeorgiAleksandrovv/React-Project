import { Routes, Route } from "react-router-dom";

import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Healthy from "./components/Healthy";
import Info from "./components/Info";
import Trainers from "./components/Trainers";
import WhyUs from "./components/WhyUs";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/whyUs" element={<WhyUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Healthy />
      <Info />
      <Footer />
    </>
  );
}

export default App;
