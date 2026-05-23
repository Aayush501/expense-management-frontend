import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap"
import useFetchBanks from "../../data/FetchBanks";

const AddExpectedExpenseForm = (props) => {

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
                        + Add Expected Expense
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Expected Expense:</Form.Label>
                            <Form.Control type="text" placeholder="Give name for this expected expense" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Expected Amount</Form.Label>
                            <Form.Control type='text' placeholder='Enter expected amount'/>
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
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type='date'/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control type='text' placeholder="enter amount"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type='text' placeholder="Give description to this transaction"/>
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

export default AddExpectedExpenseForm