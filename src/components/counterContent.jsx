const CounterContent = () => {
    return (
        <>
            <div className="w-80 m-2 overflow-hidden rounded-2xl">
                <div className="bg-orange-600 w-full">
                    <img src="https://fastly.picsum.photos/id/819/536/354.jpg?hmac=YBqw90sWO_bDRiOw7qgVjhPYnCkNhqqbM0zy-QPlEN4" alt="mohammad sadra nafe" className="w-full" />
                </div>

                <div className="bg-emerald-600 p-3">
                    <div>
                        <p className="w-fit px-3 rounded-lg bg-orange-300">
                            <span className = "inline-block">
                                <i className='bx bx-x'></i>
                            </span>
                        </p>
                    </div>

                    <hr className="w-full my-2 mt-3" />

                    <div className="text-2xl flex flex-wrap items-center">
                        <button className="text-2xl m-1 p-1 pb-0 disabled:text-slate-300" >
                            <i className="bx bx-left-arrow-circle"></i>
                        </button>

                        <button className="text-2xl m-1 p-1 pb-0">
                            <i className="bx bx-right-arrow-circle"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterContent;