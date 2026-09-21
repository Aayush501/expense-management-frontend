import { useState } from 'react';
import TableComponent from '../components/tables/TableComponent';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import AddBankForm from '../components/forms/AddBankForm';
import DatePicker from '../components/forms/DatePicker';
import { CalculatedDates } from '../data/DatesAndTimesCalculation';

const UserDashBoardHome = () => {

  const [month, setMonth] = useState(CalculatedDates.currentMonth);
  const [year, setYear] = useState(CalculatedDates.currentYear);
  const [showBankForm,setShowBankForm] = useState(false);
  
  const setMonthAndYear = (monthYear) => {
    setMonth(monthYear.substring(5));
    setYear(monthYear.substring(0,4));
  }

  return (
    <>
    <div className='container my-2'>
      <Button variant="primary" onClick={() => setShowBankForm(true)}>+ Add New Bank</Button>
      <AddBankForm show={showBankForm} onHide={() => setShowBankForm(false)} />
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
          <div className='date-picker'>
            <DatePicker SelectionLabel={"Select Month and Year"} selectionType={"month"} selectedDate={year+"-"+month} setDate={setMonthAndYear} />
          </div>
          <TableComponent name="LEDGER_SUMMARY" month={month} year={year} />
        </Tab>
      </Tabs>
    </div>
    </>
  );
};

export default UserDashBoardHome;