import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { emptyUser } from '../redux/slices/userSlice';
import { emptyBanks } from '../redux/slices/banksSlice';
import { emptyBudget } from '../redux/slices/budgetSlice';
import { emptyDebts } from '../redux/slices/debtsSlice';
import { emptyInvestments } from '../redux/slices/investmentsSlice';
import { emptyLedger } from '../redux/slices/ledgerSlice';
import { emptyReceivables } from '../redux/slices/receivablesSlice';
import { CircleUserRound } from 'lucide-react';


const NavbarAccountOptions = () => {

    const username = useSelector((state) => state.user.value.firstName);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(emptyUser());
        dispatch(emptyBanks());
        dispatch(emptyBudget());
        dispatch(emptyDebts());
        dispatch(emptyInvestments());
        dispatch(emptyLedger());
        dispatch(emptyReceivables());
    }

    const popover = (
        <Popover id="popover-basic" style={{ width: '18rem' }} >
            <Popover.Body style={{display : 'flex', flexDirection : 'column', gap : '1rem' }}>
                <Button variant="light">See Profile</Button>
                <Button variant="light" onClick={() => handleLogout()}>Logout</Button>
            </Popover.Body>
        </Popover>
    )

    return (
        <>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <Button variant="success">{`Hello ${username.toUpperCase()}`}   <CircleUserRound /></Button>
            </OverlayTrigger>
        </>
    );
}

export default NavbarAccountOptions;
