import Header from "./components/Header"
import Entry from "./components/Entry"

import Contact from "./components/Contact"

function App() {

  return (
    <>
      {/* <Header /> */}
      {/* <Entry /> */}
      <Contact 
        img="/cats/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img="/cats/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact 
        img="/cats/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact 
        img="/cats/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </>
  )
}

export default App;