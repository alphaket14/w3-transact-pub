import { Navbar, Welcome, Footer, Services, Transactions } from './components'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'

const App = () => {
  //const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
