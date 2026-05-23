// import React, { useContext } from 'react'
import ReceivableCard from '../DebtOrReceivableCard';
// import AppContext from '../AppContext'
// import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { lazy, Suspense, useState } from 'react';
// import AddReceivableForm from '../forms/AddReceivableForm';
import usePortfolioData from '../../data/PortfolioData';
import FormFallbacks from '../fallbacks/FormFallbacks';

const AddReceivableForm = lazy(() => import("../forms/AddReceivableForm"));

const ReceivablesTable = ({status}) => {
    
    // const { receivables } = useContext(AppContext);
    const receivables = usePortfolioData();
    const recievablesToShow = receivables.receivables.filter(receivable => status==="REMAINING"? receivable.status==="REMAINING" : receivable.status==="RECEIVED");
    const [showForm, setShowForm] = useState(false);

    return ( 
        <>
            {
                status==="REMAINING" && 
                <div className='container my-2'>
                    <Button variant="primary" onClick={() =>setShowForm(true)}>+ Add Receivable</Button>
                    <Suspense fallback={<FormFallbacks />}>
                        <AddReceivableForm show={showForm} onHide={() => setShowForm(false)} />
                    </Suspense>
                </div>
            }   
            {
                receivables.receivables.length > 0 ? 
                <div className='d-flex gap-3 flex-wrap'>
                {
                    recievablesToShow.map((debt, index) => {
                        return <ReceivableCard key={index} serial={index+1} status={debt.status} from={debt.from} amount={debt.amount} date={new Date(debt.date)} description={debt.description} name={'receivable'} />
                    })
                }
                </div> 
                :
                "Nothing To Show Here !!!"
            }
        </>
    )
}

export default ReceivablesTable