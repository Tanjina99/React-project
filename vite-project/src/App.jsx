import { useState } from "react"
import ProgramsList from "./components/ProgramsList"

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <ProgramsList></ProgramsList>
      
    </>
  )
}

export default App
