import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TotalSavings = ({month, year}) => {

  const sharedData = useSelector((state) => state.budget.shared);
  const savings = sharedData.lenght===0? 0 : useSelector((state) => state.budget.shared.totalSavings);

  return (
    <Table responsive variant='success' className='m-0'>
        <thead>
            <tr>
                <td>Total Savings This Month</td>
                <td style={{color:'green', fontWeight:'bold'}}>{savings===undefined? "Not Fetched Yet" : savings}</td>
            </tr>
        </thead>
    </Table>
  )
}

export default TotalSavings