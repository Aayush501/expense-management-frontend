import { useSelector } from "react-redux"

const useFetchBanks = () => {
    const banks = useSelector((state)=>state.banks.value);
    const bankNames = banks.map((val) => val.name);
    return bankNames;
}

export default useFetchBanks;