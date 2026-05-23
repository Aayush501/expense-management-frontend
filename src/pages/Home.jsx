import { useEffect } from 'react';
// import React, { useContext } from 'react'
// import AppContext from '../AppContext'
import UserDashboard from './UserDashboard';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import Data from '../data/FetchData';
import { setName, setStartDay } from '../redux/slices/userSlice';
import { banksFetchedSuccessfully } from '../redux/slices/banksSlice';
import { ledgerFetchedSuccessfully } from '../redux/slices/ledgerSlice';
import { debtsFetchedSuccessfully } from '../redux/slices/debtsSlice';
import { receivablesFetchedSuccessfully } from '../redux/slices/receivablesSlice';
import { investmentsFetchedSuccessfully } from '../redux/slices/investmentsSlice';
import { budgetFetchedSuccessfully } from '../redux/slices/budgetSlice';
import { totalsFetchedSuccessfully } from '../redux/slices/totalSlice';
  
const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    const getUserData = () => {
      dispatch(setStartDay(new Date(Data.start).toISOString()));
      dispatch(setName(Data.name));
      
      dispatch(banksFetchedSuccessfully(Data.banks));

      const ledgerEntries = Data.ledger.map((val) => 
        ({
          serial:val.serial, 
          date:new Date(val.date).toISOString(), 
          description:val.description, 
          amount:val.amount, 
          transactionType:val.transactionType, 
          bankName: val.bankName, 
          balance: val.balance, 
          investment:val.investment, 
          investmentName: val.investmentName, 
          investmentType: val.investmentType
        })
      );
      dispatch(ledgerFetchedSuccessfully(ledgerEntries));

      const debtEntries = Data.debts.map(val => ({
          from:val.from, 
          amount:val.amount, 
          date:new Date(val.date).toISOString(), 
          description:val.description, 
          status:val.status
        })
      );
      dispatch(debtsFetchedSuccessfully(debtEntries));

      const receivableEntries = Data.receivables.map(val => ({
          from:val.from, 
          amount:val.amount, 
          date:new Date(val.date).toISOString(), 
          description:val.description, 
          status:val.status
        })
      );
      dispatch(receivablesFetchedSuccessfully(receivableEntries));

      dispatch(investmentsFetchedSuccessfully(Data.investments));

      dispatch(budgetFetchedSuccessfully({credit : Data.budget.credit, debit : Data.budget.debit}));

      dispatch(totalsFetchedSuccessfully(Data.total));
    }
    getUserData();
  }, [username, dispatch]);


  // const {username} = useContext(AppContext);

  return (
    <>
        {username.trim()===""? <Login/> : <UserDashboard/>}
    </>
  )
}

export default Home