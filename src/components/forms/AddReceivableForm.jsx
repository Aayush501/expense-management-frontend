import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import useFetchBanks from "../../data/FetchBanks";
import { texts } from "../../application-texts/ApplicationTexts";

const AddReceivableForm = (props) => {
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
                    {texts.addReceivableForm.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addReceivableForm.chooseDateLabel}</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addReceivableForm.descriptionLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addReceivableForm.descriptionPlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>{texts.addReceivableForm.givenToLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addReceivableForm.givenToPlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addReceivableForm.receivableAmountLabel}</Form.Label>
                        <Form.Control type="text" placeholder={texts.addReceivableForm.receivableAmountPlaceholder} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{texts.addReceivableForm.addTransactionLabel}</Form.Label>
                        <Form.Select value={asTransaction} onChange={(e)=>setAsTransaction(e.target.value)} >
                            <option value={'yes'}>{texts.addReceivableForm.yesOption}</option>
                            <option value={'no'}>{texts.addReceivableForm.noOption}</option>
                        </Form.Select>
                    </Form.Group>
                    {   asTransaction==='yes' &&
                        <>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{texts.addReceivableForm.selectBankLabel}</Form.Label>
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
                <Button variant='success' onClick={props.onHide}>{texts.addReceivableForm.submitButton}</Button>
                <Button variant='danger' onClick={props.onHide}>{texts.addReceivableForm.cancelButton}</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default React.memo(AddReceivableForm)