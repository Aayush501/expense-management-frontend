import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { texts } from '../../application-texts/ApplicationTexts';

const AddBankForm = (props) => {
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
                    {texts.addBankForm.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addBankForm.addBankNameLable}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addBankForm.addBankNamePlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>{texts.addBankForm.enterLinkedEmailLabel}</Form.Label>
                        <Form.Control type="email" placeholder={texts.addBankForm.enterLinkedEmailPlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>{texts.addBankForm.linkedPhoneNumberLabel}</Form.Label>
                        <Form.Control type="tel" placeholder={texts.addBankForm.linkedPhoneNumberPlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{texts.addBankForm.initialBalanceLabel}</Form.Label>
                        <Form.Control type='text' placeholder={texts.addBankForm.initialBalancePlaceholder}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={props.onHide}>{texts.addBankForm.submitButton}</Button>
                <Button variant='danger' onClick={props.onHide}>{texts.addBankForm.cancelButton}</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default React.memo(AddBankForm);