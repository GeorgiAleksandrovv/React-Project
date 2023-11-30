import { Routes, Route } from "react-router-dom";

import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Healthy from "./components/Healthy";
import Info from "./components/Info";
import Trainers from "./components/Trainers";
import WhyUs from "./components/WhyUs";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/whyUs" element={<WhyUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Healthy />
      <Info />
      <Footer />
    </>
  );
}

export default App;
