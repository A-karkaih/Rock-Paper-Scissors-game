import React from 'react'

const FirstBoard = ({ icons, handlechoise }) => {
  
  return (
    <div className="  mx-auto  rounded-lg flex w-[90%] h-[60%]  border-sky-50 border-[2px]">
      <div className="  w-full h-full flex flex-col  items-center">
        <div className=" w-[80%] h-[20%] items-center justify-center gap-2 sm:gap-8 flex mb-10 ">
          <div>
            <h4 className=" text-lg sm:text-4xl">Chose you Weapon</h4>
          </div>
        </div>
        <div className="flex gap-8">
          <div
            onClick={() => handlechoise(icons[0].name)}
            className="paper w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] flex justify-center items-center rounded-full bg-white border-[10px] border-blue-600 cursor-pointer"
          >
            <img className="w-[70%]" src={icons[0].icon} alt={icons[0].name} />
          </div>
          <div
            onClick={() => handlechoise(icons[1].name)}
            className="scissors w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] flex justify-center items-center rounded-full bg-white border-[10px] border-yellow-500 cursor-pointer"
          >
            <img className="w-[70%]" src={icons[1].icon} alt={icons[1].name} />
          </div>
        </div>
        <div
          onClick={() => handlechoise(icons[2].name)}
          className="rock w-[70px] h-[70px] sm:w-[120px] sm:h-[120px]  flex justify-center items-center rounded-full bg-white border-[10px] border-red-600 cursor-pointer"
        >
          <img className="w-[70%]" src={icons[2].icon} alt={icons[2].name} />
        </div>
      </div>
    </div>
  );
}

export default FirstBoard;
