import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import useFetchBanks from "../../data/FetchBanks";

const AddDebtForm = (props) => {
    const [asTransaction, setAsTransaction] = useState('no');
    const bankNames = useFetchBanks();
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
                    + Add New Debt
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Choose Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description Of The Debt" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Taken From?</Form.Label>
                        <Form.Control type="text" placeholder="Enter the name of the Creditor" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Debt Amount</Form.Label>
                        <Form.Control type="text" placeholder="Enter amount of debt" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Do you want to add a transaction for this action?</Form.Label>
                        <Form.Select value={asTransaction} onChange={(e)=>setAsTransaction(e.target.value)} >
                            <option value={'yes'}>Yes</option>
                            <option value={'no'}>No</option>
                        </Form.Select>
                    </Form.Group>
                    {   asTransaction==='yes' &&
                        <>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select Bank</Form.Label>
                            <Form.Select>
                                {
                                    bankNames.map((val) => <option key={val}>{val}</option>)
                                } 
                            </Form.Select>
                        </Form.Group>
                        </>
                    }
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

export default React.memo(AddDebtForm);