import { RecoilRoot, useRecoilValue } from 'recoil';
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  sumSelector,
} from './store/atoms/atoms';

const App = () => {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
};

const MainApp = () => {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);

  const sum = useRecoilValue(sumSelector);
  return (
    <div>
      <button>Home</button>

      <button>My Network ({networkCount > 100 ? '99+' : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notifications({notificationsCount})</button>

      <button>Me ({sum})</button>
    </div>
  );
};

export default App;
