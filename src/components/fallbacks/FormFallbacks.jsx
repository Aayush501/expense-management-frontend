import React from 'react'
import { Modal } from 'react-bootstrap';

const FormFallbacks = () => {
    return (
        <>
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Please Wait While Form Is Opening
                </Modal.Title>
            </Modal.Header>
        </Modal>
        </>
    )
}

export default React.memo(FormFallbacks);