"use client";
import React from "react";
import { useRouter } from "next/navigation";

const batteryImg = "/devices/battery.png";
const brokenscreenImg = "/devices/brokenscreen.png";

const Repair: React.FC = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="device-issue-container">
      <div className="device-issue-card">
        <div className="device-issue-left">
          <h2 className="device-issue-title">What's wrong with it?</h2>
          <p className="device-issue-subtitle">Don't worry, we will fix it!</p>
          <div className="issue-options">
            <button className="issue-button">
              <img src={batteryImg} alt="Battery" className="issue-icon" />
              <span>Battery</span>
            </button>
            <button className="issue-button">
              <img src={brokenscreenImg} alt="Broken Screen" className="issue-icon" />
              <span>Broken Screen</span>
            </button>
          </div>
          <div className="extra-options">
            {["Charging Port", "Camera Lens", "Free Diagnostic"].map((item) => (
              <button key={item} className="extra-button">
                {item}
              </button>
            ))}
          </div>
          <textarea
            placeholder="describe other issues"
            className="issue-textarea"
            rows={6}
          />
          <div className="action-buttons">
            <button onClick={handleBack} className="back-button">
              Go back
            </button>
            <button className="continue-button">Continue</button>
          </div>
        </div>
        <div className="ai-analyzer">
          <div className="ai-analyzer-circle">
            <div className="ai-analyzer-inner-circle"></div>
          </div>
          <p className="ai-analyzer-title">AI ANALYZER</p>
          <p className="ai-analyzer-desc">OUR AI WILL ANALYZE THE ISSUE</p>
        </div>
      </div>
    </div>
  );
};

export default Repair; 