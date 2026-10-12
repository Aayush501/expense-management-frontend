import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarAccountOptions from './NavbarAccountOptions';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const chosenTabStyle = {fontWeight : 'bold', color:'white'};

  return (
    <>
        <Navbar bg="primary">
            <Container>
                <Nav className="me-auto">
                    <Nav.Item className='mx-1' onClick={() => navigate('/')} style={currentPath==='/'? chosenTabStyle : {color:'white'}} >Home</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => navigate('/ledger')} style={currentPath==='/ledger'? chosenTabStyle : {color:'white'}}>Ledger</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => navigate('/portfolio')} style={currentPath==='/portfolio'? chosenTabStyle : {color:'white'}}>Portfolio</Nav.Item>
                    <Nav.Item className='mx-1' onClick={() => navigate('/budget')} style={currentPath==='/budget'? chosenTabStyle : {color:'white'}}>Budget</Nav.Item>
                </Nav>
                <NavbarAccountOptions />
            </Container>
        </Navbar>
    </>
  )
}

export default NavigationBar;