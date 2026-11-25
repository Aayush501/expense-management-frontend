import Table from 'react-bootstrap/Table';
import headings from '../constants/InvestmentsLedgerHeadings';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchInvestmentLedgerForSpecificUser } from '../redux/slices/investmentsSlice';

const InvestmentsLedger = () => {
  const dispatch = useDispatch();
  const ledgerEntries = useSelector((state) => state.investments.ledger);

  useEffect(() => {
    dispatch(fetchInvestmentLedgerForSpecificUser({}));
  }, []);

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