import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { texts } from "../../application-texts/ApplicationTexts";
import { Table } from "react-bootstrap";
import { fetchBanks } from "../../redux/slices/banksSlice";
import { useEffect } from "react";

const BalanceSummaryTable = () => {
  const dispatch = useDispatch();

  const {banks} = useSelector((state) => ({
    banks : state.banks.value
  }), shallowEqual);

  const getTotalBalance = () => {
    return banks.length>0? banks.map(i => i.balance).reduce((p,c) => p+c): 0;
  }

  useEffect(() => {
    dispatch(fetchBanks({}));
  }, []);

  return (
    <>
      {banks.length>0? 
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              {
                banks.map((bank) => {
                  return <th key={bank.id}>{bank.name}</th>
                })
              }
              <th>{texts.balanceSummaryTable.total}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{texts.balanceSummaryTable.currentBalance}</td>
              {
                banks.map((i, index) => {
                  return <td key={index}>{i.balance}</td>
                })
              }
              <td>{getTotalBalance()}</td>
            </tr>
          </tbody>
        </Table>
        :
        <>
          {texts.balanceSummaryTable.dataLoading}
        </>
      }
    </>
  )
}

export default BalanceSummaryTable