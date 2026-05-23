import { useSelector } from "react-redux"

const usePortfolioData = () => {
    return {
        investments : useSelector((state) => state.investments.value),
        debts : useSelector((state) => state.debts.value),
        receivables : useSelector((state) => state.receivables.value)
    }
} 

export default usePortfolioData;