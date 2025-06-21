import React from 'react'
import Child from './component/Child.jsx'
import Home from './pages/Home.jsx'
import Skill from './pages/Skill.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import {Route,Routes} from 'react-router-dom';
const App = () => {
  var array = ["sathya","charu","mathi"];
  var user = {user:"viky",password:"123456"}
  return (
    <div>
      <Child/>
      <Home/>
      <About/>
      <Skill/>
      <Contact/>


    </div>
  )
}
<Routes>
  <Route path='/' element={<Hom<e items = {array} user={login} />} />
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='Skill' element={<Skill/>}/>
  <Route path='counter' element={<Counter/>}/>
  <Route path='login' element={<Login/>}/>
  <Route path='hooks' element={<Hooks/>}/>
  <Route path='state' element={<State/>}/>
  <Route path='about' element={<About/>}/>
</Routes>
 
export default App