import './App.css'
import { Route, Routes } from 'react-router-dom';
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
          <Route path='/' element={<UserDashBoardHome/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/user/profile' element={<UserProfilePage />} />
          <Route path='/ledger' element={<Ledger />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/budget' element={<Budget />} />
          <Route path='/user/banks' element={<BankManagement />} />
        </Routes>
      </>
      }
    </>
  )
}

export default App
