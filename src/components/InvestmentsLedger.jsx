import React, { useMemo } from 'react'
import Table from 'react-bootstrap/Table';
import headings from '../constants/InvestmentsLedgerHeadings';
// import { shallowEqual, useSelector } from 'react-redux';
import useLedgerData from '../data/LedgerData';

const InvestmentsLedger = () => {

  // const {ledgerEntries} = useSelector((state) => ({ledgerEntries: state.ledger.value}), shallowEqual);
  const ledgerEntries = useLedgerData();
  const entriesToShow = useMemo(() => ledgerEntries.ledgerEntries.filter((val) => val.investment), [ledgerEntries]);

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
              {entriesToShow.map((val) => {
                return <tr key={val.serial}>
                  <td>{val.serial}</td>
                  <td>{val.transactionType}</td>
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