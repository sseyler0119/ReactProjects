import HouseRow from "./houseRow";
import React, { useEffect, useState } from "react";


const HouseList = () => {
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("api/houses");
            const houses = await response.json();
            setHouses(houses);
        }
        fetchHouses();
    });
    // const [counter, setCounter] = useState(0);
    // const buttonClicked = () =>  setCounter(current => counter + 1);

    const addHouse = () => {
        setHouses([
            ...houses, // extract all elements from houses array and put in the new one we are now defining
            { // new element to be added
                id: 3,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000,
            },
        ]);
    }

    return (
        <>
            {/* {counter} */}
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => (
                        <HouseRow key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
};

export default HouseList;
