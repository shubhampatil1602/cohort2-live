import { atom, selector } from 'recoil';

export const networkAtom = atom({
  key: 'networkAtom',
  default: 102,
});

export const jobsAtom = atom({
  key: 'jobsAtom',
  default: 3,
});

export const messagingAtom = atom({
  key: 'messagingAtom',
  default: 2,
});

export const notificationsAtom = atom({
  key: 'notificationsAtom',
  default: 12,
});

export const sumSelector = selector({
  key: 'sumSelector',
  get: ({ get }) => {
    return (
      get(networkAtom) +
      get(jobsAtom) +
      get(messagingAtom) +
      get(notificationsAtom)
    );
  },
});
