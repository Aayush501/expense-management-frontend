import { useSelector } from "react-redux";

const useBudgetTableData = () => {
    const creditData = useSelector((state) => state.budget.credit);
    const debitData = useSelector((state) => state.budget.debit);
    const totals = useSelector((state) => state.total.value);
    return {
        credit : creditData,
        debit : debitData,
        totals : totals
    }
}

export default useBudgetTableData;