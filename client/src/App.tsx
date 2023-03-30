import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GameScene from './components/GameScene';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <GameScene />
    </div>
  )
}

export default App
