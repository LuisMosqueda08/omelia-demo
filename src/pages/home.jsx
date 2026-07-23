import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Story from "../components/story/story";
import FeaturedMenu from "../components/featuredmenu/featuredmenu";
import Gallery from "../components/gallery/gallery";
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <FeaturedMenu />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
