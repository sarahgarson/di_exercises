import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Interface para o estado do componente
interface AppState {
  count: number;
}

function App() {
  // Usando useState com tipagem
  const [state, setState] = useState<AppState>({ count: 0 })

  // Função para incrementar o contador
  const incrementCount = (): void => {
    setState(prevState => ({ count: prevState.count + 1 }))
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Usando a função incrementCount no evento onClick */}
        <button onClick={incrementCount}>
          count is {state.count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;

