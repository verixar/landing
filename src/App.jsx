import React from "react";

// Components
import TopNav from "./components/layout/Header/TopNav";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import LandingPage from "./pages/LandingPage";

// Libraries
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
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
        <TopNav />
        <Header />
        <main className="grow">
          <LandingPage />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
