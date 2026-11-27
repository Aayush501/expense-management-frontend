import { shallowEqual, useSelector } from 'react-redux';
import { texts } from '../../application-texts/ApplicationTexts';
import { Table } from 'react-bootstrap';

const LedgerSummaryTable = ({}) => {
    const {banks} = useSelector((state) => ({banks : state.banks.value}), shallowEqual);

    const credits = useSelector((state) => state.ledger.summary.credit);
    const debits = useSelector((state) => state.ledger.summary.debit);
    const netCreditOrDebit = useSelector((state) => state.ledger.summary.netCOrD);

    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        {
                            banks.map((i, index) => {
                                return <th key={index}>{i.name}</th>
                            })
                        }
                        <th>{texts.transactionTable.ledgerSummary.total}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{texts.transactionTable.ledgerSummary.credit}</td>
                        {
                            banks.map((val) => {
                                return <td key={val.id}>{credits[val.id]? credits[val.id] : 0}</td>
                            })
                        }
                        <td>
                        {credits.total? credits.total : 0}
                        </td>
                    </tr>
                    <tr>
                        <td>{texts.transactionTable.ledgerSummary.debit}</td>
                        {
                            banks.map((val) => {
                                return <td key={val.id}>{debits[val.id]? debits[val.id] : 0}</td>
                            })
                        }
                        <td>
                        {debits.total? debits.total : 0}
                        </td>
                    </tr>
                    <tr>
                        <td>{texts.transactionTable.ledgerSummary.netCreditOrDebit}</td>
                        {
                            banks.map((val) => {
                                return <td key={val.id}>{netCreditOrDebit[val.id] == undefined? 0 : netCreditOrDebit[val.id].amount}</td>
                            })
                        }
                        <td>
                        {netCreditOrDebit.total.amount? netCreditOrDebit.total.amount : 0}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default LedgerSummaryTable