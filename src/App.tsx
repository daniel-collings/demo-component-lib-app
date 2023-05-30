import { ChangeEvent, useState } from 'react'
import './App.css'
import {TimePicker} from 'boltviz-components-lib'
import 'boltviz-components-lib/dist/esm/index.css'

function App() {
  const [time, setTime] = useState<string>("00:00")

  return (
    <>
      <h1>{time}</h1>
      <div className="card">
          <TimePicker label="Time: " onChange={(e: ChangeEvent<HTMLInputElement>) => setTime(e.target.value)} value={time} />
      </div>
    </>
  )
}

export default App
