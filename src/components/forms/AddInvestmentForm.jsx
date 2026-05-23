import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const AddInvestmentForm = (props) => {
  
  const [investmentType,setInvestmentType] = useState('sip');

  return (
    <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    + Add New Investment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name Of Investment</Form.Label>
                        <Form.Control type="text" placeholder="Enter name of the investment" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Investment Type</Form.Label>
                        <Form.Select value={investmentType} onChange={(e) => setInvestmentType(e.target.value)} >
                            <option value={'onetime'}>One Time</option>
                            <option value={'sip'}>SIP</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Installment Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter amount of installment" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Cumulative</Form.Label>
                        <Form.Control type="text" placeholder="Enter number of installments done till date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Current Value</Form.Label>
                        <Form.Control type="text" placeholder="Enter Current Cumulative Balance" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={props.onHide}>Submit</Button>
                <Button variant='danger' onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default React.memo(AddInvestmentForm);