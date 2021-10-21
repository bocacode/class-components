import { useState } from 'react'
import Counter2 from './components/Counter2'
import './App.css'

function App() {
  const [showCount, setShowCount] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setShowCount(!showCount)}>SHOW/HIDE</button>
      {showCount && <Counter2 name={"Matt"} />}
    </div>
  )
}

export default App
