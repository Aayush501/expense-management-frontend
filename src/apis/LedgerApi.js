import { emptyLedgerSummaryObject } from "../constants/EmptyObjects";

export const fetchLedgerForUser = async () => {
    const ledgerData = await fetch('/data/LedgerData.json')
    .then(async(res) => await res.json());
    return ledgerData;
}

export const fetchLedgerForBank = async (bankId) => {
    const ledgerData = await fetch(`/data/LedgerData.json`)
    .then(async(res) => await res.json())
    .then((data) => {
        const bankLedger = data.filter(obj =>{
            return obj.bankId.toLowerCase() === bankId.toLowerCase()});
        return bankLedger;
    });
    return ledgerData;
}

export const fetchLedgerSummary = async (month, year) => {
    const summaryData = await fetch(`/data/MonthLedgerSummary.json`)
    .then(async (res) => await res.json())
    .then((data) => {
        const dataFilteration = data.find(val => val.month === month && val.year === year);
        return dataFilteration==undefined || dataFilteration==null? emptyLedgerSummaryObject : dataFilteration;
    });
    return summaryData;
}