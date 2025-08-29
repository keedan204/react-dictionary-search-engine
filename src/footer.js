import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This React Application project was coded by{" "}
        <a
          href="https://github.com/KeeDan204"
          target="_blank"
          rel="noopener noreferrer"
        >
          KeeDan204
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/keedan204/react-dictionary-search-engine"
          target="_blank"
          rel="noopener noreferrer"
        >
          on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://react-dictionary-search-engine.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}