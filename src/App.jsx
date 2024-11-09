import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Navbar } from './page/Navbar/Navbar'
import Home from './page/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './page/Portfolio/Portfolio'
import Activity from './page/Activity/Activity'
import Wallet from './page/Wallet/Wallet'
import Withdrawal from './page/Withdrawal/Withdrawal'
import Watchlist from './page/Watchlist/Watchlist'
import PaymentDetails from './page/Payment Details/PaymentDetails'
import Profile from './page/Profile/Profile'
import StockDetails from './page/Stock Details/StockDetails'
import Auth from './page/Auth/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Auth/>
    {false &&  <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/activity" element={<Activity/>} />
        <Route path="/wallet" element={<Wallet/>}/>
        <Route path="/withdrawal" element={<Withdrawal/>}/>
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path="/payment-details" element={<PaymentDetails/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/stock-details" element={<StockDetails/>}/>
      </Routes>
    </div>}
   
      
      {/* <Home/> */}
    </>
  )
}

export default App
