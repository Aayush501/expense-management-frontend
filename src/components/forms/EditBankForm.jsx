import { Button, Form, Modal } from "react-bootstrap"

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
                        Edit Bank Details
                        <h6>ID : {bankId}</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3 d-flex gap-3 flex-wrap" controlId="exampleForm.ControlInput1">
                            <div>
                                <Form.Label>Current Name Of Bank</Form.Label>
                                <Form.Control type="text" placeholder={bankName} disabled/>
                            </div>
                            <div>
                                <Form.Label>Update Bank Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter new name for the bank" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex gap-3 flex-wrap" controlId="exampleForm.ControlInput2">
                             <div>
                                <Form.Label>Current Linked Email</Form.Label>
                                <Form.Control type="text" placeholder={linkedEmail} disabled/>
                            </div>
                            <div>
                                <Form.Label>Update Linked Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter new email" />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex gap-3 flex-wrap" controlId="exampleForm.ControlInput3">
                            <div>
                                <Form.Label>Current Linked Phone Number</Form.Label>
                                <Form.Control type="text" placeholder={linkedPhoneNumber} disabled/>
                            </div>
                            <div>
                                <Form.Label>Update Linked Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter new phone number" />
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onClick={onHide}>Submit</Button>
                    <Button variant='danger' onClick={onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditBankForm;
