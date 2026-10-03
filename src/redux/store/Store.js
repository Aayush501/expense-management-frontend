import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice'
import banksReducer from '../slices/banksSlice'
import ledgerReducer from '../slices/ledgerSlice'
import debtsReducer from '../slices/debtsSlice'
import receivablesReducer from '../slices/receivablesSlice'
import investmentsReducer from '../slices/investmentsSlice'
import budgetReducer from '../slices/budgetSlice'


export const store = configureStore({
  reducer: {
    user : userReducer,
    banks : banksReducer,
    ledger : ledgerReducer,
    debts : debtsReducer,
    receivables : receivablesReducer,
    investments : investmentsReducer,
    budget : budgetReducer
  }
})