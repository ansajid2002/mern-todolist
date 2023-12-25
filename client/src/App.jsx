import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alltasks from './components/Alltasks'

function App() {

  return (
    <>
      <h1 className="text-center text-4xl py-2 font-bold bg-gray-200">To Do List</h1>
      <Alltasks/>
    

    </>
  )
}

export default App

export const Adminurl="http://localhost:3300"


{/* <button onClick={async() => {
        const getdata = await fetch("http://localhost:3300/getusers")
        const response = await getdata.json()
        console.log(response,"response")
      }}>GET REQUEST</button> */}