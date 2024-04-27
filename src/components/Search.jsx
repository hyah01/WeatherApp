import { useEffect, useRef, useState } from "react";

const Carousel = (props) => {

    return (
        <div className="relative w-[50px] h-[50px] box-border rounded-[50px] border-solid border-[4px] p-[5px] transition-all
                        flex justify-center flex-col">
            <input className="absolute top-0 left-0 w-full h-[42px] leading-[30px] outline-none border-none font-[2rem] rounded-[20px] py-0 px-[20px] m-0 "/>
        </div>
    )
}

export default Carousel;