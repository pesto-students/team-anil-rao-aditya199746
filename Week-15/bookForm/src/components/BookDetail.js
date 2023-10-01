import React, { useState } from "react";

function BookDetail({ book }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="book-details">
      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div>
          <p>Description: {book.description || "N/A"}</p>
          <p>Genre: {book.genre || "N/A"}</p>
        </div>
      )}
    </div>
  );
}

export default BookDetail;
