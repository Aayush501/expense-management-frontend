import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux"
import {emptyUser} from "../redux/slices/userSlice";
import {emptyBudget} from "../redux/slices/budgetSlice";
import {emptyBanks} from "../redux/slices/banksSlice";
import {emptyDebts} from "../redux/slices/debtsSlice";
import {emptyInvestments} from "../redux/slices/investmentsSlice";
import {emptyLedger} from "../redux/slices/ledgerSlice";
import {emptyReceivables} from "../redux/slices/receivablesSlice";

const NavigationBar = ({tab, setTab}) => {

    const username = useSelector((state) => state.user.value.username);
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
    }

  return (
    <>
        <Navbar bg="primary">
            <Container>
                <Navbar.Brand style={{color:'white', fontWeight:'bolder'}}>{`Hello ${username.toUpperCase()}`}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item className='mx-1' onClick={() => {setTab("HOME");}} style={tab==="HOME"? chosenTabStyle : {color:'white'}} >Home</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => {setTab("LEDGER");}} style={tab==="LEDGER"? chosenTabStyle : {color:'white'}}>Ledger</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => {setTab("PORTFOLIO");}} style={tab==="PORTFOLIO"? chosenTabStyle : {color:'white'}}>Portfolio</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => {setTab("BUDGET");}} style={tab==="BUDGET"? chosenTabStyle : {color:'white'}}>Budget</Nav.Item>
                </Nav>
                <Button variant="light" onClick={() => handleLogout()}>Logout</Button>
            </Container>
        </Navbar>
    </>
  )
}

export default NavigationBar;