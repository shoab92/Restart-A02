import React from 'react';


const InProgressCard1 = ({count}) => {
    return (
        <div className="relative w-1/4 sm:w-[70%] h-[220px]  bg-gradient-to-r from-[#4ee090] to-[#24bc21] rounded-xl  text-white shadow-md flex flex-col items-center justify-center">
        <img
        src="/vector1.png"
        alt="bgx"
        className="w-[250px] h-full object-cover absolute inset-0  pointer-events-none"
        />
        <img
            src="/vector1.png"
            alt="bgx"
            className="absolute right-0 top-0 w-[250px] h-full object-cover pointer-events-none transform scale-x-[-1]"
/>

            <h1 className="text-lg mt-[2rem] font-semibold tracking-wide uppercase opacity-80">
                In-Progress
            </h1>

            <h5 className="text-7xl pb-[4rem] text-center font-bold leading-tight">
                {count}
            </h5>
    </div>
);
};

export default InProgressCard1;
