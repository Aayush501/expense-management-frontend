import { shallowEqual, useSelector } from "react-redux";

const useLedgerData = () => {
    const {ledgerEntries} = useSelector((state) => ({ledgerEntries: state.ledger.value}), shallowEqual);

    return {
        ledgerEntries: ledgerEntries
    }
}

export default useLedgerData;
