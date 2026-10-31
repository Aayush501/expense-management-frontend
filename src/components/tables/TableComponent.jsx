import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import "../../App.css";
import { shallowEqual, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import EditTransactionForm from '../forms/EditTransactionForm';
import { texts } from '../../application-texts/ApplicationTexts';

const TableComponent = ({name, month, year, bankNameProp}) => {

    const [showEditTransactionForm, setShowEditTransactionForm] = useState(false);
    const [editableTransaction, setEditableTransaction] = useState({serial:NaN});
  
    const {banks, ledgerEntries} = useSelector((state) => ({
      banks : state.banks.value,
      ledgerEntries : state.ledger.value
    }), shallowEqual);

    const   getTotalBalance = () => {
      return banks.length>0? banks.map(i => i.balance).reduce((p,c) => p+c): 0;
    }

    const credits = useSelector((state) => state.ledger.summary.credit);
    const debits = useSelector((state) => state.ledger.summary.debit);
    const netCreditOrDebit = useSelector((state) => state.ledger.summary.netCOrD);

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
                  <th>{texts.tableComponent.ledgerSummary.total}</th>
                </>
                :
                <>
                  <th>{texts.tableComponent.ledgerTableData.sNo}</th>
                  <th>{texts.tableComponent.ledgerTableData.transactionId}</th>
                  <th>{texts.tableComponent.ledgerTableData.date}</th>
                  <th>{texts.tableComponent.ledgerTableData.description}</th>
                  <th>{texts.tableComponent.ledgerTableData.amount}</th>
                  <th>{texts.tableComponent.ledgerTableData.transactionType}</th>
                  <th>{texts.tableComponent.ledgerTableData.balance}</th>
                </>
              }
          </tr>
        </thead>
        <tbody>
          {
          name==="BALANCE_SUMMARY" ?
            <>
              <tr>
                <td>{texts.tableComponent.balanceSummary.currentBalance}</td>
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
                <td>{texts.tableComponent.ledgerSummary.credit}</td>
                {
                  banks.map((val) => {
                    return <td key={val.id}>{credits[val.id]? credits[val.id] : 0}</td>
                  })
                }
                <td>
                  {credits.total? credits.total : 0}
                </td>
              </tr>
              <tr>
                <td>{texts.tableComponent.ledgerSummary.debit}</td>
                {
                  banks.map((val) => {
                    return <td key={val.id}>{debits[val.id]? debits[val.id] : 0}</td>
                  })
                }
                <td>
                  {debits.total? debits.total : 0}
                </td>
              </tr>
              <tr>
                <td>{texts.tableComponent.ledgerSummary.netCreditOrDebit}</td>
                {
                  banks.map((val) => {
                    return <td key={val.id}>{netCreditOrDebit[val.id] == undefined? 0 : netCreditOrDebit[val.id].amount}</td>
                  })
                }
                <td>
                  {netCreditOrDebit.total.amount? netCreditOrDebit.total.amount : 0}
                </td>
              </tr>
            </> 
            : 
            <>
              {
                ledgerEntries.map((i, index) => {
                  return <tr key={i.transactionId}> 
                    <td>{index + 1}</td>
                    <td>{i.transactionId}</td>
                    <td>{new Date(i.date).toLocaleDateString("In")}</td>
                    <td>{i.description}</td>
                    <td>{i.amount}</td>
                    <td>{i.transactionType}</td>
                    <td>{i.balanceAfterThisTransaction}</td>
                    <td><Button style={{marginTop:'-2px'}} size='sm' variant='info' onClick={()=>{setShowEditTransactionForm(true); setEditableTransaction(i)}}>{texts.tableComponent.ledgerTableData.editButton}</Button></td>
                  </tr>
                })
              }
              <EditTransactionForm show={showEditTransactionForm} onHide={()=>setShowEditTransactionForm(false)} transaction={editableTransaction} />
            </>
          }
        </tbody>
      </Table>
      :
      <>
        {texts.tableComponent.nothingToShowHere}
      </>
    }
    </>
  )
}

export default TableComponent