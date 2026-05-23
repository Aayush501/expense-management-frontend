import Form from 'react-bootstrap/Form';
import AppContext from '../AppContext';
// import { useContext, useMemo } from 'react';
import { useMemo } from 'react';
import Months from '../constants/Months';
import { useSelector } from 'react-redux';

const DropDownMenu = ({setMonth, setYear, ledgerBook, setBankName}) => {

  const months = Months;

  const handleValueChange = (e) => {
   if(!ledgerBook){
     const newValue = e.target.value;
     const monthVal = newValue.split("-").at(0);
     const yearVal = newValue.split("-").at(1);
     setMonth(new Number(monthVal).valueOf());
     setYear(new Number(yearVal).valueOf());
   } else {
     setBankName(e.target.value);
   }
  }

  // const { startDay, banks } = useContext(AppContext);
  const startDayString = useSelector((state) => state.user.startDay);
  const startDay = useMemo(() => new Date(startDayString), [startDayString]);
  const banks = useSelector((state) => state.banks.value);
 
  const monthsOptions = useMemo(() => {
    if(startDay == null ){
      return [];
    }

    let today = new Date();
    let optionSet = new Set();

    while(today.getMonth() >= startDay.getMonth() && today.getFullYear()>=startDay.getFullYear()){
        optionSet.add(`${today.getMonth()}-${today.getFullYear()}`)
        today.setMonth(today.getMonth()-1);
    }
    
    return Array.from(optionSet);
  }, [startDay]);

  const banksOptions = useMemo(() => {
    if(!Array.isArray(banks) || banks.length==0) return [];
    return banks.map(i => i.name);
  }, [banks]);

  return (
    <Form.Select aria-label="Month Selection" onChange={(e) => handleValueChange(e)} >
      
      <option key={"first-option"} value={""}>{!ledgerBook ? `Select Month With Year` : `Select The Bank`}</option>
      { !ledgerBook?
        monthsOptions.map((o, index) => {
            let monthName = months[o.split("-").at(0)];
            let yearValue = o.split("-").at(1);
            return <option key={index} value={o}>{`${monthName}-${yearValue}`}</option>
        }) : 
        banksOptions.map((i, index) => {
            return <option key={index} value={i}>{i}</option>
        })  
      }
    </Form.Select>
  )
}

export default DropDownMenu 