import React from "react";
import Cards from "./cards";

const MainContent = () => {
  return (
    <div>
      <h2 className="font-serif pt-4 pl-4">Main content goes here</h2>
      <div className="justify-items-center">
        <Cards />
      </div>
    </div>
  );
};

export default MainContent;
