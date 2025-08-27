import Die from "./components/Die"
import { useState } from "react"
import { nanoid } from "nanoid"

function App() {

  const [allDice, setAllDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const allNewDice = [];
    for (let i = 0; i < 10; ++i) {
      allNewDice.push({
        value: Math.floor(Math.random() * 6) + 1,
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

  return (
    <main className="bg-[#f5f5f5] w-full h-full max-h-100 max-w-100 rounded-[10px] flex flex-col items-center justify-center gap-8 py-10">
      <header className="text-center px-10">
        <h1 className="text-3xl font-bold">Tenzies</h1>
        <p className="leading-5 pt-1">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </header>

      <div id="dice-container">
        {allDiceMapped()}
      </div>

      <button className="text-white bg-[#5035ff] w-30 h-12 rounded-sm font-bold text-[1.3rem]
        shadow-[0px_3.2px_7.68px_0px_#0000002E] cursor-pointer" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App;