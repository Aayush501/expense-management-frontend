import Table from 'react-bootstrap/Table';
import headings from '../constants/InvestmentsLedgerHeadings';
import { useSelector } from 'react-redux';

const InvestmentsLedger = () => {
  const ledgerEntries = useSelector((state) => state.investments.ledger);

  return (
    <>
      <Table responsive>
          <thead>
              <tr>
                  {headings.map((heading, index) => (
                      <th key={index}>{heading}</th>
                  ))}
              </tr>
          </thead>
          <tbody>
              {ledgerEntries.map((val) => {
                return <tr key={val.id}>
                  <td></td>
                  <td>{val.id}</td>
                  <td>{val.transactionType}</td>
                  <td>{val.investmentId}</td>
                  <td>{val.investmentName}</td>
                  <td>{val.amount}</td>
                </tr>
              })}
          </tbody>
      </Table>
    </>
  )
}

export default InvestmentsLedger;