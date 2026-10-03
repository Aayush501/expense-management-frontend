const fetchBudgetForSpecificMonthForUser = async (month, year) => {
    const budget = await fetch(`/data/BudgetData.json`)
    .then(async(res) => await res.json())
    .then(data => {
        return data.filter((val) => {
            return val.month===month && val.year===year}
        )
    });

    if(budget.length===0) return [];

    return budget[0];
}

export {fetchBudgetForSpecificMonthForUser}