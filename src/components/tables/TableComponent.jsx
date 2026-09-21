import React, { useMemo, useCallback, useState } from 'react'
// import React, { useContext, useMemo, useEffect, useCallback } from 'react'
// import AppContext from '../AppContext'
import Table from 'react-bootstrap/Table';
import "../../App.css";
import { shallowEqual, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import EditTransactionForm from '../forms/EditTransactionForm';

const TableComponent = ({name, month, year, bankNameProp}) => {

    const [showEditTransactionForm, setShowEditTransactionForm] = useState(false);
    const [editableTransaction, setEditableTransaction] = useState({serial:NaN});
  
    // const {banks, ledgerEntries} = useContext(AppContext);
    const {banks, ledgerEntries} = useSelector((state) => ({
      banks : state.banks.value,
      ledgerEntries : state.ledger.value
    }), shallowEqual);


    const ledgerEntriesForBank = () =>{
      if(ledgerEntries.length>0){
        let arr = ledgerEntries.filter(i => i.bankName===bankNameProp);
        return arr.sort((p,c) => c.serial-p.serial);
      }
    }

    const getTotalBalance = () => {
      return banks.length>0? banks.map(i => i.balance).reduce((p,c) => p+c): 0;
    }

    const getLedgerCredit = useCallback((bank) => {
      if(ledgerEntries.length === 0 || month==null || bank==null || year==null || month==undefined || bank==undefined || year==undefined){
        return 0;
      } 

      let filteredEntries = ledgerEntries.filter(i => {
        return i.bankName===bank && new Date(i.date).getMonth()==Number(month)-1 && new Date(i.date).getFullYear()==Number(year) && i.transactionType === "CREDIT"
      });

      if(filteredEntries.length==0){
        return 0;
      }

      let amountsForFiltered = filteredEntries.map(i => i.amount);

      if(amountsForFiltered.length == 0){
        return 0;
      }

      return amountsForFiltered.reduce((p,c) => p+c);
    }, [ledgerEntries, month, year])

    const getLedgerDebit = useCallback((bank) => {
      if(ledgerEntries.length === 0 || month==null || bank===null || year===null || month==undefined || bank==undefined || year==undefined){
        return 0;
      } 

      let filteredEntries = ledgerEntries.filter(i => {
        return i.bankName===bank && new Date(i.date).getMonth()==Number(month)-1 && new Date(i.date).getFullYear()==Number(year) && i.transactionType === "DEBIT"
      });

      if(filteredEntries.length==0){
        return 0;
      }

      let amountsForFiltered = filteredEntries.map(i => i.amount);

      if(amountsForFiltered.length==0){
        return 0;
      }

      return amountsForFiltered.reduce((p,c) => p+c);
    }, [ledgerEntries, month, year])

    const ledgerData = useMemo(() => {
      
      const credits = Array.isArray(banks) && banks.length > 0? banks.map(i => getLedgerCredit(i.name)) : [];
      const debits = Array.isArray(banks) && banks.length > 0? banks.map(i => getLedgerDebit(i.name)) : [];

      return {
        credits,
        debits,
        totalCredit: credits.reduce((p, c) => p + c, 0),
        totalDebit: debits.reduce((p, c) => p + c, 0)
      }
    }, [banks, getLedgerCredit, getLedgerDebit]);

  return (
    <>
    { name!==null && month!==null && year!==null && bankNameProp!==null?
      <Table responsive>
        <thead>
          <tr>
              {
                name==="LEDGER_SUMMARY" || name==="BALANCE_SUMMARY" ?
                <>
                  <th>#</th>
                  {
                    banks.map((i, index) => {
                      return <th key={index}>{i.name}</th>
                    })
                  }
                  <th>Total</th>
                </>
                :
                <>
                  <th>S.No.</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Transaction Type</th>
                  <th>Balance</th>
                </>
              }
          </tr>
        </thead>
        <tbody>
          {
          name==="BALANCE_SUMMARY" ?
            <>
              <tr>
                <td>Current Balance</td>
                {
                  banks.map((i, index) => {
                    return <td key={index}>{i.balance}</td>
                  })
                }
                <td>{getTotalBalance()}</td>
              </tr>
            </> 
            : name==="LEDGER_SUMMARY"?
            <>
              <tr>
                <td>Credit</td>
                {
                  ledgerData.credits.map((i, index) => {
                    return <td key={index}>{i}</td>
                  })
                }
                <td>
                  {ledgerData.totalCredit}
                </td>
              </tr>
              <tr>
                <td>Debit</td>
                {
                  ledgerData.debits.map((i, index) => {
                    return <td key={index}>{i}</td>
                  })
                }
                <td>
                  {ledgerData.totalDebit}
                </td>
              </tr>
              <tr>
                <td>Net C|D</td>
                {
                  banks.map((i, index) => {
                    return <td key={index}>{ledgerData.credits[index]-ledgerData.debits[index]}</td>
                  })
                }
                <td>
                  {ledgerData.totalCredit - ledgerData.totalDebit}
                </td>
              </tr>
            </> 
            : 
            <>
              {
                ledgerEntriesForBank().map((i, index) => {
                  return <tr key={index}> 
                    <td>{i.serial}</td>
                    <td>{new Date(i.date).toLocaleDateString("In")}</td>
                    <td>{i.description}</td>
                    <td>{i.amount}</td>
                    <td>{i.transactionType}</td>
                    <td>{i.balance}</td>
                    <td><Button style={{marginTop:'-2px'}} size='sm' variant='info' onClick={()=>{setShowEditTransactionForm(true); setEditableTransaction(i)}}>edit?</Button></td>
                  </tr>
                })
              }
              <EditTransactionForm show={showEditTransactionForm} onHide={()=>setShowEditTransactionForm(false)} transaction={editableTransaction} />
            </>
          }
        </tbody>
      </Table>
      :
      "Nothing to show here"
    }
    </>
  )
}

export default TableComponent