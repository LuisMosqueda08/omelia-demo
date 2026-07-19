import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Story from "../components/story/story";
import Menu from "../components/feacturedmenu/feacturedmenu"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Menu />
    </>
  );
};

export default Home;