// import './App.css'

function App() {

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

function Header() {
  return (
    <header className="flex items-center justify-between shadow-[0px_0px_20px_-2px_rgba(0,_0,_0,_0.9)] p-[15px]">
      <img src="src/assets/react.svg" alt="React logo" className="w-[55px]" />
      <nav>
        <ul className="flex">
          <li className="mr-[10px] text-[1.1rem]">Pricing</li>
          <li className="mr-[10px] text-[1.1rem]">About</li>
          <li className="mr-[10px] text-[1.1rem]">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main className="p-[20px]">
      <h1 className="text-[2rem] leading-none font-bold">Reasons I am excited to learn React</h1>
      <ol className="list-decimal p-10 pr-0">
          <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
          <li>I am more likely to get a job as a front end developer if I know React</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer className="bg-black p-[10px] text-center mt-auto">
      <small>© 2024 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

export default App
