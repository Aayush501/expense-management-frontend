import { Table } from 'react-bootstrap'
import { creditHeadings, debitHeadings } from '../../constants/BudgetTableHeadings';
import { useSelector } from 'react-redux';

const BudgetTable = ({name=""}) => {

    const headings = name==="credit"? creditHeadings : debitHeadings;
    const creditData = useSelector((state) => state.budget.credit);
    const debitData = useSelector((state) => state.budget.debit);

  return (
    <>
        <Table responsive striped>
            <thead>
                <tr>
                    {headings.map((val) => <td key={val}>{val}</td>)}
                </tr>
            </thead>
            <tbody>
                {
                    name==="credit"? 
                        <>
                        <tr>
                            <td>Previous Savings</td>
                            <td>{0}</td>
                        </tr>
                        {creditData.map((val) => 
                        <tr key={val.id}>
                            <td>{val.incomeName}</td>
                            <td>{val.amount}</td>
                        </tr>)}
                        <tr>
                            <td>Total</td>
                            <td>{0}</td>
                        </tr>
                        </>
                    : 
                    <>
                    {debitData.map((val) =>     
                    <tr key={val.id}>
                        <td>{val.expenseName}</td>
                        <td>{val.expectedAmount}</td>
                        <td>{val.actualAmount}</td>
                    </tr>)}
                    <tr>
                        <td>Total</td>
                        <td>{0}</td>
                        <td>{0}</td>
                    </tr>
                    </>
                }
            </tbody>
        </Table>
    </>
  )
}

export default BudgetTable;

