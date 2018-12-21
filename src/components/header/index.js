import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Header = ({ title }) => (
  <header class={style.header}>
    <h1>{title}</h1>
  </header>
);

export default Header;
