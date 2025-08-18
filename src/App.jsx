import Header from "./components/Header"
import Entry from "./components/Entry"

import Contact from "./components/Contact"
import mrWhiskerson from "/src/assets/cats/mr-whiskerson.png"
import fluffyKins from "/src/assets/cats/fluffykins.png"
import felix from "/src/assets/cats/felix.png"
import pumpkin from "/src/assets/cats/pumpkin.png"

function App() {

  return (
    <>
      {/* <Header /> */}
      {/* <Entry /> */}
      <Contact 
        img={mrWhiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img={fluffyKins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact 
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact 
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </>
  )
}

export default App;