import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContestCarousel from "./components/ContestCarousel";
import Categories from "./components/Categories";
import Winners from "./components/Winners";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
function App(){
  return (
    <>
    <Navbar />
    <Hero />
    <ContestCarousel />
    <Categories/>
    <Winners />
    <Pricing/>
    <Footer/>
    </>
  );
}
export default App;