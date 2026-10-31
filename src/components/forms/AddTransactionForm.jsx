import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { texts } from "../../application-texts/ApplicationTexts";
import useFetchExpenses from '../../data/ExpenseList';
import usePortfolioData from '../../data/PortfolioData';

const AddTransactionForm = (props) => {

  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('credit')

  const [affectsBudget, setAffectsBudget] = useState("no");
  const [budgetSection, setBudgetSection] = useState('income');
  const [date, setDate] = useState('');
  const [expectedExpense, setExpectedExpense] = useState('');
  const [customExpense, setCustomExpense] = useState('');
  const fetchExpense = useFetchExpenses();

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
                    {texts.addTransactionForm.title} To {props.bank}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.addTransactionForm.chooseDateLabel}</Form.Label>
                        <Form.Control value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>{texts.addTransactionForm.amountLabel}</Form.Label>
                        <Form.Control type='text' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={texts.addTransactionForm.amountPlaceholder}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>{texts.addTransactionForm.transactionTypeLabel}</Form.Label>
                        <Form.Select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} >
                            <option value={'credit'}>{texts.addTransactionForm.creditOption}</option>
                            <option value={'debit'}>{texts.addTransactionForm.debitOption}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>{texts.addTransactionForm.descriptionLabel}</Form.Label>
                        <Form.Control type='text' placeholder={texts.addTransactionForm.descriptionPlaceholder}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label >{texts.addTransactionForm.affectsBudgetLabel}</Form.Label>
                        <Form.Check type='radio' value={"yes"} label={texts.addTransactionForm.yesOption} checked={affectsBudget==="yes"} onChange={(e) => setAffectsBudget(e.target.value)} />
                        <Form.Check type='radio' value={"no"} label={texts.addTransactionForm.noOption} checked={affectsBudget==="no"} onChange={(e) => setAffectsBudget(e.target.value)} />
                    </Form.Group>
                    {
                        <>
                        {
                            affectsBudget==="yes" && 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>{texts.addTransactionForm.budgetSectionLabel}</Form.Label>
                                <Form.Select value={budgetSection} onChange={(e) => setBudgetSection(e.target.value)} >
                                    <option value={'income'}>{texts.addTransactionForm.incomeOption}</option>
                                    <option value={'expense'}>{texts.addTransactionForm.expenseOption}</option>
                                </Form.Select>
                            </Form.Group>
                        }
                        {
                            affectsBudget==="yes" && budgetSection==="income"? 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{texts.addTransactionForm.setIncomeNameLabel}</Form.Label>
                                <Form.Control type="text" placeholder={texts.addTransactionForm.incomeNamePlaceholder} />
                            </Form.Group>
                            : affectsBudget==="yes" && budgetSection==="expense"? 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>{texts.addTransactionForm.chooseExpenseLabel}</Form.Label>
                                <Form.Select value={expectedExpense} onChange={(e) => setExpectedExpense(e.target.value)}>
                                    <option value={''}>{texts.addTransactionForm.chooseExpenseOption}</option>
                                    {
                                        fetchExpense.map((val) => <option value={val.id} key={val.id}>{val.name}</option>)
                                    }
                                    <option value={'addNew'}>{texts.addTransactionForm.addNewOption}</option>
                                </Form.Select>
                                { expectedExpense==="addNew" && <Form.Control type='text' value={customExpense} onChange={(e) => setCustomExpense(e.target.value)} placeholder={texts.addTransactionForm.addNewExpensePlaceholder} />}
                            </Form.Group>
                            : ""
                        }
                        </>
                    }
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label >{texts.addTransactionForm.portfolioSectionLabel}</Form.Label>
                        <Form.Check type='radio' value={"yes"} label={texts.addTransactionForm.yesOption} checked={affectsPortfolio==="yes"} onChange={(e) => setAffectsPortfolio(e.target.value)} />
                        <Form.Check type='radio' value={"no"} label={texts.addTransactionForm.noOption} checked={affectsPortfolio==="no"} onChange={(e) => setAffectsPortfolio(e.target.value)} />
                    </Form.Group>
                    {
                        <>
                        {
                            affectsPortfolio==="yes" && 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>{texts.addTransactionForm.portfolioBudgetSectionLabel}</Form.Label>
                                <Form.Select value={portfolioSection} onChange={(e) => setPortfolioSection(e.target.value)} >
                                    <option value={'investments'}>{texts.addTransactionForm.investmentsOption}</option>
                                    { transactionType==="credit" && <option value={'debts'}>{texts.addTransactionForm.debtsOption}</option>}
                                    <option value={'receivables'}>{texts.addTransactionForm.receivablesOption}</option>
                                </Form.Select>
                            </Form.Group>
                        }
                        {
                            affectsPortfolio==="yes" && portfolioSection==="investments"? 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>{texts.addTransactionForm.chooseInvestmentLabel}</Form.Label>
                                <Form.Select value={expectedInvestment} onChange={(e) => setExpectedInvestment(e.target.value)}>
                                    <option value={''}>{texts.addTransactionForm.chooseInvestmentOption}</option>
                                    {
                                        fetchInvestments.investments.map((val) => <option value={val.name} key={val.investmentId}>{val.name}</option>)
                                    }
                                    <option value={'addNew'}>{texts.addTransactionForm.addNewOption}</option>
                                </Form.Select>
                                {   
                                    expectedInvestment==="addNew" &&
                                    <>
                                        <Form.Control type='text' value={customInvestment} onChange={(e) => setCustomInvestment(e.target.value)} placeholder={texts.addTransactionForm.addNewInvestmentPlaceholder} />
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                            <Form.Label>{texts.addTransactionForm.investmentTypeLabel}</Form.Label>
                                            <Form.Select value={investmentType} onChange={(e) => setInvestmentType(e.target.value)} >
                                                <option value={'onetime'}>{texts.addInvestmentForm.oneTimeOption}</option>
                                                <option value={'sip'}>{texts.addInvestmentForm.sipOption}</option>
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
                                <Form.Label>{texts.addTransactionForm.fromLabel} </Form.Label>
                                <Form.Control type='text' placeholder={texts.addTransactionForm.authorityPlaceholder} />
                            </Form.Group>
                            :""
                        }
                        </>
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={props.onHide}>{texts.addTransactionForm.submitButton}</Button>
                <Button variant='danger' onClick={props.onHide}>{texts.addTransactionForm.cancelButton}</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default AddTransactionForm