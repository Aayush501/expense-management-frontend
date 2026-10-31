import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import useFetchBanks from "../../data/FetchBanks";
import { texts } from "../../application-texts/ApplicationTexts";

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
                    {texts.addDebtForm.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addDebtForm.chooseDateLabel}</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addDebtForm.descriptionLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addDebtForm.descriptionPlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>{texts.addDebtForm.takenFromLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addDebtForm.takenFromPlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addDebtForm.debtAmountLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addDebtForm.debtAmountPlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{texts.addDebtForm.addTransactionLabel}</Form.Label>
                        <Form.Select value={asTransaction} onChange={(e)=>setAsTransaction(e.target.value)} >
                            <option value={'yes'}>{texts.addDebtForm.yesOption}</option>
                            <option value={'no'}>{texts.addDebtForm.noOption}</option>
                        </Form.Select>
                    </Form.Group>
                    {   asTransaction==='yes' &&
                        <>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{texts.addDebtForm.selectBankLabel}</Form.Label>
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
                <Button variant='success' onClick={props.onHide}>{texts.addDebtForm.submitButton}</Button>
                <Button variant='danger' onClick={props.onHide}>{texts.addDebtForm.cancelButton}</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default React.memo(AddDebtForm);