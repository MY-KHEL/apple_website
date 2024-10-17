import Hero from "./components/Hero"
import Highlight from "./components/Highlghts"
import Navbar from "./components/Navbar"

function App() {
 
  return (
    <>
   <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlight/>
   </main>
    </>
  )
}

export default App
