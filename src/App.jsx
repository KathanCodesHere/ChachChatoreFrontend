import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Chacha from './components/ChachaChatoreHome'
import Production from './components/ProductionHome'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/chacha' element={<Chacha/>}></Route>
        <Route path='/production' element={<Production/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App