import { useState } from "react";

const CounterContent = ({price , imgLinks , model}) => {
    const [counter , setCounter] = useState(0)

    const btnReducerHandler = () => {
        if(counter <= 0) {
            setCounter(0)
        } else{
            setCounter(counter - 1)
        }
    }

    const btnIncreaseHandler = () => {
        if(counter >= 5) {
            setCounter(1)

        } else{
            setCounter(counter + 1)
        }
    }

    return (
        <>
            <div className="w-80 m-2 overflow-hidden rounded-2xl">
                <div>
                    <img src = {imgLinks} alt="mohammad sadra nafe" className = "w-full h-full" />
                </div>

                <div className="bg-blue-500 p-3">
                    <div className = "flex items-center flex-wrap justify-between">
                        <p>{model}</p>
                        <p className="w-fit px-3 rounded-lg bg-orange-300">
                            {price}
                            <span className = {counter !== 0 ? "inline-block" : "hidden"}>
                                <i className='bx bx-x'></i>
                                <span>{`${counter} = ${Number(price) * counter} $`}</span>
                            </span>
                        </p>
                    </div>

                    <hr className="w-full my-2 mt-3" />

                    <div className="text-2xl flex flex-wrap items-center">
                        <button className="text-2xl m-1 p-1 pb-0 disabled:text-slate-300" onClick = {btnReducerHandler} >
                            <i className="bx bx-left-arrow-circle"></i>
                        </button>

                        <input type = "number" />

                        <button className="text-2xl m-1 p-1 pb-0" onClick = {btnIncreaseHandler}>
                            <i className="bx bx-right-arrow-circle"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterContent;