import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { texts } from "../../application-texts/ApplicationTexts";

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
                    {texts.addInvestmentForm.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addInvestmentForm.investmentNameLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addInvestmentForm.investmentNamePlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>{texts.addInvestmentForm.investmentTypeLabel}</Form.Label>
                        <Form.Select value={investmentType} onChange={(e) => setInvestmentType(e.target.value)} >
                            <option value={'onetime'}>{texts.addInvestmentForm.oneTimeOption}</option>
                            <option value={'sip'}>{texts.addInvestmentForm.sipOption}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addInvestmentForm.installmentAmountLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addInvestmentForm.installmentAmountPlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addInvestmentForm.cumulativeLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addInvestmentForm.cumulativePlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addInvestmentForm.currentValueLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addInvestmentForm.currentValuePlaceholder} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={props.onHide}>{texts.addInvestmentForm.submitButton}</Button>
                <Button variant='danger' onClick={props.onHide}>{texts.addInvestmentForm.cancelButton}</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default React.memo(AddInvestmentForm);