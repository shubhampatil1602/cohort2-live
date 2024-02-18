import { useEffect, useState } from 'react';

function App2() {
  const isOnline = useIsOnline();
  return <div>{isOnline ? 'You are online yay!' : 'You are offline!'}</div>;
}

function useIsOnline() {
  // window.addEventListener('online', () => console.log('user is online'));
  // window.addEventListener('offline', () => console.log('user is offline'));
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, []);
  return isOnline;
}

export default App2;
