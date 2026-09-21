import { Form } from "react-bootstrap"

const DatePicker = ({SelectionLabel, selectionType, selectedDate, setDate}) => {

    console.log(selectedDate)
    console.log(typeof selectedDate)

  return (
    <div>
        <Form>
            <Form.Group>
                <Form.Label>{SelectionLabel}</Form.Label>
                <Form.Control 
                    type={selectionType}
                    value={selectedDate}
                    onChange={(e) => setDate(e.target.value)}
                />
            </Form.Group>
        </Form>
    </div>
  )
}

export default DatePicker