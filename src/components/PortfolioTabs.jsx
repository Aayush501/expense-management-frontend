import {investments, debts, receivables} from "../constants/PortfolioTabOptions";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const PortfolioTabs = ({name}) => {
    const options = name==="INVESTMENTS"? investments :name==="DEBTS"? debts : receivables;

    return (
        <>
            <div>
                <Navbar expand="sm" className="bg-body-tertiary my-3 mx-5">
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" variant='underline' defaultActiveKey='optionOne'>
                            <Nav.Link as={Link} to={options[1].toLowerCase()} eventKey='optionOne'>{options[1]}</Nav.Link>
                            <Nav.Link as={Link} to={options[2].toLowerCase()} eventKey='optionTwo'>{options[2]}</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Outlet />
            </div>
        </>
    )
}

export default PortfolioTabs;