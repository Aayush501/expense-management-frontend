import { lazy, Suspense, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { investments, debts, receivables } from '../constants/PortfolioTabOptions';
import TableFallbacks from './fallbacks/TableFallbacks';

const InvestmentsSummary = lazy(() => import("./InvestmentsSummary"));
const DebtsTable = lazy(() => import("./tables/DebtsTable"));
const InvestmentsLedger = lazy(() => import("./InvestmentsLedger"));
const ReceivablesTable = lazy(() => import("./tables/ReceivablesTable"));


const PortfolioTabs = ({name}) => {
    const options = name==="INVESTMENTS"? investments :name==="DEBTS"? debts : receivables;
    const [key, setKey] = useState(options[1]);

    return (
        <>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey={`${options[1]}`} title={`${options[1]}`}>
                    {
                        name==="INVESTMENTS"? 
                        <Suspense fallback={<TableFallbacks />}>
                            <InvestmentsSummary/> 
                        </Suspense>
                        :name==="DEBTS"? 
                        <Suspense fallback={<TableFallbacks />}>
                            <DebtsTable statusProp={"REMAINING"} /> 
                        </Suspense>
                        :
                        <Suspense fallback={<TableFallbacks/>}>
                            <ReceivablesTable status={"REMAINING"} />
                        </Suspense>
                    }
                </Tab>
                <Tab eventKey={`${options[2]}`} title={`${options[2]}`}>
                    {
                        name==="INVESTMENTS"? 
                        <Suspense fallback={<TableFallbacks />}>
                            <InvestmentsLedger/> 
                        </Suspense>
                        :name==="DEBTS"? 
                        <Suspense fallback={<TableFallbacks />}>
                            <DebtsTable statusProp={"PAID"} /> 
                        </Suspense>
                        :
                        <Suspense fallback={<TableFallbacks/>}>
                            <ReceivablesTable status={"RECEIVED"} />
                        </Suspense>
                    }
                </Tab>
            </Tabs>
        </>
    )
}

export default PortfolioTabs;