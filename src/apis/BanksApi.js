const getBanksDataForUser = async () => {
    const banksData = await fetch(`/data/BankData.json`)
    .then(async(res) => await res.json())

    if(banksData == null) alert("Error Fetching Banks Data!");
    return banksData;
}

export {getBanksDataForUser};