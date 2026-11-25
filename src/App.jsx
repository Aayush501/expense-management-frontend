import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Ledger from './pages/Ledger';
import Portfolio from './pages/Portfolio';
import Budget from './pages/Budget';
import NavigationBar from './components/Navigationbar';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import UserDashBoardHome from './pages/UserDashBoardHome';
import BankManagement from './pages/BankManagement';
import UserProfilePage from './pages/UserProfile';
import BalanceSummaryTable from './components/tables/BalanceSummaryTable';
import LedgerSummaryComponent from './components/LedgerSummaryComponent';
import PortfolioTabs from './components/PortfolioTabs';
import InvestmentsSummary from './components/InvestmentsSummary';
import InvestmentsLedger from './components/InvestmentsLedger';
import DebtsTable from './components/tables/DebtsTable';
import ReceivablesTable from './components/tables/ReceivablesTable';


function App() {

  const username = useSelector((state) => state.user.value.username);

  return (
    <>
      {username==null || username.trim()===""? <Login/> 
        : 
      <>
        <div className='navigation' >
            <NavigationBar />
        </div>
        <Routes>
          <Route path='/' element={<UserDashBoardHome />} >
            <Route index element={<Navigate to="balanceSummary" replace />} />
            <Route path='/balanceSummary' element={<BalanceSummaryTable />} />
            <Route path='/ledgerSummary' element={<LedgerSummaryComponent />} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/user/profile' element={<UserProfilePage />} />
          <Route path='/ledger' element={<Ledger />} />
          <Route path='/portfolio' element={<Portfolio />} >
            <Route path='investments' element={<PortfolioTabs name={"INVESTMENTS"} />}>
              <Route path='summary' element={<InvestmentsSummary />} />
              <Route path='ledger' element={<InvestmentsLedger />} />
            </Route>
            <Route path='debts' element={<PortfolioTabs name={"DEBTS"} />}>
              <Route path='remaining' element={<DebtsTable statusProp={"REMAINING"} />} />
              <Route path='paid' element={<DebtsTable statusProp={"PAID"} />} />
            </Route>
            <Route path='receivables' element={<PortfolioTabs name={"receivables"} />}>
              <Route path='remaining' element={<ReceivablesTable status={"REMAINING"} />} />
              <Route path='received' element={<ReceivablesTable status={"RECEIVED"} />} />
            </Route>
          </Route>
          <Route path='/budget' element={<Budget />} />
          <Route path='/user/banks' element={<BankManagement />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </>
      }
    </>
  )
}

export default App
