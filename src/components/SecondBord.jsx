import React from "react";

const SecondBord = ({ icons, choisefunction, results ,player1 , computer}) => {
  return (
    <div className="mx-auto rounded-lg flex w-[90%] h-[60%] border-sky-50 border-[2px]">
      <div className="w-full h-full flex flex-col  items-center ">
        <div className=" w-[80%] h-[20%] items-center gap-2 sm:gap-8 flex mb-10 ">
          <div>
            <button
              onClick={choisefunction}
              className=" bg-slate-300 text-black px-4 rounded-lg  h-[43px]"
            >
              Again
            </button>
          </div>
          <div>
            <h4 className=" text-lg sm:text-4xl">Result :{results}</h4>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
          <div>
            <h4 className="text-white">Your Choice</h4>
            <div className="paper w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] flex justify-center items-center rounded-full bg-white border-[10px] border-blue-600">
              <img
                className="w-[70%]"
                src={icons[player1].icon}
                alt={icons[player1].name}
              />
            </div>
          </div>
          <div>
            <h4 className="text-white">Computer Choice</h4>
            <div className="scissors w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] flex justify-center items-center rounded-full bg-white border-[10px] border-yellow-500">
              <img
                className="w-[70%]"
                src={icons[computer].icon}
                alt={icons[computer].name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBord;
