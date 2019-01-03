import { h } from "preact";
import style from "./style";
import Header from "../../components/header";

const Home = () => (
  <div class={style.home}>
    <Header title="Ward Bulletin App" />
    <button class="w3-button w3-theme w3-round">Show Bulletin</button>
  </div>
);

export default Home;
