import { Button, Form, Modal } from "react-bootstrap"
import { texts } from "../../application-texts/ApplicationTexts";

const EditBankForm = ({show, onHide, bankId, bankName, linkedPhoneNumber, linkedEmail}) => {
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {texts.editBankForm.title}
                        <h6>ID : {bankId}</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3 d-flex gap-3 flex-wrap" controlId="exampleForm.ControlInput1">
                            <div>
                                <Form.Label>{texts.editBankForm.currentBankName}</Form.Label>
                                <Form.Control type="text" placeholder={bankName} disabled/>
                            </div>
                            <div>
                                <Form.Label>{texts.editBankForm.updateBankName}</Form.Label>
                                <Form.Control type="text" placeholder={texts.editBankForm.updateBankNamePlaceholder} />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex gap-3 flex-wrap" controlId="exampleForm.ControlInput2">
                             <div>
                                <Form.Label>{texts.editBankForm.currentLinkedEmail}</Form.Label>
                                <Form.Control type="text" placeholder={linkedEmail} disabled/>
                            </div>
                            <div>
                                <Form.Label>{texts.editBankForm.updateLinkedEmail}</Form.Label>
                                <Form.Control type="text" placeholder={texts.editBankForm.updateLinkedEmailPlaceholder} />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex gap-3 flex-wrap" controlId="exampleForm.ControlInput3">
                            <div>
                                <Form.Label>{texts.editBankForm.currentLinkedPhoneNumber}</Form.Label>
                                <Form.Control type="text" placeholder={linkedPhoneNumber} disabled/>
                            </div>
                            <div>
                                <Form.Label>{texts.editBankForm.updateLinkedPhoneNumber}</Form.Label>
                                <Form.Control type="text" placeholder={texts.editBankForm.updateLinkedPhoneNumberPlaceholder} />
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={onHide}>{texts.editBankForm.submitButton}</Button>
                    <Button variant='danger' onClick={onHide}>{texts.editBankForm.cancelButton}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditBankForm;
