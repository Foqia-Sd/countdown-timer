import React, {useState, useEffect } from "react"

//Defining Functionally:
const CountdownTimer: React.FC = () => {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime > 0 ) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1 )
      }, 1000)
    }

    else if (remainingTime === 0) {
      setIsRunning(false)
    }

    return () => clearInterval(timer);

  }, [isRunning, remainingTime])


  //Handling Conditions
  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time)
      setIsRunning(true)
    }
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setRemainingTime(0)
    setTime(0)
  }

  return (

    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="bg-black rounded-full  border-8 border-pink-600 p-6 
      w-[450px] h-[310px] justify-between hover:scale-105 trasition duration-300 ease-in-out">

      <h1 className="text-2xl font-extrabold uppercase mb-6 text-white text-center">Countdown Timer</h1>
      <input 
      type="number"
      className="border-2 border-purple-600 bg-transparent p-2 mb-6 text-blue-400 text-lg rounded ml-16 rounded-xl"
      placeholder="Enter Time in Seconds"
      value={time > 0 ? time : ""}
      onChange={(e) => setTime(Number(e.target.value))}
      />

      <div className="text-xl font-semibold uppercase mb-6 text-white ml-16">
        {remainingTime} seconds remaining
      </div>

      <div>
        <button
        onClick={handleStart} 
        className="text-white px-5 py-3 rounded-lg font-normal 
        bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 mr-3 ml-16"
        >
          Start

        </button>

        <button
        onClick={handlePause} 
        className="text-white px-5 py-3 rounded-lg font-normal 
        bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 mr-3"
        >
          Pause

        </button>

        <button
        onClick={handleReset} 
        className="text-white px-5 py-3 rounded-lg font-normal 
        bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
        >
          Reset

        </button>

      </div>

    </div>
    </div>
  )

}

export default CountdownTimer;