import { h } from "preact";
import { Link } from "preact-router/match";

const Header = ({ title }) => (
  <div class="w3-top" style={{ opacity: 0.9 }}>
    <div class="w3-bar w3-theme-d2">
      <h4 class="w3-center">{title}</h4>
    </div>
  </div>
);

export default Header;
