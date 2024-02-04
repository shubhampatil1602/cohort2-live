import { Appbar } from './Appbar';
import { Balance } from './Balance';
import { Users } from './Users';

const Dashboard = () => {
  return (
    <>
      <Appbar />
      <Balance value={3000} />
      <Users />
    </>
  );
};
export default Dashboard;
