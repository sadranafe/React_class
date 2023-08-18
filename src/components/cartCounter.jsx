import DUMMY_DATA from "./dummy_data";
import CounterContent from "./counterContent";

const CartCounter = () => {

    return (
        <>
        {
            DUMMY_DATA.map(item =>
                <CounterContent key = {item.id} price = {item.cost} imgLinks = {item.link}/>
            )
        }
        </>
    );
};

export default CartCounter;