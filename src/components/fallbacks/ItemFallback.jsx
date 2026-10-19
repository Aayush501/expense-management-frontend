import React from 'react'
import { Modal } from 'react-bootstrap';

const ItemFallbacks = ({item}) => {
    return (
        <>
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Please Wait While {item} Is Opening
                </Modal.Title>
            </Modal.Header>
        </Modal>
        </>
    )
}

export default React.memo(ItemFallbacks);