import DUMMY_DATA from "./dummy_data";
import CounterContent from "./counterContent";
import Nav from "./navBar/nav";

const CartCounter = () => {

    return (
        <>
            <Nav/>
            <div className = "w-full flex flex-wrap bg-slate-700 justify-center items-center content-center p-5">
                {
                    DUMMY_DATA.map( item =>
                        <CounterContent key = {item.id} price = {item.cost} imgLinks = {item.link} model = {item.model}/>
                    )
                }
            </div>
        </>
    );
};

export default CartCounter;