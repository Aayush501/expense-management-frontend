const fetchRemainingDebtsForUser = async () => {
    const debts = await fetch('/data/DebtData.json')
    .then(async(res) => await res.json())
    .then((data) => {
        return data.filter(debt => debt.status === "REMAINING")
    });
    
    return debts;
}

const fetchPaidDebtsForUser = async () => {
    const debts = await fetch('/data/DebtData.json')
    .then(async(res) => await res.json())
    .then((data) => {
        return data.filter(debt => debt.status === "PAID")
    });
    
    return debts;
}

export {fetchRemainingDebtsForUser, fetchPaidDebtsForUser}