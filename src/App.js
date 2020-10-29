import './App.css'
import Trivia from './Trivia'
import { Button } from '@material-ui/core'
import { useState } from 'react'

function App () {
  const [start, setStart] = useState(false)
  return (
    <div className='App'>
      <div>
        <h1>Welcome to tandem trivia challenge</h1>
        {!start && (
          <>
            <p>Please Click the start Button to Start the game!</p>
            <Button variant='contained' color='primary' onClick={() => setStart(true)}>
              Start
            </Button>
          </>
        )}
        {start && <Trivia />}
      </div>
    </div>
  )
}

export default App
