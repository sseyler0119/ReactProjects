import { FeaturedProducts, Hero } from "../components";
import { customeFetch } from "../utils";

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customeFetch(url);
  const products = response.data.data;
  return { products };
}

const Landing = () => {

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
export default Landing