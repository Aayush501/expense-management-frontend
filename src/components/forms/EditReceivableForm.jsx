import React from "react";
import { Modal, Form, Button } from "react-bootstrap"
import { texts } from "../../application-texts/ApplicationTexts";

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
                    {texts.editReceivableForm.title} With serial number : {props.serial}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>{texts.editReceivableForm.chooseDateLabel}</Form.Label>
                      <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>{texts.editReceivableForm.descriptionLabel}</Form.Label>
                      <Form.Control type="text" placeholder={texts.editReceivableForm.descriptionPlaceholder} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                      <Form.Label>{texts.editReceivableForm.givenToLabel}</Form.Label>
                      <Form.Control type="text" placeholder={texts.editReceivableForm.givenToPlaceholder} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>{texts.editReceivableForm.receivableAmountLabel}</Form.Label>
                      <Form.Control type="text" placeholder={texts.editReceivableForm.receivableAmountPlaceholder} />
                  </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={props.onHide}>{texts.editReceivableForm.submitButton}</Button>
                <Button variant='danger' onClick={props.onHide}>{texts.editReceivableForm.cancelButton}</Button>
            </Modal.Footer>
        </Modal>
    </>  )
}

export default React.memo(EditReceivableForm);