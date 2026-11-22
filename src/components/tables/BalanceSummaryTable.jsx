import { shallowEqual, useSelector } from "react-redux";
import { texts } from "../../application-texts/ApplicationTexts";
import { Table } from "react-bootstrap";

const BalanceSummaryTable = () => {

  const {banks} = useSelector((state) => ({
    banks : state.banks.value
  }), shallowEqual);

  const getTotalBalance = () => {
    return banks.length>0? banks.map(i => i.balance).reduce((p,c) => p+c): 0;
  }

  return (
    <>
      <div className='tbl-name'>
        <h3>{texts.userDashboardHomePage.balanceSummary}</h3>
      </div>
      {banks.length>0? 
        <div className="mx-5">
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
        </div>
        :
        <>
          {texts.balanceSummaryTable.dataLoading}
        </>
      }
    </>
  )
}

export default BalanceSummaryTable