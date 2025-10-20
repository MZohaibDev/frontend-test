import React from "react";
import "./App.css";
import { Carousel } from "./Components/Carousel/Carousel.jsx";

function App() {
  return (
    <>
      <h1>Frontend Test </h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-around",
          margin: "20px",
          columnGap: "20px",
        }}
      >
        <button>Start</button>
        <button>Stop</button>
      </div>
      <Carousel />
    </>
  );
}

export default App;
