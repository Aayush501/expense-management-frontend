import React, {useState} from 'react'
// import React, {useEffect, useState} from 'react'
import { Button, Container } from 'react-bootstrap';
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import BudgetTable from '../components/tables/BudgetTable';
import TotalSavings from '../components/TotalSavings';
import AddIncomeForm from '../components/forms/AddIncomeForm';
import AddExpectedExpenseForm from '../components/forms/AddExpectedExpenseForm';
import { CalculatedDates } from '../data/DatesAndTimesCalculation';
import DatePicker from '../components/forms/DatePicker';

const Budget = () => {

  const [month, setMonth] = useState(CalculatedDates.currentMonth);
  const [year, setYear] = useState(CalculatedDates.currentYear);
  const [addIncomeForm, SetAddIncomeForm] = useState(false);
  const [addExpectedExpenseForm, setAddExpectedExpenseForm] = useState(false);
  
  // useEffect(()=>{
  //   console.log("month", month);
  //   console.log("year", year);
  //   console.log('type of month', typeof month);
  //   console.log('type of year', typeof year);
  // }, [month, year]);

  const setMonthAndYear = (monthYear) => {
    setMonth(monthYear.substring(5));
    setYear(monthYear.substring(0,4));
  }

  return (
    <>
        <div className='date-picker m-3'>
          <DatePicker SelectionLabel={"Select Month and Year"} selectionType={"month"} selectedDate={year+"-"+month} setDate={setMonthAndYear} />
        </div>
        <div className='m-3' style={{border:'3px green solid', borderRadius:'10px', overflow:'hidden'}}>
          <TotalSavings month={month} year={year} />
        </div>
        <Container>
          <Row>
            <Col>
              <Card style={{border:'1px gray solid'}}>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{display:'flex', justifyContent:'space-around', fontWeight:'bolder', fontSize:'large'}}>
                    Credit
                    { month!=-1 && year!=-1 && !Number.isNaN(year) &&
                      <>
                        <Button size='sm' variant='primary' onClick={() => SetAddIncomeForm(true)}>+ Add Income</Button>
                        <AddIncomeForm show={addIncomeForm} onHide={()=> SetAddIncomeForm(false)} />
                      </>
                    }
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BudgetTable name={"credit"} month={Number(month).toString()} year={(Number(year)).toString()} />
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <Card style={{border:'1px gray solid'}}>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{display:'flex', justifyContent:'space-around', fontWeight:'bolder', fontSize:'large'}}>
                    Debit
                    { month!=-1 && year!=-1 && !Number.isNaN(year) &&
                      <>
                        <Button size='sm'  variant='primary' onClick={() => setAddExpectedExpenseForm(true)}>+ Add Expected-Expense</Button>
                        <AddExpectedExpenseForm show={addExpectedExpenseForm} onHide={()=> setAddExpectedExpenseForm(false)}/>
                      </>
                    }
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BudgetTable name={"debit"} month={month} year={year} />
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Budget;