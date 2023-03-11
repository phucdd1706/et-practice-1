import React from "react";
import Header from "./layout/Header";
import MainLayout from "./layout/MainLayout";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <MainLayout />
      <Footer />
    </div>
  );
}

export default App;
