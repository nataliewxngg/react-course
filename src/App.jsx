import Headline from "./components/Headline";
import Language from "./components/Language";
import Letter from "./components/Letter"
import KbKey from "./components/KbKey";
import { useState, useEffect, useRef } from "react";

function App() {
  // Game state ("playing", "won", "lost")
  const [gameState, setGameState] = useState("playing");

  function newGame() { // Start a new game after "new Game" button is clicked
    setGameState("playing");
    setLanguages(prevLanguages =>  prevLanguages.map(lang => ({ ...lang, eliminated: false }))); // Reset languages

    setWrongGuess(false);
    setWrongGuessCount(0);

    setKeyboard(prevKeyboard => prevKeyboard.map(key => ({ ...key, status: "unused" }))); // Reset keyboard

    setLetters(() => { // Fetch new word and reset letters
      const newLetters = [];
      const randomWord = fetch("https://random-word-api.vercel.app/api?words=1");
      randomWord.then(res => res.json())
        .then(data => {
          console.log(data[0]);
          setWord(data[0]);
          for (let i = 0; i < data[0].length; ++i) 
            newLetters.push({ id: i + 1, text: data[0][i].toUpperCase(), status: "unknown" })
        });
      return newLetters;
    });
  }

  // Fetch a random word from API on first render
  const didFetch = useRef(false);
  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    
    const newLetters = [];
    const randomWord = fetch("https://random-word-api.vercel.app/api?words=1");
    randomWord.then(res =>
      res.json()).then(data => {
        setWord(data[0]);
        for (let i = 0; i < data[0].length; ++i)
          newLetters.push({ id: i + 1, text: data[0][i].toUpperCase(), status: "unknown" })
        setLetters(newLetters);
      });
    return () => setLetters([]);
  }, []);

  // Languages
  const [languages, setLanguages] = useState([
    { name: "HTML", color: "#e2680f", eliminated: false, textCol: "#f9f4da" },
    { name: "CSS", color: "#328af1", eliminated: false, textCol: "#f9f4da" },
    { name: "Javascript", color: "#f4eb13", eliminated: false, textCol: "#1e1e1e" },
    { name: "React", color: "#2ed3e9", eliminated: false, textCol: "#1e1e1e" },
    { name: "Typescript", color: "#298ec6", eliminated: false, textCol: "#f9f4da" },
    { name: "Node.js", color: "#599137", eliminated: false, textCol: "#f9f4da" },
    { name: "Python", color: "#ffd742", eliminated: false, textCol: "#1e1e1e" },
    { name: "Ruby", color: "#d02b2b", eliminated: false, textCol: "#f9f4da" },
    { name: "Assembly", color: "#2d519f", eliminated: false, textCol: "#f9f4da" }
  ]);
  const [wrongGuessCount, setWrongGuessCount] = useState(0);
  const [wrongGuess, setWrongGuess] = useState(false);

  function mappedLanguages() {
    return languages.map(lang => (
      <Language
        key={lang.name}
        name={lang.name}
        color={lang.color}
        eliminated={lang.eliminated}
        textCol={lang.textCol}
      />
    ))
  }

  // Letters
  const [letters, setLetters] = useState([]);
  const [word, setWord] = useState(null);

  function mappedLetters() {
    return letters.map(letter => (
      <Letter key={letter.id} text={letter.status==="unknown" ? "" : letter.text} status={letter.status} />
    ))
  }

  // Keyboard
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  const [keyboard, setKeyboard] = useState(() => {
    const arr = [];  
    for (let i = 0; i < alphabet.length; ++i) 
      arr.push({ id: i + 1, text: alphabet[i], status: "unused" })
    return arr;
  });

  function mappedKeyboard() {
    return keyboard.map(kbKey => (
      <KbKey
        key={kbKey.id}
        text={kbKey.text}
        status={kbKey.status}
        onClick={() => handleClick(kbKey)}
      />
    ))
  }

  function handleClick(kbKey) {
    if (gameState !== "playing" || kbKey.status !== "unused") return;

    let correctGuess = word.toUpperCase().includes(kbKey.text);
    setWrongGuess(!correctGuess);

    setKeyboard(prevKeyboard => {
      const newKeyboard = [];
      prevKeyboard.map(key => {
        if (key.id === kbKey.id) {
          if (word.toUpperCase().includes(key.text)) {
            newKeyboard.push({ id: key.id, text: key.text, status: "correct" }); // Set key status on correct guess

            // Update letters state
            setLetters(prevLetters => {
              const newLetters = [];
              prevLetters.map(letter => {
                letter.text === key.text ? newLetters.push({ ...letter, status: "known" }) : newLetters.push(letter);
              })
              if (newLetters.every(letter => letter.status === "known")) setGameState("won");
              return newLetters;
            });

          } else 
            newKeyboard.push({ id: key.id, text: key.text, status: "incorrect" }); // Set key status on incorrect guess
        }
        else newKeyboard.push(key); // Unchanged keys
      });

      return newKeyboard;
    });

    if (!correctGuess) { // Update languages state
      setLanguages(prevLanguages => {
        const newLanguages = [...prevLanguages];
        newLanguages[wrongGuessCount].eliminated = true;
        return newLanguages;
      })
      setWrongGuessCount(prevCount => prevCount + 1);
    }
  }

  // Check for game over (lost)
  useEffect(() => {
    if (wrongGuessCount === languages.length - 1) {
      setGameState("lost");
      setLetters(prevLetters => prevLetters.map(letter => (
        letter.status === "unknown" ? { ...letter, status: "revealed"} : letter
      )));
    }
  }, [languages])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-9">
      <Headline 
        gameState={gameState} 
        wrongGuess={wrongGuess} 
        removedLanguage={wrongGuessCount>0 ? languages[wrongGuessCount-1].name : 0}
      />

      <div className="flex w-[253.5px] gap-[1.5px] flex-wrap justify-center">
        {mappedLanguages()}
      </div>

      <div className="flex gap-0.5 flex-wrap justify-center h-10">
        {mappedLetters()}
      </div>

      <div className="flex gap-1.5 flex-wrap justify-center w-120">
        {mappedKeyboard()}
      </div>

      <button
        className={`bg-[#11b5e5] rounded-sm border-1 border-[#d7d7d7] w-[228px] h-10 ${gameState !== "playing" ? "" : "invisible"} cursor-pointer font-semibold`}
        onClick={newGame}
      >New Game</button>
    </main>
  )
}

export default App;