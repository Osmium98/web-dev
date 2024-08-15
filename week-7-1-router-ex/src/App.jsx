import {Suspense, lazy} from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'

const Dashboard = lazy(()=> import('./component/Dashboard'));
const Landing = lazy(()=> import('./component/Landing'));

function App() {
  

  return (
    <div >
    
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path='/dashboard' element={<Suspense><Dashboard/></Suspense>} />
          <Route path='/' element={<Suspense><Landing/></Suspense>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
      <div>
        <button onClick={() => {
          navigate("/")
        }}>Landing</button>

        <button onClick={() => {
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
  </div>
}

export default App
