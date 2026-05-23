import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import PortfolioTabs from '../components/PortfolioTabs';

const Portfolio = () => {
  return (
    <>
      <div className="mt-3 mx-2">
        <Tab.Container id="portfolio-tabs" defaultActiveKey="investments">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="investments">Investments</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="debts">Debts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="receivables">Receivables</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="investments">
                  <PortfolioTabs name={"INVESTMENTS"} />
                </Tab.Pane>
                <Tab.Pane eventKey="debts">
                  <PortfolioTabs name={"DEBTS"} />
                </Tab.Pane>
                <Tab.Pane eventKey="receivables">
                  <PortfolioTabs name={"receivables"} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container> 
      </div>
    </>
  )
}

export default Portfolio;