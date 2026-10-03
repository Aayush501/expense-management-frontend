const fetchRemainingReceivablesForUser = async () => {
    const receivables = await fetch('/data/ReceivableData.json')
    .then(async(res) => await res.json())
    .then((data) => {
        return data.filter(receivable => receivable.status === "REMAINING")
    });
    
    return receivables;
}

const fetchReceivedReceivablesForUser = async () => {
    const receivables = await fetch('/data/ReceivableData.json')
    .then(async(res) => await res.json())
    .then((data) => {
        return data.filter(receivable => receivable.status === "RECEIVED")
    });

    return receivables;
}

export {fetchReceivedReceivablesForUser, fetchRemainingReceivablesForUser}