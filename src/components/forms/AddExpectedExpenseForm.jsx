import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap"
import useFetchBanks from "../../data/FetchBanks";
import { texts } from "../../application-texts/ApplicationTexts";

const AddExpectedExpenseForm = (props) => {

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
                        {texts.expectedExpenseForm.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{texts.expectedExpenseForm.expenseNameLabel}</Form.Label>
                            <Form.Control type="text" placeholder={texts.expectedExpenseForm.expenseNamePlaceholder} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{texts.expectedExpenseForm.expectedAmountLabel}</Form.Label>
                            <Form.Control type='text' placeholder={texts.expectedExpenseForm.expectedAmountPlaceholder}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{texts.expectedExpenseForm.addTransactionLabel}</Form.Label>
                            <Form.Select value={asTransaction} onChange={(e)=>setAsTransaction(e.target.value)} >
                                <option value={'yes'}>{texts.expectedExpenseForm.yesOption}</option>
                                <option value={'no'}>{texts.expectedExpenseForm.noOption}</option>
                            </Form.Select>
                        </Form.Group>
                            {   asTransaction==='yes' &&
                                <>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>{texts.expectedExpenseForm.selectBankLabel}</Form.Label>
                                    <Form.Select>
                                        {
                                            bankNames.map((val) => <option key={val}>{val}</option>)
                                        } 
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>{texts.expectedExpenseForm.dateLabel}</Form.Label>
                                    <Form.Control type='date'/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>{texts.expectedExpenseForm.descriptionLabel}</Form.Label>
                                    <Form.Control type='text' placeholder={texts.expectedExpenseForm.descriptionPlaceholder}/>
                                </Form.Group>
                                </>
                            }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={props.onHide}>{texts.expectedExpenseForm.submitButton}</Button>
                    <Button variant='danger' onClick={props.onHide}>{texts.expectedExpenseForm.cancelButton}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddExpectedExpenseForm