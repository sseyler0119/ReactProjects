import { useLoaderData } from "react-router-dom"
import axios from "axios";
import CocktailList from "../components/CocktailList";

// don't forget to add the https:// or the 
const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

/* Note: this function is not a hook!
 When it is imported in App.jsx, it will need an alias since there
  can be only one 'loader'  */
export const loader = async () => {
  const searchTerm = '';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return {drinks: response.data.drinks, searchTerm}
}

const Landing = () => {
  const {searchTerm, drinks} = useLoaderData();

  return (
    <>
      <CocktailList drinks={drinks} />

    </>
  )
}
export default Landing