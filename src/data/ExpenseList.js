import { useSelector } from "react-redux";

const useFetchExpenses = () => {
    const allDebits = useSelector((state) => state.budget.debit);
    const requiredDebits = allDebits.map((val) => {
        return {
            id : val.id,
            name : val.expenseName
        }
    });
    return requiredDebits? requiredDebits : [];
}

export default useFetchExpenses;