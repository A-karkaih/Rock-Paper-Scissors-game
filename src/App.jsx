function App() {
  return (
    <main className="h-screen  flex justify-center items-center w-screen">
      <div className="bg-gray-500 h-[90%] w-[60%] self flex flex-col gap-[5%] ">
        <div className=" mx-auto px-3 py-[5px] mt-3 rounded-lg flex w-[90%] h-[20%]  justify-between border-sky-50 border-[2px]  ">
          <h1 className="   sm:text-3xl text-white ">
            ROCK <br /> PAPER <br /> SCISSORS
          </h1>
          <div className=" sm:w-[120px] rounded-2xl h-[90%] bg-white flex flex-col justify-center items-center">
            <h5 className="text-blue-600 text-sm ">score</h5>
            <h1 className=" text-6xl text-gray-600 ">12</h1>
          </div>
        </div>
        <div className="  mx-auto  rounded-lg flex w-[90%] h-[70%]  border-sky-50 border-[2px]"></div>
      </div>
    </main>
  );
}

export default App;
