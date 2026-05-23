import React, { useState } from 'react';
import TableComponent from '../components/tables/TableComponent';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DropDownMenu from '../components/DropDownMenu';
import Button from 'react-bootstrap/Button';
import AddBankForm from '../components/forms/AddBankForm';
import ChangeStartDateForm from '../components/forms/ChangeStartDateForm';

const UserDashBoardHome = () => {

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [showBankForm,setShowBankForm] = useState(false);
  const [showStartDateForm, setShowStartDateForm] = useState(false);

  return (
    <>
    <div className='container my-2'>
      <Button variant="primary" onClick={() => setShowBankForm(true)}>+ Add New Bank</Button>
      <AddBankForm show={showBankForm} onHide={() => setShowBankForm(false)} />
      <Button className='mx-1' variant="warning" style={{fontWeight:'bold'}} onClick={() => setShowStartDateForm(true)} >✏️ Change Start Date</Button>
      <ChangeStartDateForm show={showStartDateForm} onHide={() => setShowStartDateForm(false)} />
    </div>
    <div className='container my-3'>
      <Tabs
        defaultActiveKey="balancesummary"
        id="uncontrolled-tab"
        className="mb-3"
      >
        <Tab eventKey="balancesummary" title="BalanceSummary">
          <div className='tbl-name'>
            <h3>BALANCE_SUMMARY</h3>
          </div>
          <TableComponent name="BALANCE_SUMMARY" />
        </Tab>
        
        <Tab eventKey="ledgersummary" title="LedgerSummary">
          <div className='tbl-name'>
            <h3>LEDGER_SUMMARY</h3>
          </div>
          <DropDownMenu setMonth={setMonth} setYear={setYear} />
          <TableComponent name="LEDGER_SUMMARY" month={month} year={year} />
        </Tab>
      </Tabs>
    </div>
    </>
  );
};

export default UserDashBoardHome;