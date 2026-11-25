import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { texts } from '../application-texts/ApplicationTexts';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(location.pathname === '/portfolio'){
      navigate('investments');
    }
  }, [location]);

  return (
    <>
      <Container fluid className='mt-3'>
        <Row className='g-3'>
          <Col xs={2}>
            <Nav variant="pills" defaultActiveKey="investments" className="flex-column">
              <Nav.Link eventKey='investments' as={Link} to='investments' >{texts.portfolioPage.investments}</Nav.Link>
              <Nav.Link eventKey='debts' as={Link} to='debts' >{texts.portfolioPage.debts}</Nav.Link>
              <Nav.Link eventKey='receivables' as={Link} to='receivables' >{texts.portfolioPage.receivables}</Nav.Link>
            </Nav>
          </Col>
          <Col xs={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Portfolio;