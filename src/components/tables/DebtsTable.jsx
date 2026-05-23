// import React, { useContext, useMemo } from 'react'
import React, { lazy, Suspense, useMemo, useState } from 'react';
import DebtCard from '../DebtOrReceivableCard';
// import AppContext from '../AppContext';
// import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
// import AddDebtForm from '../forms/AddDebtForm';
// import useDebtsData from '../../data/DebtsList';
import FormFallbacks from '../fallbacks/FormFallbacks';
import usePortfolioData from '../../data/PortfolioData';
const AddDebtForm = lazy(() => import("../forms/AddDebtForm"));

const DebtsTable = ({statusProp}) => {

  // const {debts} = useContext(AppContext);
  const debts = usePortfolioData();
  const debtsToShow = useMemo(() => debts.debts.filter(debt => statusProp==="REMAINING"? debt.status==="REMAINING" : debt.status==="PAID"), [debts,statusProp]);
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
        debts.debts.length > 0?
        <div className='d-flex gap-3 flex-wrap'>
          {
            debtsToShow.map((debt, index) => {
              return <DebtCard key={index} serial={index+1} status={debt.status} from={debt.from} amount={debt.amount} date={new Date(debt.date)} description={debt.description} name={'debt'} />
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