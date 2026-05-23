import React, { useState } from 'react'
import TableComponent from '../components/tables/TableComponent';
import { Button } from 'react-bootstrap';
import DropDownMenu from '../components/DropDownMenu';
import AddTransactionForm from '../components/forms/AddTransactionForm';

const Ledger = () => {

  const [bankName, setBankName] = useState("");
  const [showForm,setShowForm] = useState(false);

  return (
    <>
    <div className='container my-5'>
      <DropDownMenu ledgerBook={true} setBankName={setBankName}/>
      <div className='container my-3'>
        {
          bankName.trim()!="" && 
          <div className='container'>
            <Button variant="primary" onClick={() => setShowForm(true)}>+ Add Transaction</Button>
            <AddTransactionForm show={showForm} onHide={() => setShowForm(false)} bank={bankName} />
          </div>
        }
        <TableComponent name={"LEDGER_BOOK"} bankNameProp={bankName} />
      </div>
    </div>
    </>
  )
}

export default Ledger;