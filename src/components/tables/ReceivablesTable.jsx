import ReceivableCard from '../DebtOrReceivableCard';
import { Button } from 'react-bootstrap';
import { lazy, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import ItemFallback from '../fallbacks/ItemFallback';

const AddReceivableForm = lazy(() => import("../forms/AddReceivableForm"));

const ReceivablesTable = ({status}) => {
    
    const receivables = status==="REMAINING"? useSelector((state) => state.receivables.remaining) : useSelector((state) => state.receivables.received);
    const [showForm, setShowForm] = useState(false);

    return ( 
        <>
            {
                status==="REMAINING" && 
                <div className='container my-2'>
                    <Button variant="primary" onClick={() =>setShowForm(true)}>+ Add Receivable</Button>
                    <Suspense fallback={<ItemFallback item={"Receivable Form"} />}>
                        <AddReceivableForm show={showForm} onHide={() => setShowForm(false)} />
                    </Suspense>
                </div>
            }   
            {
                receivables.length > 0 ? 
                <div className='d-flex gap-3 flex-wrap'>
                {
                    receivables.map((val) => {
                        return <ReceivableCard key={val.id} serial={0} status={val.status} from={val.givenTo} amount={val.amount} date={new Date(val.date)} description={val.description} name={'receivable'} />
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