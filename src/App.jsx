import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import LandingPage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "White",
              color: "#252B42",
              fontFamily: "Gilroy, sans-serif",
            },
          }}
        />
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;