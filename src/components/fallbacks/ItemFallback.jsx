import React from 'react'
import { Modal } from 'react-bootstrap';

import { texts } from '../../application-texts/ApplicationTexts';

const ItemFallbacks = ({item}) => {
    return (
        <>
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {texts.itemFallbackText(item)}
                </Modal.Title>
            </Modal.Header>
        </Modal>
        </>
    )
}

export default React.memo(ItemFallbacks);