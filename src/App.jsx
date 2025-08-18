import Header from "./components/Header"
import Entry from "./components/Entry"

import travelData from "./data/data"

function App() {
  const travelEntries = travelData.map(location => 
    <Entry 
      img={location.img}
      title={location.title}
      country={location.country}
      googleMapsLink={location.googleMapsLink}
      dates={location.dates}
      text={location.text}
    />
  )

  return (
    <>
      <Header />
      <div className="my-3">
        {travelEntries}
      </div>
    </>
  )
}

export default App;