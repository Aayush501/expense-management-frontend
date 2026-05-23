// import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
// import AppContext from '../AppContext';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {useDispatch} from "react-redux"
import {emptyUser} from "../redux/slices/userSlice";
import {emptyBudget} from "../redux/slices/budgetSlice";
import {emptyBanks} from "../redux/slices/banksSlice";
import {emptyDebts} from "../redux/slices/debtsSlice";
import {emptyInvestments} from "../redux/slices/investmentsSlice";
import {emptyLedger} from "../redux/slices/ledgerSlice";
import {emptyReceivables} from "../redux/slices/receivablesSlice";
import {emptyTotals} from "../redux/slices/totalSlice";

const NavigationBar = ({setTab}) => {

//   const {username} = useContext(AppContext);
    const username = useSelector((state) => state.user.name);
    const [chosenTab,setChosenTab] = useState(1);
    const chosenTabStyle = {fontWeight : 'bold', color:'white'};
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(emptyUser());
        dispatch(emptyBanks());
        dispatch(emptyBudget());
        dispatch(emptyDebts());
        dispatch(emptyInvestments());
        dispatch(emptyLedger());
        dispatch(emptyReceivables());
        dispatch(emptyTotals());
    }

  return (
    <>
        <Navbar bg="primary">
            <Container>
                <Navbar.Brand style={{color:'white', fontWeight:'bolder'}}>{`Hello ${username.toUpperCase()}`}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item className='mx-1' onClick={() => {setTab("HOME"); setChosenTab(1)}} style={chosenTab===1? chosenTabStyle : {color:'white'}} >Home</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => {setTab("LEDGER"); setChosenTab(2)}} style={chosenTab===2? chosenTabStyle : {color:'white'}}>Ledger</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => {setTab("PORTFOLIO"); setChosenTab(3)}} style={chosenTab===3? chosenTabStyle : {color:'white'}}>Portfolio</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => {setTab("BUDGET"); setChosenTab(4)}} style={chosenTab===4? chosenTabStyle : {color:'white'}}>Budget</Nav.Item>
                </Nav>
                <Button variant="light" onClick={() => handleLogout()}>Logout</Button>
            </Container>
        </Navbar>
    </>
  )
}

export default NavigationBar;