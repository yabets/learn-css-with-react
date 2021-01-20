import Features from "./Features";
import Plans from "./Plans";
import ProductOverview from "./ProductOverview";

const Home = () => {
  return (
    <main>
      <ProductOverview />
      <Plans />
      <Features />
    </main>
  );
};

export default Home;
