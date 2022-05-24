import { Fragment, useState, useEffect, StrictMode } from 'react';
import AccountMenu from './components/AccountMenu'
import CardStudent from './components/CardStudent'
import FeesPaid from './components/FeesPaid'
import FutureInstallments from './components/FutureInstallments'
import PendingInstallments from './components/PendingInstallments'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import * as API from './api/service';

export function App() {
  const [student, setStudent] = useState({});
  const [school, setSchool] = useState({});
  const [totaltoPay, settTtaltoPay] = useState(0);
  const [feesPaidState, setFeesPaidState] = useState([]);
  const [pendingInstallmentsState, setPendingInstallmentsState] = useState([]);
  const [futureInstallmentsState, setFutureInstallmentsState] = useState([]);

  useEffect(() => {
    API.getStudent()
      .then((res) => {
        setStudent(res);
        setSchool(res.school)
      })
      .catch(console.log);

    API.getStudentOrders()
      .then((res) => {
        let apiGetFeesPaid = API.getFeesPaid();
        setFeesPaidState(apiGetFeesPaid);
        let apiPendingInstallments = API.getPendingInstallments();
        setPendingInstallmentsState(apiPendingInstallments);
        let apiFutureInstallments = API.getFutureInstallments();
        setFutureInstallmentsState(apiFutureInstallments);
      })
      .catch(console.log);
  }, []);

  const changeSetTotaltoPay = (item, checked) => {
    let { price, interest } = item;
    if (checked) {
      price = Number(price) + Number(interest);
      settTtaltoPay(price);
    } else {
      settTtaltoPay(0);
    }
  };

  return (
    <StrictMode>
      <Fragment>
        <AccountMenu school={school} />
        <Box sx={ {padding : '0 2rem'} } >
          <CardStudent student={student} totaltoPay={totaltoPay} />
          <FeesPaid feesPaidState={feesPaidState} />
          <PendingInstallments pendingInstallmentsState={pendingInstallmentsState} changeSetTotaltoPay={changeSetTotaltoPay} />
          <FutureInstallments futureInstallmentsState={futureInstallmentsState} changeSetTotaltoPay={changeSetTotaltoPay} />

          {totaltoPay > 0 ?
            (
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <Button sx={{}} size="medium" variant="contained" disableElevation>
                  IR A PAGAR
                </Button>
              </Box>
            )
            : (<div></div>)
          }

        </Box>
      </Fragment>
    </StrictMode>
  )
}
