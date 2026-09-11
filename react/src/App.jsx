import Login, { Profile, Post } from './UserComponents'
import './App.css'
import Call from './FunctionCall'

function App() {
  return (
    <>
      <Login />
      <Post />
      <Profile />
      <Call/>
    </>
  )
}

export default App