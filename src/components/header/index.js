import { h } from "preact";
import { Link } from "preact-router/match";

const Header = ({ title }) => (
  <header class="w3-top" style={{ opacity: 0.9 }}>
    <div class="w3-bar w3-content w3-theme-d2">
      <h3 class="w3-center">{title}</h3>
    </div>
  </header>
);

export default Header;
