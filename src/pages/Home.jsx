import UserDashboard from './UserDashboard';
import Login from './Login';
import { useSelector } from 'react-redux';
  
const Home = () => {
  const username = useSelector((state) => state.user.value.username);

  return (
    <>
        {username==null || username.trim()===""? <Login/> : <UserDashboard/>}
    </>
  )
}

export default Home