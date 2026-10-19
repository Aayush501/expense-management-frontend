import React, { lazy, Suspense, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Headings from '../constants/InvestmentSummaryHeadings';
import { Button } from 'react-bootstrap';
const AddInvestmentForm = lazy(() => import ("./forms/AddInvestmentForm"));
const EditInvestmentForm = lazy(() => import("./forms/EditInvestmentForm"));
import { useSelector } from 'react-redux';
import ItemFallback from './fallbacks/ItemFallback';

const InvestmentsSummary = () => {
    const investmentData = useSelector((state) => state.investments.value);
    const [showForm, setShowForm] = useState(false);
    const [showEditInvestment, setShowEditInvestment] = useState(false);
    const [editableInvestment, setEditableInvestment] = useState({serial:NaN});

    return (
        <>
            <div className='container my-2'>
                <Button variant="primary" onClick={() =>setShowForm(true)}>+ Add Investment</Button> 
                <Suspense fallback={<ItemFallback item={"Add Investment Form"}/>}>
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
                    {investmentData.length>0 && investmentData.map((val) => 
                        <tr key={val.investmentId}>
                            <td>
                                {0}
                            </td>
                            <td>
                                {val.investmentId}
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
            <Suspense fallback={<ItemFallback item={"Edit Investment Form"} />}>
                <EditInvestmentForm show={showEditInvestment} onHide={() => setShowEditInvestment(false)} investment={editableInvestment} />
            </Suspense>
        </>
    )
}

export default React.memo(InvestmentsSummary);