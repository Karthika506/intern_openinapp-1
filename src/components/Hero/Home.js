import "../styles/home.css";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

function Home() {
  return (
    <>
      <section className="home--section">
        <HomeLeft />
        <HomeRight />
      </section>
    </>
  );
}

export default Home;
