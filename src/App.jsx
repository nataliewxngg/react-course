import Headline from "./components/Headline";
import Language from "./components/Language";
import { useState } from "react";

function App() {

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

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-9">
      <Headline />
      <div className="flex w-[253.5px] gap-[1.5px] flex-wrap justify-center">
        {mappedLanguages()}
      </div>
    </main>
  )
}

export default App;