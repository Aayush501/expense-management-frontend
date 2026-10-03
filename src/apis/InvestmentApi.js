const fetchInvestmentsforUser = async () => {
    const investments = await fetch('/data/InvestmentData.json')
    .then(async(res) => await res.json());

    return investments;
}

const fetchInvestmentLedger = async () => {
    const investmentLedger = await fetch('/data/InvestmentLedger.json')
    .then(async(res) => await res.json());

    return investmentLedger;
}

export {fetchInvestmentsforUser, fetchInvestmentLedger}