import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../src/components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div>
        <CreateTodo></CreateTodo>
      </div>
    </>
  )
}

export default App
