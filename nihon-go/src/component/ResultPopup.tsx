import React from "react";
import "../css/component/ResultPopup.css";

interface ResultPopupProps {
  score: number;
  accuracy?: string;
  total: number;
  time?: string;
  onRestart: () => void;
  // onClose: () => void;
}

const ResultPopup: React.FC<ResultPopupProps> = ({
  score,
  accuracy = "",
  total,
  time = "",
  onRestart,
  // onClose,
}) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        {/* <button className="close-button" onClick={onClose}>
          ×
        </button> */}
        <h2>Results</h2>
        <p>
          <strong>Score:</strong> {score} / {total}
        </p>
        {accuracy && (
          <p>
            <strong>Accuracy:</strong> {accuracy}%
          </p>
        )}
        {time && (
          <p>
            <strong>Time:</strong> {time}s
          </p>
        )}
        <button className="restart-button" onClick={onRestart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default ResultPopup;
