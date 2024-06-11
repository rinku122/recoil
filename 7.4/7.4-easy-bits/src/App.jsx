import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  aggregatorSelector,
  jobsAtom,
  messagingAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messagingAtomCount, setMessageCount] = useRecoilState(messagingAtom);

  //If want to set and get the state
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  const aggregatorSelectorCount = useRecoilValue(aggregatorSelector);

  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
  // }, [networkNotificationCount, jobsAtomCounnotificationsAtomCountt, notificationsAtomCount, messagingAtomCount])

  return (
    <>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Total ({totalNotificationCount})</button>

      <button onClick={() => setMessageCount((e) => e + 1)}>
        MessgaeCount
      </button>

      <AnotherComponent />

      <button>aggregatorSelectorCount ({aggregatorSelectorCount})</button>
    </>
  );
}

const AnotherComponent = () => {
  //Only set
  const setmessageCount = useSetRecoilState(notificationsAtom);
  return (
    <button onClick={() => setmessageCount((e) => e + 1)}>
      Click to incremnet from Another Component
    </button>
  );
};

export default App;
