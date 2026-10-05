import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const EditInvestmentForm = (props) => {
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
                    Edit Investment With Serial Number: {props.investment.serial}
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

export default React.memo(EditInvestmentForm);