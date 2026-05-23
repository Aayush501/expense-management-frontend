import { useSelector } from "react-redux";
import { useMemo } from "react";

const useFetchExpenses = ({month, year}) => {
    const allDebits = useSelector((state) => state.budget.debit);
    const requiredDebits = useMemo(() => allDebits.find((val) => val.month===month && val.year===year), [allDebits, month, year]);
    return requiredDebits? requiredDebits.values : [];
}

export default useFetchExpenses;