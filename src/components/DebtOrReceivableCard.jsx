import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { lazy, Suspense, useState } from 'react';
import FormFallbacks from './fallbacks/FormFallbacks';
// import EditDebtForm from './forms/EditDebtForm';
// import EditReceivableForm from './forms/EditReceivableForm';
// import MarkAsSetteledForm from './forms/MarkAsSetteledForm';

const EditDebtForm = lazy(() => import("./forms/EditDebtForm"));
const EditReceivableForm = lazy(() => import("./forms/EditReceivableForm"));
const MarkAsSetteledForm = lazy(() => import("./forms/MarkAsSetteledForm"));

const DebtCard = ({serial, from, amount, date, description, status, name}) => {

  const [showEditDebt, setShowEditDebt] = useState(false);
  const [showEditReceivable, setShowEditReceivable] = useState(false);
  const [showMarkSetteled, setShowMarkSettled] = useState(false);

  return (
    <>
    <Card style={{ width: '15rem' }}>
        <Card.Header>{serial}.{status}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>From: {from}</ListGroup.Item>
          <ListGroup.Item>Amount: {amount}</ListGroup.Item>
          <ListGroup.Item>Date: {date.toDateString()}</ListGroup.Item>
          <ListGroup.Item>{description}</ListGroup.Item>
          {
            status==="REMAINING" &&
            <>
              <ListGroup.Item>
                <Button size='sm' variant='success' onClick={()=>setShowMarkSettled(true)} >✓ Mark As Setteled</Button>
                <Button size='sm' variant='info' className='mx-2' onClick={()=>{name==="debt"?setShowEditDebt(true):setShowEditReceivable(true)}}>edit?</Button>
              </ListGroup.Item>
            </>
          }
        </ListGroup>
    </Card>
    <Suspense fallback={<FormFallbacks />}>
      <EditDebtForm serial={serial} show={showEditDebt} onHide={()=>setShowEditDebt(false)} />
    </Suspense>
    <Suspense fallback={<FormFallbacks />}>
      <EditReceivableForm serial={serial} show={showEditReceivable} onHide={()=>setShowEditReceivable(false)} />
    </Suspense>
    <Suspense fallback={<FormFallbacks />}>
      <MarkAsSetteledForm show={showMarkSetteled} onHide={()=>setShowMarkSettled(false)} name={name} />
    </Suspense>
    </>
  ) 
}

export default DebtCard