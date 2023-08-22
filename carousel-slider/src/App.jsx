import Carousel from "./components/Carousel";
import SlickCarousel from "./components/SlickCarousel";

const App = () => {
  return (
    <main>
      <h3>Method 1: Create Carousel from Scratch</h3>
      <Carousel />
      <h3>Method 2: Using React Slick</h3>
      <SlickCarousel />
    </main>
  );
};
export default App;
