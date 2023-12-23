import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={async() => {
        const getdata = await fetch("http://localhost:3300/getusers")
        const response = await getdata.json()
        console.log(response,"response")




      }}>GET REQUEST</button>
    </>
  )
}

export default App
