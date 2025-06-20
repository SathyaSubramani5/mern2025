import React from 'react'
import Child from './component/Child.jsx'
import Home from './pages/Home.jsx'
import Skill from './pages/Skill.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
const App = () => {
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

export default App