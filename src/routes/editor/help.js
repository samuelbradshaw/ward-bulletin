import { h, Component } from "preact";

const Help = () => {
  return (
    <div>
      <span
        onClick={e => {
          document.getElementById("help-modal").style.display = "none";
          e.stopPropagation();
        }}
        class="w3-button w3-display-topright"
      >
        &times;
      </span>
      <h5>Help</h5>
      <div class="w3-card w3-container">
        <div class="w3-container">
          <p>This is the help</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
