import React, { Suspense, useMemo } from 'react'
import { Table } from 'react-bootstrap'
import { creditHeadings, debitHeadings } from '../../constants/BudgetTableHeadings';
import useBudgetTableData from '../../data/BudgetTableData';

const BudgetTable = ({name="", month="", year=""}) => {

    const headings = name==="credit"? creditHeadings : debitHeadings;
    const data = useBudgetTableData();

    const showables = useMemo(() => {
        const desiredCreditData = month.length===0 || year.length===0? {values : []} : data.credit.find((val) => val.month===month && val.year===year);

        const desiredDebitData = month.length===0 || year.length===0? {values : []} : data.debit.find((val) => val.month===month && val.year===year)
        
        const desiredTotalsValue = month.length===0 || year.length===0? {values : []} : data.totals.find((val) => new Date(val.month).getMonth()===month && new Date(val.month).getFullYear()===year);
        
        return {
            creditDataToShow : desiredCreditData===undefined? [] : desiredCreditData.values,
            debtiDataToShow : desiredDebitData===undefined? [] : desiredDebitData.values,
            totalCreditAmount : desiredTotalsValue===undefined ? "" : desiredTotalsValue.totalCreditAmount,
            expectedExpenseAmount : desiredTotalsValue===undefined ? "" : desiredTotalsValue.totalExpectedExpenseAmount,
            actualExpenseAmount : desiredTotalsValue===undefined ? "" : desiredTotalsValue.totalActualExpenseAmount,
            previousSavings : desiredTotalsValue===undefined ? "" : desiredTotalsValue.previousSavings
        }
    }, [data, month, year]);

  return (
    <>
        <Table responsive striped>
            <thead>
                <tr>
                    {headings.map((val) => <td key={val}>{val}</td>)}
                </tr>
            </thead>
            <tbody>
                {
                    name==="credit"? 
                        <>
                        <tr>
                            <td>Previous Savings</td>
                            <td>{showables.previousSavings}</td>
                        </tr>
                        {showables.creditDataToShow.map((val) => 
                        <tr key={val.id}>
                            <td>{val.income}</td>
                            <td>{val.amount}</td>
                        </tr>)}
                        <tr>
                            <td>Total</td>
                            <td>{showables.totalCreditAmount}</td>
                        </tr>
                        </>
                    : 
                    <>
                    {showables.debtiDataToShow.map((val) =>     
                    <tr key={val.id}>
                        <td>{val.expectedExpense}</td>
                        <td>{val.expectedAmount}</td>
                        <td>{val.actualAmount}</td>
                    </tr>)}
                    <tr>
                        <td>Total</td>
                        <td>{showables.expectedExpenseAmount}</td>
                        <td>{showables.actualExpenseAmount}</td>
                    </tr>
                    </>
                }
            </tbody>
        </Table>
    </>
  )
}

export default BudgetTable;

