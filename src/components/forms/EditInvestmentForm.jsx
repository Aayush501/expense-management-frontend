import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { texts } from "../../application-texts/ApplicationTexts";

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
                    {texts.editInvestmentForm.title} With Serial Number: {props.investment.serial}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.editInvestmentForm.investmentNameLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.editInvestmentForm.investmentNamePlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>{texts.editInvestmentForm.investmentTypeLabel}</Form.Label>
                        <Form.Select value={investmentType} onChange={(e) => setInvestmentType(e.target.value)} >
                            <option value={'onetime'}>{texts.editInvestmentForm.oneTimeOption}</option>
                            <option value={'sip'}>{texts.editInvestmentForm.sipOption}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.editInvestmentForm.currentValueLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.editInvestmentForm.currentValuePlaceholder} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={props.onHide}>{texts.editInvestmentForm.submitButton}</Button>
                <Button variant='danger' onClick={props.onHide}>{texts.editInvestmentForm.cancelButton}</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default React.memo(EditInvestmentForm);