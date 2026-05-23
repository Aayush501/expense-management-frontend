import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import useFetchExpenses from '../../data/ExpenseList';
// import useFetchInvestments from '../../data/InvestmentList';
import usePortfolioData from '../../data/PortfolioData';

const EditTransactionForm = (props) => {

  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('credit')

  const [affectsBudget, setAffectsBudget] = useState("no");
  const [budgetSection, setBudgetSection] = useState('income');
  const [date, setDate] = useState('');
  const [expectedExpense, setExpectedExpense] = useState('');
  const [customExpense, setCustomExpense] = useState('');
  const fetchExpense = useFetchExpenses({
    month: new Date(date).getMonth(), 
    year: new Date(date).getFullYear()
  });

  const [affectsPortfolio, setAffectsPortfolio] = useState("no");
  const [portfolioSection, setPortfolioSection] = useState("investments");
  const [expectedInvestment, setExpectedInvestment] = useState('');
  const [customInvestment, setCustomInvestment] = useState('');
  const [investmentType, setInvestmentType] = useState('sip');
  const fetchInvestments = usePortfolioData();

  return (
    <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Transaction With Serial Number : {props.transaction.serial}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Date</Form.Label>
                        <Form.Control value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type='text' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Transaction Type</Form.Label>
                        <Form.Select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} >
                            <option value={'credit'}>Credit</option>
                            <option value={'debit'}>Debit</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type='text' placeholder='Description'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label >Does this transaction affect budget?</Form.Label>
                        <Form.Check type='radio' value={"yes"} label={'Yes'} checked={affectsBudget==="yes"} onChange={(e) => setAffectsBudget(e.target.value)} />
                        <Form.Check type='radio' value={"no"} label={'No'} checked={affectsBudget==="no"} onChange={(e) => setAffectsBudget(e.target.value)} />
                    </Form.Group>
                    {
                        <>
                        {
                            affectsBudget==="yes" && 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>This Transaction Falls In Which Section Of Budget?</Form.Label>
                                <Form.Select value={budgetSection} onChange={(e) => setBudgetSection(e.target.value)} >
                                    <option value={'income'}>Income</option>
                                    <option value={'expense'}>Expense</option>
                                </Form.Select>
                            </Form.Group>
                        }
                        {
                            affectsBudget==="yes" && budgetSection==="income"? 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Set Income Name</Form.Label>
                                <Form.Control type="text" placeholder='Give this income a name' />
                            </Form.Group>
                            : affectsBudget==="yes" && budgetSection==="expense"? 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Choose Expense This Transaction Affects To</Form.Label>
                                <Form.Select value={expectedExpense} onChange={(e) => setExpectedExpense(e.target.value)}>
                                    <option value={''}>Choose Expense</option>
                                    {
                                        fetchExpense.map((val) => <option value={val.expectedExpense} key={val.id}>{val.expectedExpense}</option>)
                                    }
                                    <option value={'addNew'}>+ Add New</option>
                                </Form.Select>
                                { expectedExpense==="addNew" && <Form.Control type='text' value={customExpense} onChange={(e) => setCustomExpense(e.target.value)} placeholder='+ Add a new Expense Here' />}
                            </Form.Group>
                            : ""
                        }
                        </>
                    }
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label >Does this transaction affect portfolio?</Form.Label>
                        <Form.Check type='radio' value={"yes"} label={'Yes'} checked={affectsPortfolio==="yes"} onChange={(e) => setAffectsPortfolio(e.target.value)} />
                        <Form.Check type='radio' value={"no"} label={'No'} checked={affectsPortfolio==="no"} onChange={(e) => setAffectsPortfolio(e.target.value)} />
                    </Form.Group>
                    {
                        <>
                        {
                            affectsPortfolio==="yes" && 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>This Transaction Falls In Which Section Of portfolio?</Form.Label>
                                <Form.Select value={portfolioSection} onChange={(e) => setPortfolioSection(e.target.value)} >
                                    <option value={'investments'}>Investments</option>
                                    { transactionType==="credit" && <option value={'debts'}>Debts</option>}
                                    <option value={'receivables'}>Receivables</option>
                                </Form.Select>
                            </Form.Group>
                        }
                        {
                            affectsPortfolio==="yes" && portfolioSection==="investments"? 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Choose Investment This Transaction Affects To</Form.Label>
                                <Form.Select value={expectedInvestment} onChange={(e) => setExpectedInvestment(e.target.value)}>
                                    <option value={''}>Choose Investment</option>
                                    {
                                        fetchInvestments.investments.map((val) => <option value={val.name} key={val.serial}>{val.name}</option>)
                                    }
                                    <option value={'addNew'}>+ Add New</option>
                                </Form.Select>
                                {   
                                    expectedInvestment==="addNew" &&
                                    <>
                                        <Form.Control type='text' value={customInvestment} onChange={(e) => setCustomInvestment(e.target.value)} placeholder='+ Add a new Investment here' />
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                            <Form.Label>Investment Type</Form.Label>
                                            <Form.Select value={investmentType} onChange={(e) => setInvestmentType(e.target.value)} >
                                                <option value={'onetime'}>One Time</option>
                                                <option value={'sip'}>SIP</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                            <Form.Control disabled placeholder={`Installment : ${amount}`} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                            <Form.Control disabled placeholder={`Cumulative : 1`} />
                                        </Form.Group>
                                    </>
                                }
                            </Form.Group>
                            :affectsPortfolio==="yes"?
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>From: </Form.Label>
                                <Form.Control type='text' placeholder='Add name of the autority this transaction belongs to' />
                            </Form.Group>
                            :""
                        }
                        </>
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={props.onHide}>Submit</Button>
                <Button variant='danger' onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default EditTransactionForm;