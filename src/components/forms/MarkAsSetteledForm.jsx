import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap"
import useFetchBanks from "../../data/FetchBanks";
import { texts } from "../../application-texts/ApplicationTexts";


const MarkAsSetteledForm = (props) => {

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
                        {texts.addSettlementForm.title} {props.name}
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{texts.addSettlementForm.addTransactionLabel}</Form.Label>
                                <Form.Select value={asTransaction} onChange={(e)=>setAsTransaction(e.target.value)} >
                                    <option value={'yes'}>{texts.addSettlementForm.yesOption}</option>
                                    <option value={'no'}>{texts.addSettlementForm.noOption}</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Title>
                </Modal.Header>
                {   asTransaction==='yes' &&
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{texts.addSettlementForm.selectBankLabel}</Form.Label>
                            <Form.Select>
                                {
                                    bankNames.map((val) => <option value={val} key={val}>{val}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{texts.addSettlementForm.dateLabel}</Form.Label>
                            <Form.Control type='date'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{texts.addSettlementForm.amountLabel}</Form.Label>
                            <Form.Control type='text' placeholder={texts.addSettlementForm.amountPlaceholder}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{texts.addSettlementForm.descriptionLabel}</Form.Label>
                            <Form.Control type='text' placeholder={texts.addSettlementForm.descriptionPlaceholder}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                }
                <Modal.Footer>
                    <Button variant='success' onClick={props.onHide}>{texts.addSettlementForm.submitButton}</Button>
                    <Button variant='danger' onClick={props.onHide}>{texts.addSettlementForm.cancelButton}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MarkAsSetteledForm