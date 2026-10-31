import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { texts } from '../application-texts/ApplicationTexts';

const TotalSavings = () => {

  const sharedData = useSelector((state) => state.budget.shared);
  const savings = sharedData.lenght===0? 0 : useSelector((state) => state.budget.shared.totalSavings);

  return (
    <Table responsive variant='success' className='m-0'>
        <thead>
            <tr>
                <td>{texts.totalSavings.totalSavingsThisMonth}</td>
                <td style={{color:'green', fontWeight:'bold'}}>{savings===undefined? "Not Fetched Yet" : savings}</td>
            </tr>
        </thead>
    </Table>
  )
}

export default TotalSavings