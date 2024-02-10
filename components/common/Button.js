import React from "react";

const CustomButton = ({ onClick, children }) => {
  return (
    <>
      <div className="flex justify-center max-sm:mb-10">
        <div className="border-b border-solid pb-1 border-[#14413E] ">
          <button
            type="button"
            onClick={onClick}
            className="py-4 px-11 text-2xl text-[#14413E] border-solid bg-white border border-[#14413E] hover:bg-[#14413E] hover:text-white max-sm:py-2 max-sm:px-8 max-sm:text-[20px]"
          >
            {children}
          </button>
        </div>
      </div>
    </>
  );
};

export const OneBedRoomCustomButton = ({ onClick, children }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="border-b border-solid pb-1 border-[#14413E] ">
          <button
            type="button"
            onClick={onClick}
            className="py-4 px-11 text-2xl text-[#14413E] border-solid bg-white border border-[#14413E] hover:bg-[#14413E] hover:text-white max-sm:py-1 max-sm:px-1 max-sm:w-[100px] max-sm:text-[20px] max-lg:p-1 max-lg:w-[150px]"
          >
            {children}
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomButton;
