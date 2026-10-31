import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { texts } from "../../application-texts/ApplicationTexts";

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
                    {texts.editDebtForm.title} With serial number : {props.serial}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>{texts.editDebtForm.chooseDateLabel}</Form.Label>
                      <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>{texts.editDebtForm.descriptionLabel}</Form.Label>
                      <Form.Control type="text" placeholder={texts.editDebtForm.descriptionPlaceholder} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                      <Form.Label>{texts.editDebtForm.takenFromLabel}</Form.Label>
                      <Form.Control type="text" placeholder={texts.editDebtForm.takenFromPlaceholder} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>{texts.editDebtForm.debtAmountLabel}</Form.Label>
                      <Form.Control type="text" placeholder={texts.editDebtForm.debtAmountPlaceholder} />
                  </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={props.onHide}>{texts.editDebtForm.submitButton}</Button>
                <Button variant='danger' onClick={props.onHide}>{texts.editDebtForm.cancelButton}</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default React.memo(EditDebtForm);