import { useEffect, useState, useRef } from "react";
import loadingStatus from "../helpers/loadingStatus";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const counter = useRef(0);
  const {get, loadingState} = useGetRequest("/api/houses");

  useEffect(() => {
      const fetchHouses = async () => {
          const houses = await get();
          setHouses(houses);
      }
      fetchHouses();
      counter.current++;
  }, [get]);

  return { houses, setHouses, loadingState };
};

export default useHouses;
