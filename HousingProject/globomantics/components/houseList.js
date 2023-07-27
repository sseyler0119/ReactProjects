import HouseRow from "./houseRow";
import useHouses from "../hooks/useHouses";
import loadingStatus from "../helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";


const HouseList = () => {
    const {houses, setHouses, loadingState} = useHouses();

    if(loadingState !== loadingStatus.loaded)
        return <LoadingIndicator loadingState={loadingState} />
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
                        <HouseRow key={h.id} house={h}/>
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
