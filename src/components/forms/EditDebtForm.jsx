import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const EditDebtForm = (props) => {
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
                    Edit Debt With serial number : {props.serial}
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

export default React.memo(EditDebtForm);