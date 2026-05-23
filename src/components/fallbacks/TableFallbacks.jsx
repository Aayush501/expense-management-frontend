import React from 'react'
import { Modal } from 'react-bootstrap';

const TableFallbacks = () => {
  return (
    <>
      <Modal>
          <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                  Please Wait While Table Is Loading
              </Modal.Title>
          </Modal.Header>
      </Modal>
    </>
  )
}

export default React.memo(TableFallbacks);