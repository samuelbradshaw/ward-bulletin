import { h } from "preact";
import style from "./style";
import Header from "../../components/header";

const Home = () => (
  <div class={style.home}>
    <Header title="Ward Bulletin App" />
    <p>Show Bulletin</p>
  </div>
);

export default Home;
