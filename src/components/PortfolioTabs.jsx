import { useEffect } from "react";
import {investments, debts, receivables} from "../constants/PortfolioTabOptions";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const PortfolioTabs = ({name}) => {
    const options = name==="INVESTMENTS"? investments :name==="DEBTS"? debts : receivables;

    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(location.pathname === '/portfolio/investments' || location.pathname === '/portfolio/debts' || location.pathname === '/portfolio/receivables'){
            const pathToNavigate = `${options[1].toLowerCase()}`
            navigate(pathToNavigate);
        }
    }, [location]);

    return (
        <>
            <div>
                <Navbar expand="sm" className="bg-body-tertiary my-3 mx-5">
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" variant='underline' activeKey={location.pathname.split('/')[3]?.toLowerCase()}>
                            <Nav.Link as={Link} to={options[1].toLowerCase()} eventKey={options[1].toLowerCase()}>{options[1]}</Nav.Link>
                            <Nav.Link as={Link} to={options[2].toLowerCase()} eventKey={options[2].toLowerCase()}>{options[2]}</Nav.Link>
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