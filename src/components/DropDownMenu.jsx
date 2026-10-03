import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLedgerForSpecificBank } from '../redux/slices/ledgerSlice';

const DropDownMenu = ({setBankName}) => {
  const dispatch = useDispatch();
  const banks = useSelector((state) => state.banks.value);

  const handleValueChange = (e) => {
   setBankName(e.target.value);
   const requiredBank = banks.find(val => val.name === e.target.value);
   dispatch(fetchLedgerForSpecificBank({bankId : requiredBank.id}));
  }

  return (
    <Form.Select aria-label="Month Selection" onChange={(e) => handleValueChange(e)} >
      <option key={"first-option"} value={""}>{`Select The Bank`}</option>
      {  
        banks.length>0 && banks.map((bank) => {
            return <option key={bank.id} value={bank.name}>{bank.name}</option>
        })  
      }
    </Form.Select>
  )
}

export default DropDownMenu 