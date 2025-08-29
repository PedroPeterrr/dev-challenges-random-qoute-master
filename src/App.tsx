import RandomQuote from "./component/RandomQuite"

function App() {
  return (
    <div className="p-3 flex flex-col items-center justify-center min-h-screen">
      <RandomQuote />
      <div  className="text-sm text-center mt-4 text-white">
        Coded by <a 
          href="https://github.com/PedroPeterrr"
          target="_blank"
        >
          Peter James Cabantog</a> | Challenge by
        <a 
          href="https://www.devchallenges.io?ref=challenge" 
          target="_blank"
        >
          devChallenges.io.
        </a>
      </div>
    </div>
  )
}

export default App  
