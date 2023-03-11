import React from "react";
import HomePage from "~/views/pages/HomePage";
import ContentPage from "~/views/pages/ContentPage";

const MainLayout = () => {
  return (
    <div className="main-content">
      <HomePage />
      <ContentPage />
    </div>
  );
};

export default MainLayout;
