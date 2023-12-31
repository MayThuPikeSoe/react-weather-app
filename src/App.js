import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="bg">
          <Weather defaultCity="Myanmar" />
        </div>

        <footer>
          This project was coded by{" "}
          <span style={{ color: "red" }}>May Thu </span>
          <a
            href="https://github.com/MayThuPikeSoe/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          <span> and </span>
          <a
            href="https://sparkling-frangollo-412c37.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
