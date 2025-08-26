import Die from "./components/Die"
import { useState } from "react"

function App() {

  const [allDice, setAllDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const allNewDice = [];
    for (let i = 0; i < 10; ++i) {
      allNewDice.push(Math.floor(Math.random() * 6) + 1)
    }
    return allNewDice
  }

  function allDiceMapped() {
    return allDice.map((die, index) => <Die key={index} value={die} />)
  }
  console.log(allDiceMapped())

  return (
    <main className="bg-[#f5f5f5] w-full h-full max-h-100 max-w-100 rounded-[10px] flex flex-col items-center justify-center py-10">
      <div id="dice-container">
        {allDiceMapped()}
      </div>

      
    </main>
  )
}

export default App;