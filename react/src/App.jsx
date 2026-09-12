import Login, { Profile, Post } from './components/UserComponents'
import './App.css'
import Call from './components/FunctionCall'
import State from './components/State'
import Toggle from './components/Toggle'
import MultipleConditions from './components/MultipleConditions'
import Props from './components/Props'
import User from './components/User'
import Wrapper from './components/Wrapper'

function App() {

  return (
    <>
      {/* <Login />
      <Post />
      <Profile />
      <Call/> */}
      {/* <State/> */}
      {/* <Toggle/> */}
      {/* <MultipleConditions/> */}
          {/* <Props name="sahil chettri" age={22} email={"Sahil@test.com"} /> */}
          {/* <User  name ="Sahil"/>
          <User  name ="Priyanka"/>
          <User/> */}

        <Wrapper><h1> hi React devs</h1>
           </Wrapper>


  <Wrapper><h1> is react is best</h1>
           </Wrapper>
    </>
  )
}

export default App