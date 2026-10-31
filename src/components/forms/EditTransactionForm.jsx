import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { texts } from "../../application-texts/ApplicationTexts";
import useFetchExpenses from '../../data/ExpenseList';
import usePortfolioData from '../../data/PortfolioData';

const EditTransactionForm = (props) => {

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
                    {texts.editTransactionForm.title} With Serial Number : {props.transaction.serial}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{texts.editTransactionForm.chooseDateLabel}</Form.Label>
                        <Form.Control value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>{texts.editTransactionForm.amountLabel}</Form.Label>
                        <Form.Control type='text' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={texts.editTransactionForm.amountPlaceholder}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>{texts.editTransactionForm.transactionTypeLabel}</Form.Label>
                        <Form.Select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} >
                            <option value={'credit'}>{texts.editTransactionForm.creditOption}</option>
                            <option value={'debit'}>{texts.editTransactionForm.debitOption}</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>{texts.editTransactionForm.descriptionLabel}</Form.Label>
                        <Form.Control type='text' placeholder={texts.editTransactionForm.descriptionPlaceholder}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label >{texts.editTransactionForm.affectsBudgetLabel}</Form.Label>
                        <Form.Check type='radio' value={"yes"} label={texts.editTransactionForm.yesOption} checked={affectsBudget==="yes"} onChange={(e) => setAffectsBudget(e.target.value)} />
                        <Form.Check type='radio' value={"no"} label={texts.editTransactionForm.noOption} checked={affectsBudget==="no"} onChange={(e) => setAffectsBudget(e.target.value)} />
                    </Form.Group>
                    {
                        <>
                        {
                            affectsBudget==="yes" && 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>{texts.editTransactionForm.budgetSectionLabel}</Form.Label>
                                <Form.Select value={budgetSection} onChange={(e) => setBudgetSection(e.target.value)} >
                                    <option value={'income'}>{texts.editTransactionForm.incomeOption}</option>
                                    <option value={'expense'}>{texts.editTransactionForm.expenseOption}</option>
                                </Form.Select>
                            </Form.Group>
                        }
                        {
                            affectsBudget==="yes" && budgetSection==="income"? 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{texts.editTransactionForm.setIncomeNameLabel}</Form.Label>
                                <Form.Control type="text" placeholder={texts.editTransactionForm.incomeNamePlaceholder} />
                            </Form.Group>
                            : affectsBudget==="yes" && budgetSection==="expense"? 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>{texts.editTransactionForm.chooseExpenseLabel}</Form.Label>
                                <Form.Select value={expectedExpense} onChange={(e) => setExpectedExpense(e.target.value)}>
                                    <option value={''}>{texts.editTransactionForm.chooseExpenseOption}</option>
                                    {
                                        fetchExpense.map((val) => <option value={val.id} key={val.id}>{val.name}</option>)
                                    }
                                    <option value={'addNew'}>{texts.editTransactionForm.addNewOption}</option>
                                </Form.Select>
                                { expectedExpense==="addNew" && <Form.Control type='text' value={customExpense} onChange={(e) => setCustomExpense(e.target.value)} placeholder={texts.editTransactionForm.addNewExpensePlaceholder} />}
                            </Form.Group>
                            : ""
                        }
                        </>
                    }
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                        <Form.Label >{texts.editTransactionForm.portfolioSectionLabel}</Form.Label>
                        <Form.Check type='radio' value={"yes"} label={texts.editTransactionForm.yesOption} checked={affectsPortfolio==="yes"} onChange={(e) => setAffectsPortfolio(e.target.value)} />
                        <Form.Check type='radio' value={"no"} label={texts.editTransactionForm.noOption} checked={affectsPortfolio==="no"} onChange={(e) => setAffectsPortfolio(e.target.value)} />
                    </Form.Group>
                    {
                        <>
                        {
                            affectsPortfolio==="yes" && 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>{texts.editTransactionForm.portfolioBudgetSectionLabel}</Form.Label>
                                <Form.Select value={portfolioSection} onChange={(e) => setPortfolioSection(e.target.value)} >
                                    <option value={'investments'}>{texts.editTransactionForm.investmentsOption}</option>
                                    { transactionType==="credit" && <option value={'debts'}>{texts.editTransactionForm.debtsOption}</option>}
                                    <option value={'receivables'}>{texts.editTransactionForm.receivablesOption}</option>
                                </Form.Select>
                            </Form.Group>
                        }
                        {
                            affectsPortfolio==="yes" && portfolioSection==="investments"? 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>{texts.editTransactionForm.chooseInvestmentLabel}</Form.Label>
                                <Form.Select value={expectedInvestment} onChange={(e) => setExpectedInvestment(e.target.value)}>
                                    <option value={''}>{texts.editTransactionForm.chooseInvestmentOption}</option>
                                    {
                                        fetchInvestments.investments.map((val) => <option value={val.name} key={val.investmentId}>{val.name}</option>)
                                    }
                                    <option value={'addNew'}>{texts.editTransactionForm.addNewOption}</option>
                                </Form.Select>
                                {   
                                    expectedInvestment==="addNew" &&
                                    <>
                                        <Form.Control type='text' value={customInvestment} onChange={(e) => setCustomInvestment(e.target.value)} placeholder={texts.editTransactionForm.addNewInvestmentPlaceholder} />
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                            <Form.Label>{texts.editTransactionForm.investmentTypeLabel}</Form.Label>
                                            <Form.Select value={investmentType} onChange={(e) => setInvestmentType(e.target.value)} >
                                                <option value={'onetime'}>{texts.editInvestmentForm.oneTimeOption}</option>
                                                <option value={'sip'}>{texts.editInvestmentForm.sipOption}</option>
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
                                <Form.Label>{texts.editTransactionForm.fromLabel} </Form.Label>
                                <Form.Control type='text' placeholder={texts.editTransactionForm.authorityPlaceholder} />
                            </Form.Group>
                            :""
                        }
                        </>
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success' onClick={props.onHide}>{texts.editTransactionForm.submitButton}</Button>
                <Button variant='danger' onClick={props.onHide}>{texts.editTransactionForm.cancelButton}</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default EditTransactionForm;