import { lazy, Suspense, useEffect, useState } from 'react';
import DebtCard from '../DebtOrReceivableCard';
import { Button } from 'react-bootstrap';
import FormFallbacks from '../fallbacks/FormFallbacks';
import { useSelector } from 'react-redux';
const AddDebtForm = lazy(() => import("../forms/AddDebtForm"));

const DebtsTable = ({statusProp}) => {

  const debts = statusProp==="REMAINING"? useSelector((state) => state.debts.remaining) : useSelector((state) => state.debts.paid);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {
        statusProp==="REMAINING" && 
        <div className='container my-2'>
          <Button variant="primary" onClick={() =>setShowForm(true)}>+ Add Debt</Button> 
          <Suspense fallback={<FormFallbacks />}>
            <AddDebtForm show={showForm} onHide={() => setShowForm(false)} />
          </Suspense>
        </div>
      }
      {
        debts.length > 0?
        <div className='d-flex gap-3 flex-wrap'>
          {
            debts.map((debt) => {
              return <DebtCard key={debt.debtId} serial={0} status={debt.status} from={debt.takenFrom} amount={debt.amount} date={new Date(debt.date)} description={debt.description} name={'debt'} />
            })
          }
        </div>
        :
        "Nothing To Show Here !!!"
      }
    </>
  )
}

export default DebtsTable