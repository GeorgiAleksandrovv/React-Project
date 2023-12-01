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
import AddTrainer from "./components/AddTrainer";
import { AuthProvider } from "./contexts/authContext";
import Details from "./components/Details";
import TrainerUpdate from "./components/trainerUpdate";
import Logout from "./components/logout";
import AuthGuard from "./components/AuthGuard";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/whyUs" element={<WhyUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trainers/:trainerId" element={<Details />} />
          <Route element={<AuthGuard />}>
            <Route path="/addTrainer" element={<AddTrainer />} />
            <Route
              path="/trainers/:trainerId/edit"
              element={<TrainerUpdate />}
            />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
        <Healthy />
        <Info />
        <Footer />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
