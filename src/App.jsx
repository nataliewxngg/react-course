import Die from "./components/Die"
import { useState, useRef, useEffect } from "react"
import { nanoid } from "nanoid"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function App() {

  const [allDice, setAllDice] = useState(() => generateAllNewDice());

  function generateAllNewDice() {
    console.log("generateAllNewDice was called!")
    const allNewDice = [];
    for (let i = 0; i < 10; ++i) {
      allNewDice.push({
        // value: Math.floor(Math.random() * 6) + 1,
        value: 5,
        isHeld: false,
        id: nanoid()
      });
    }
    return allNewDice
  }

  function allDiceMapped() {
    return allDice.map((die) =>
      <Die
        key={die.id}
        id={die.id}
        value={die.value}
        isHeld={die.isHeld}
        hold={hold}
      />
    )
  }

  function rollDice() {
    setAllDice(prev => {
      if (gameWon()) return generateAllNewDice();
      return prev.map(die => {
        return die.isHeld 
          ? die 
          : {
            ...die,
            value: Math.floor(Math.random() * 6) + 1
          }
      })
    }); 
  }

  const hold = (id) => {
    setAllDice(prev => {
      return prev.map(die => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld
          }
        }
        return die
      })
    })
  }

  // Game won logic
  const gameWon = () => {
    const firstValue = allDice[0].value;
    for (let i = 1; i < allDice.length; ++i) {
      if (allDice[i].value !== firstValue || !allDice[i].isHeld) return false;
    }
    return true;
  }
  console.log(gameWon());

  // for confetti effect
  const {width, height} = useWindowSize()

  // Focus on "New Game" button on gameover
  const newGameBtnRef = useRef(null);
  useEffect(() => {
    if (gameWon()) {
      console.log(newGameBtnRef);
      newGameBtnRef.current.focus();
    }
  }, [gameWon()])

  return (
    <main className="bg-[#f5f5f5] w-full h-full max-h-100 max-w-100 rounded-[10px] flex flex-col items-center justify-end gap-8 py-10">
      {gameWon() && <Confetti width={width} height={height}/>}
      <div aria-live="polite">
        {gameWon() && <p className="sr-only">Congratulations! You won the game!</p>}
      </div>

      <header className="text-center px-10">
        <h1 className="text-3xl font-bold">Tenzies</h1>
        <p className="leading-5 pt-1">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </header>

      <div id="dice-container">
        {allDiceMapped()}
      </div>

      <button className="text-white bg-[#5035ff] px-8 py-2 rounded-sm font-bold text-[1.3rem]
        shadow-[0px_3.2px_7.68px_0px_#0000002E] cursor-pointer" onClick={rollDice} ref={newGameBtnRef}>{gameWon() ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App;