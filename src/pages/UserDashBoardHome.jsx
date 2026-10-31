import { useEffect, useState } from 'react';
import TableComponent from '../components/tables/TableComponent';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DatePicker from '../components/forms/DatePicker';
import { CalculatedDates } from '../data/DatesAndTimesCalculation';
import { useDispatch } from 'react-redux';
import { fetchLedgerSummaryForSpecificMonth } from '../redux/slices/ledgerSlice';
import { texts } from '../application-texts/ApplicationTexts';

const UserDashBoardHome = () => {

  const [month, setMonth] = useState(CalculatedDates.currentMonth);
  const [year, setYear] = useState(CalculatedDates.currentYear);
  
  const setMonthAndYear = (monthYear) => {
    setMonth(monthYear.substring(5));
    setYear(monthYear.substring(0,4));
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLedgerSummaryForSpecificMonth({month : month, year : year}));
  }, [month, year])

  return (
    <>
    <div className='container my-3'>
      <Tabs
        defaultActiveKey="balancesummary"
        id="uncontrolled-tab"
        className="mb-3"
      >
        <Tab eventKey="balancesummary" title="BalanceSummary">
          <div className='tbl-name'>
            <h3>{texts.userDashboardHomePage.balanceSummary}</h3>
          </div>
          <TableComponent name="BALANCE_SUMMARY" />
        </Tab>
        
        <Tab eventKey="ledgersummary" title="LedgerSummary">
          <div className='tbl-name'>
            <h3>{texts.userDashboardHomePage.ledgerSummary}</h3>
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