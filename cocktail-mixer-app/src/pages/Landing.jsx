import { useLoaderData } from "react-router-dom"
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from '../components/SearchForm';
import { useQuery } from "@tanstack/react-query";

// don't forget to add the https:// or the 
const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery =(searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    }
  }
}

/* Note: this function is not a hook!
 When it is imported in App.jsx, it will need an alias since there
  can be only one 'loader'  */
export const loader = 
(queryClient) =>  
  async ({request}) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || ''; 
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return {searchTerm}
  }

const Landing = () => {
  //const {searchTerm, drinks} = useLoaderData();
  const {searchTerm} = useLoaderData();
  const {data: drinks} = useQuery(searchCocktailsQuery(searchTerm));
  return (
    <>
      <SearchForm searchTerm={searchTerm}/>
      <CocktailList drinks={drinks} />

    </>
  )
}
export default Landing