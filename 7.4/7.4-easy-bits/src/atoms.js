import { atom, selector } from "recoil";

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

//Aggreagtor
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const jobsAtomCount = get(jobsAtom);
    const notificationsAtomCount = get(notificationsAtom);
    const messagingAtomCount = get(messagingAtom);
    return jobsAtomCount + notificationsAtomCount + messagingAtomCount;
  },
});

export const testAtom = atom({
  key: "testAtom",
  default: 0,
});

//Aggregator seletor
export const aggregatorSelector = selector({
  key: "aggregatorSelector",
  get: ({ get }) => {
    const totalNotificationSelectorCount = get(totalNotificationSelector);
    const testAtomCount = get(testAtom);

    return testAtomCount + totalNotificationSelectorCount;
  },
});
