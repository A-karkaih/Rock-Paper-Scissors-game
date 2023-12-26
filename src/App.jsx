import { useEffect, useState } from "react";
import FirstBoard from "./components/FirstBorad";
import SecondBord from "./components/SecondBord";

function App() {
  const [choised, setChoised] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState();
  const [player1, setPlayer1] = useState();
  const [computer, setComputer] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const icons = [
    {
      icon: "images//icon-paper.svg",
      name: "paper",
    },
    {
      icon: "images/icon-scissors.svg",
      name: "scissors",
    },
    {
      icon: "images/icon-rock.svg",
      name: "rock",
    },
  ];

  
    const handleClick = () => {
      setShowPopup(true);
    };

    const handleClosePopup = () => {
      setShowPopup(false);
    };
  const choisefunction = () => {
    setChoised(false);
  }
  

  const handlechoise = (playerChoice) => {
    const random = Math.floor(Math.random() * 3);
    setComputer(random);
    switch (playerChoice) {
      case "paper":
        setPlayer1(0);
        break;
      case "scissors":
        setPlayer1(1);
        break;
      case "rock":
        setPlayer1(2);
        break;
      default:
        return;
    }
    const computerChoice = icons[random].name;
    setChoised(true);
    let result;
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "You win!";
      setScore(score + 1);
    
    } else {
      result = "You lose!";
    }
    console.log(result);
    setResults(result);
  };
  
  return (
    <main className="h-screen  flex justify-center items-center w-screen">
      <div className=" h-[90%] w-[60%] self flex flex-col gap-[3%] ">
        {/** Header */}
        <div className=" mx-auto px-3 py-[5px] mt-3 rounded-lg flex w-[90%] h-[20%]  justify-between border-sky-50 border-[2px]  ">
          <h1 className="   sm:text-3xl text-white ">
            ROCK <br /> PAPER <br /> SCISSORS
          </h1>
          <div className="w-[50%] sm:w-[120px] rounded-2xl h-[90%] bg-white flex flex-col justify-center items-center">
            <h5 className="text-blue-600 text-sm ">score</h5>
            <h1 className=" text-6xl text-gray-600 ">{score}</h1>
          </div>
        </div>

        {/** Board */}
        {!choised ? (
          <FirstBoard handlechoise={handlechoise} icons={icons} />
        ) : (
          <SecondBord
            choisefunction={choisefunction}
            results={results}
            icons={icons}
            player1={player1}
            computer={computer}
          />
        )}

        {/** buttons */}
        <div className="mx-auto  flex items-center justify-between rounded-md  w-[80%] h-[50px]">
          <button className="hidden bg-black px-4 rounded-lg h-[43px]">
            Hard Mode
          </button>
          <button
            onClick={handleClick}
            className="bg-black px-4 rounded-lg  h-[43px] "
          >
            Rules
          </button>
          {showPopup && (
            <div className="fixed top-4 left-6 w-[300px]  sm:w-full h-full flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg relative">
                <span
                
                  className="absolute top-2 right-2 text-gray-600 cursor-pointer"
                  onClick={handleClosePopup}
                >
                  <img src="/images/icon-close.svg" alt="icon-close" />
                </span>
                <span
                  style={{ color: "Black" }}
                  className="absolute top-2 left-2 text-gray-600 cursor-pointer"
                  onClick={handleClosePopup}
                >
                  Rules
                </span>
                <img
                  src="images/image-rules.svg" // Replace with your image source
                  alt="image-rules"
                  className="sm:h-[300px] sm:w-[300px] mx-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
