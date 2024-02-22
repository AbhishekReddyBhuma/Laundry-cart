import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-conatiner'>
        <NavBar/>
        <Home/>
      </div>

    </>
  )
}

export default App
