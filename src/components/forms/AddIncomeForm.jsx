import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap"
import useFetchBanks from "../../data/FetchBanks";
import { texts } from "../../application-texts/ApplicationTexts";

const AddIncomeForm = (props) => {

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
                        {texts.addIncomeForm.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{texts.addIncomeForm.incomeSourceLabel}</Form.Label>
                            <Form.Control type="text" placeholder={texts.addIncomeForm.incomeSourcePlaceholder} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{texts.addIncomeForm.amountLabel}</Form.Label>
                            <Form.Control type='text' placeholder={texts.addIncomeForm.amountPlaceholder}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{texts.addIncomeForm.addTransactionLabel}</Form.Label>
                            <Form.Select value={asTransaction} onChange={(e)=>setAsTransaction(e.target.value)} >
                                <option value={'yes'}>{texts.addIncomeForm.yesOption}</option>
                                <option value={'no'}>{texts.addIncomeForm.noOption}</option>
                            </Form.Select>
                        </Form.Group>
                        {   asTransaction==='yes' &&
                            <>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{texts.addIncomeForm.selectBankLabel}</Form.Label>
                                <Form.Select>
                                    {
                                        bankNames.map((val) => <option key={val}>{val}</option>)
                                    } 
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{texts.addIncomeForm.dateLabel}</Form.Label>
                                <Form.Control type='date'/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{texts.addIncomeForm.descriptionLabel}</Form.Label>
                                <Form.Control type='text' placeholder={texts.addIncomeForm.descriptionPlaceholder}/>
                            </Form.Group>
                            </>
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={props.onHide}>{texts.addIncomeForm.submitButton}</Button>
                    <Button variant='danger' onClick={props.onHide}>{texts.addIncomeForm.cancelButton}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddIncomeForm