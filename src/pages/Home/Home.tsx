import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";

const Home = () => {

  return (
    <>
     
        <NavBar />
        <Hero />
        <About/>
        <Skills />
 
    </>
  );
};

export default Home;
