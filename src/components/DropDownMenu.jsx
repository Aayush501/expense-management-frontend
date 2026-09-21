import Form from 'react-bootstrap/Form';
import AppContext from '../AppContext';
// import { useContext, useMemo } from 'react';
import { useMemo } from 'react';
import Months from '../constants/Months';
import { useSelector } from 'react-redux';

const DropDownMenu = ({setBankName}) => {

  const handleValueChange = (e) => {
   setBankName(e.target.value);
  }

  // const { startDay, banks } = useContext(AppContext);
  const banks = useSelector((state) => state.banks.value);

  const banksOptions = useMemo(() => {
    if(!Array.isArray(banks) || banks.length==0) return [];
    return banks.map(i => i.name);
  }, [banks]);

  return (
    <Form.Select aria-label="Month Selection" onChange={(e) => handleValueChange(e)} >
      <option key={"first-option"} value={""}>{`Select The Bank`}</option>
      {  
        banksOptions.length>0 && banksOptions.map((i, index) => {
            return <option key={index} value={i}>{i}</option>
        })  
      }
    </Form.Select>
  )
}

export default DropDownMenu 