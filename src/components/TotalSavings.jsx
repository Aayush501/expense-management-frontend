import React, { useMemo } from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TotalSavings = ({month, year}) => {

  const totals = useSelector((state) => state.total.value);
  const desiredValue = useMemo(() => {
    if(month==null || year==null || month.length===0 || year.length===0) return "Please Select Month And Year";
        
    if(totals.length===0) return "No Data Available";
    return totals.find((val) => new Date(val.month).getMonth()===(Number(month) - 1) && new Date(val.month).getFullYear()===Number(year));
  },
  [month, year, totals]);

  const savings = desiredValue===undefined? "no budget available for this month" : desiredValue.savings;

  return (
    <Table responsive variant='success' className='m-0'>
        <thead>
            <tr>
                <td>Total Savings This Month</td>
                <td style={{color:'green', fontWeight:'bold'}}>{savings}</td>
            </tr>
        </thead>
    </Table>
  )
}

export default TotalSavings