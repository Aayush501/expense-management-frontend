import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchBanks } from '../redux/slices/banksSlice';

const UserDashBoardHome = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBanks({}));
  }, []);

  return (
    <>
    <Navbar expand="sm" className="bg-body-tertiary my-3 mx-5">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/balanceSummary'>Balance Summary</Nav.Link>
            <Nav.Link as={Link} to='/ledgerSummary'>Ledger Summary</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
};

export default UserDashBoardHome;