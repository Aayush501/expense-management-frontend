import React, { useState } from 'react'
import Navbar from '../components/Navigationbar';
import '../App.css';
import UserDashBoardHome from './UserDashBoardHome';
import Ledger from './Ledger';
import Portfolio from './Portfolio';
import Budget from './Budget';

const UserDashboard = () => {

    const [tab, setTab] = useState("HOME");
    
  return (
    <>
        <div className='navigation' >
            <Navbar setTab={setTab} />
        </div>
        <div>
        {
            tab==="HOME"? <UserDashBoardHome/> 
            :tab==="LEDGER"? <Ledger/>
            :tab==="PORTFOLIO"? <Portfolio/>
            : <Budget/>
        }
        </div>
    </>
  )
}

export default UserDashboard