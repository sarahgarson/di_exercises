import { useState } from 'react'

import './App.css'
import PostList from './component/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Hi This is a Title</h1>
     <PostList />
    </>
  )
}

export default App
