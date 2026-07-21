import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Story from "../components/story/story";
import FeaturedMenu from "../components/featuredmenu/featuredmenu";
import Gallery from "../components/gallery/gallery";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <FeaturedMenu />
      <Gallery />
    </>
  );
};

export default Home;
