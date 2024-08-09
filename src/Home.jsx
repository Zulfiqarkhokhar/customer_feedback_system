import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import { useEffect, useState } from "react";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");

      console.log(res);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <HeroSection></HeroSection>
      <Products products={products}></Products>
    </>
  );
}
export default Home;
