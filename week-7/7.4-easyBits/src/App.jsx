import './App.css'
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'

// Recoil root

function App() {
  return <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const [messagingNotificationCount, setmessagingNotificationCount] = useRecoilState(messagingAtom);
  const notoficationCount = useRecoilValue(notificationAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>home</button>
      <button>my network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>jobs ({jobsNotificationCount})</button>
      <button>messaging ({messagingNotificationCount})</button>
      <button>notofication ({notoficationCount})</button>
      <button>me ({totalNotificationCount})</button>
    </div>
  )
}

export default App
