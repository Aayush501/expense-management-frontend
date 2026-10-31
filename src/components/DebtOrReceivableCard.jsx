import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { lazy, Suspense, useState } from 'react';
import ItemFallback from './fallbacks/ItemFallback';
import { texts } from '../application-texts/ApplicationTexts';

const EditDebtForm = lazy(() => import("./forms/EditDebtForm"));
const EditReceivableForm = lazy(() => import("./forms/EditReceivableForm"));
const MarkAsSetteledForm = lazy(() => import("./forms/MarkAsSetteledForm"));

const DebtOrReceivableCard = ({serial, from, amount, date, description, status, name}) => {

  const [showEditDebt, setShowEditDebt] = useState(false);
  const [showEditReceivable, setShowEditReceivable] = useState(false);
  const [showMarkSetteled, setShowMarkSettled] = useState(false);

  return (
    <>
    <Card style={{ width: '15rem' }}>
        <Card.Header>{serial}.{status}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{texts.debtOrReceivableCard.fromLabel} {from}</ListGroup.Item>
          <ListGroup.Item>{texts.debtOrReceivableCard.amountLabel} {amount}</ListGroup.Item>
          <ListGroup.Item>{texts.debtOrReceivableCard.dateLabel} {date.toDateString()}</ListGroup.Item>
          <ListGroup.Item>{description}</ListGroup.Item>
          {
            status==="REMAINING" &&
            <>
              <ListGroup.Item>
                <Button size='sm' variant='success' onClick={()=>setShowMarkSettled(true)} >{texts.debtOrReceivableCard.markAsSettledButton}</Button>
                <Button size='sm' variant='info' className='mx-2' onClick={()=>{name==="debt"?setShowEditDebt(true):setShowEditReceivable(true)}}>{texts.debtOrReceivableCard.editButton}</Button>
              </ListGroup.Item>
            </>
          }
        </ListGroup>
    </Card>
    <Suspense fallback={<ItemFallback item={"Edit Debt Form"} />}>
      <EditDebtForm serial={serial} show={showEditDebt} onHide={()=>setShowEditDebt(false)} />
    </Suspense>
    <Suspense fallback={<ItemFallback item={"Edit Receivable Form"} />}>
      <EditReceivableForm serial={serial} show={showEditReceivable} onHide={()=>setShowEditReceivable(false)} />
    </Suspense>
    <Suspense fallback={<ItemFallback item={"Mark As Setteled Form"} />}>
      <MarkAsSetteledForm show={showMarkSetteled} onHide={()=>setShowMarkSettled(false)} name={name} />
    </Suspense>
    </>
  ) 
}

export default DebtOrReceivableCard;