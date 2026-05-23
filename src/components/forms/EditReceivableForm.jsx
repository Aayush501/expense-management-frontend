import React from "react";
import { Modal, Form, Button } from "react-bootstrap"

const EditReceivableForm = (props) => {
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
                    Edit Receivable With serial number : {props.serial}
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
                      <Form.Control type="text" placeholder="Enter Description Of The Receivable" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                      <Form.Label>Given To?</Form.Label>
                      <Form.Control type="text" placeholder="Enter the name of the Debtor" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Receivable Amount</Form.Label>
                      <Form.Control type="text" placeholder="Enter receivable amount" />
                  </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={props.onHide}>Submit</Button>
                <Button variant='danger' onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    </>  )
}

export default React.memo(EditReceivableForm);