import Headline from "./components/Headline";
import Language from "./components/Language";
import Letter from "./components/Letter"
import KbKey from "./components/KbKey";
import { useState, useEffect, useRef } from "react";

function App() {

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
      <Letter key={letter.id} text={letter.status==="known" ? letter.text : ""} />
    ))
  }

    // Random word
  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    const newLetters = [];    
    const randomWord = fetch("https://random-word-api.herokuapp.com/word");
    randomWord.then(res => res.json())
      .then(data => {
        console.log(data[0]);
        setWord(data[0]);
        for (let i = 0; i < data[0].length; ++i) {
          newLetters.push({ id: i + 1, text: data[0][i].toUpperCase(), status: "unknown" })
        }
        setLetters(newLetters);
      });
    return () => {
      setLetters([]);
    }
  }, []);

  // Keyboard
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const [keyboard, setKeyboard] = useState(() => {
    const arr = [];  
    for (let i = 0; i < alphabet.length; ++i) {
      arr.push({ id: i + 1, text: alphabet[i], status: "unused" })
    }
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
    setKeyboard(prevKeyboard => {
      const newKeyboard = [];
      prevKeyboard.map(key => {
        if (key.id === kbKey.id) {
          word.toUpperCase().includes(key.text)
            ? newKeyboard.push({ id: key.id, text: key.text, status: "correct" })
            : newKeyboard.push({ id: key.id, text: key.text, status: "incorrect" });
        } 
        else {
          newKeyboard.push(key);
        }
      })
      return newKeyboard;
    });
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-9">
      <Headline />

      <div className="flex w-[253.5px] gap-[1.5px] flex-wrap justify-center">
        {mappedLanguages()}
      </div>

      <div className="flex gap-0.5 flex-wrap justify-center">
        {mappedLetters()}
      </div>

      <div className="flex gap-1.5 flex-wrap justify-center w-120">
        {mappedKeyboard()}
      </div>
    </main>
  )
}

export default App;