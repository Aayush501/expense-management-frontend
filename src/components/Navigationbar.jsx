import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import NavbarAccountOptions from './NavbarAccountOptions';

const NavigationBar = ({tab, setTab}) => {

    const username = useSelector((state) => state.user.value.username);
    const chosenTabStyle = {fontWeight : 'bold', color:'white'};

  return (
    <>
        <Navbar bg="primary">
            <Container>
                <Nav className="me-auto">
                    <Nav.Item className='mx-1' onClick={() => {setTab("HOME");}} style={tab==="HOME"? chosenTabStyle : {color:'white'}} >Home</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => {setTab("LEDGER");}} style={tab==="LEDGER"? chosenTabStyle : {color:'white'}}>Ledger</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => {setTab("PORTFOLIO");}} style={tab==="PORTFOLIO"? chosenTabStyle : {color:'white'}}>Portfolio</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => {setTab("BUDGET");}} style={tab==="BUDGET"? chosenTabStyle : {color:'white'}}>Budget</Nav.Item>
                </Nav>
                <NavbarAccountOptions />
            </Container>
        </Navbar>
    </>
  )
}

export default NavigationBar;