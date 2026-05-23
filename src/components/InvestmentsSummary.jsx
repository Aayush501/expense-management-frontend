import React, { lazy, Suspense, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Headings from '../constants/InvestmentSummaryHeadings';
import { Button } from 'react-bootstrap';
// import AddInvestmentForm from './forms/AddInvestmentForm';
// import EditInvestmentForm from './forms/EditInvestmentForm';
const AddInvestmentForm = lazy(() => import ("./forms/AddInvestmentForm"));
const EditInvestmentForm = lazy(() => import("./forms/EditInvestmentForm"));
import FormFallbacks from './fallbacks/FormFallbacks';
import usePortfolioData from '../data/PortfolioData';


const InvestmentsSummary = () => {

    const investmentData = usePortfolioData();
    const [showForm, setShowForm] = useState(false);
    const [showEditInvestment, setShowEditInvestment] = useState(false);
    const [editableInvestment, setEditableInvestment] = useState({serial:NaN});

    return (
        <>
            <div className='container my-2'>
                <Button variant="primary" onClick={() =>setShowForm(true)}>+ Add Investment</Button> 
                <Suspense fallback={<FormFallbacks/>}>
                    <AddInvestmentForm show={showForm} onHide={() => setShowForm(false)} />
                </Suspense>
            </div>
            <Table responsive>
                <thead>
                    <tr>
                        {Headings.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {investmentData.investments.map((val) => 
                        <tr key={val.serial}>
                            <td>
                                {val.serial}
                            </td>
                            <td>
                                {val.name}
                            </td>
                            <td>
                                {val.type}
                            </td>
                            <td>
                                {val.installment}
                            </td>
                            <td>
                                {val.cumulative}
                            </td>
                            <td>
                                {val.payment}
                            </td>
                            <td>
                                {val.currentValue}
                            </td>
                            <td>
                                <Button style={{marginTop:'-2px'}} size='sm' variant='info' onClick={()=>{setShowEditInvestment(true); setEditableInvestment(val)}}>edit?</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Suspense fallback={<FormFallbacks />}>
                <EditInvestmentForm show={showEditInvestment} onHide={() => setShowEditInvestment(false)} investment={editableInvestment} />
            </Suspense>
        </>
    )
}

export default React.memo(InvestmentsSummary);