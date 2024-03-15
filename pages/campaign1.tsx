import React, { useState } from "react";
import Image from "next/image";

const CampaignPage = () => {
  const [step, setStep] = useState(1); // Added state to track the step
  const [selection, setSelection] = useState("Recommended");
  const [reward, setReward] = useState({ name: "", description: "" });

  // Updated options for both steps
  const optionsStep1 = [
    "Recommended",
    "NEAR",
    "TON",
    "Avalanche",
    "Camino",
    "Arbitrum",
  ];
  const optionsStep2 = ["Catcher game", "Memory cards", "Lottery", "Maze"];

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const campaignPageStyle = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 1)", // Fallback color
    backgroundImage: "url('/assets/lnd-bg2.png')", // Path to your image
    backgroundSize: "cover", // Cover the entire page
    backgroundPosition: "center", // Center the background image
  };

  const cardContainerStyle = {
    padding: "2rem",
    width: "100%",
    maxWidth: "650px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    borderRadius: "0.5rem",
  };

  const cardStyle = {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle = {
    marginBottom: "0.5rem",
    fontSize: "30px",
  };

  const selectStyle = {
    padding: "0.5rem",
    marginBottom: "1rem",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "0.25rem",
    fontSize: "20px",
  };

  const buttonStyle = {
    padding: "0.5rem",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={campaignPageStyle}>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <label htmlFor="network-select" style={labelStyle}>
            {step === 1 ? "Choose the network:" : "Choose Game:"}{" "}
          </label>
          <select
            id="selection-select"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            style={selectStyle}
          >
            {(step === 1 ? optionsStep1 : optionsStep2).map(
              (
                option // Conditional dropdown options
              ) => (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            )}
          </select>
          <button
            onClick={handleNext}
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
