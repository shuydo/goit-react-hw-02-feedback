import React from "react";

function Controls({ onDecr, onIncr }) {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onDecr}>
        dec 1
      </button>
      <button type="button" onClick={onIncr}>
        inc 1
      </button>
    </div>
  );
}

export default Controls;
