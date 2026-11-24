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
  
    const {ledgerEntries} = useSelector((state) => ({ ledgerEntries : state.ledger.value }), shallowEqual);

  return (
    <>
    { name!==null && month!==null && year!==null && bankNameProp!==null?
      <Table responsive>
        <thead>
          <tr>
            <th>{texts.tableComponent.ledgerTableData.sNo}</th>
            <th>{texts.tableComponent.ledgerTableData.transactionId}</th>
            <th>{texts.tableComponent.ledgerTableData.date}</th>
            <th>{texts.tableComponent.ledgerTableData.description}</th>
            <th>{texts.tableComponent.ledgerTableData.amount}</th>
            <th>{texts.tableComponent.ledgerTableData.transactionType}</th>
            <th>{texts.tableComponent.ledgerTableData.balance}</th>
          </tr>
        </thead>
        <tbody>
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