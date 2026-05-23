import { useSelector } from "react-redux";

const useStart = () => {
    const startDate = useSelector((state) => state.user.startDay);
    return startDate;
}

export default useStart;