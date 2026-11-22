import { useDispatch, useSelector } from 'react-redux';
import { texts } from '../application-texts/ApplicationTexts'
import DatePicker from './forms/DatePicker'
import { fetchLedgerSummaryForSpecificMonth } from '../redux/slices/ledgerSlice';
import LedgerSummaryTable from './tables/LedgerSummaryTable';
import { useEffect } from 'react';
import { setLedgerSummaryMonthAndYear } from '../redux/slices/applicationStateSlice';

const LedgerSummaryComponent = () => {

    const month = useSelector((state) => state.applicationState.LedgerSummaryMonth);
    const year = useSelector((state) => state.applicationState.LedgerSummaryYear);
    
    const dispatch = useDispatch();
    
    const setMonthAndYear = (monthYear) => {
        dispatch(setLedgerSummaryMonthAndYear({month : monthYear.substring(5), year : monthYear.substring(0, 4)}));
    }

    useEffect(() => {
        dispatch(fetchLedgerSummaryForSpecificMonth({month : month, year : year}));
    }, [month, year])

    return (
        <>
            <div className='mx-5'>
                <div className='tbl-name'>
                    <h3>{texts.userDashboardHomePage.ledgerSummary}</h3>
                </div>
                <div className='date-picker'>
                    <DatePicker SelectionLabel={"Select Month and Year"} selectionType={"month"} selectedDate={year+"-"+month} setDate={setMonthAndYear} />
                </div>
                <LedgerSummaryTable />
            </div>
        </>
    )
}

export default LedgerSummaryComponent