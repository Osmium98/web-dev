import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid grid-cols-3'>
    <RevenueCard title={"Amount pEnding"} amount={"65,454"} orderCount={13}/>
    </div>
      
    </>
  )
}

export default App
