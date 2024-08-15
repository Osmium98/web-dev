
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, networkAtom, notificationAtom, messagingAtom, totalCountSelector } from './atoms'

function App(){
  return (
    <div>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </div>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom)

  const totalNotificationCount = useRecoilValue(totalCountSelector)
  return (
    <>
      <RecoilRoot>
        <button>Home</button>
        <button>My network ({networkNotificationCount})</button>
        <button>Jobs ({jobNotificationCount})</button>
        <button>Messaging ({messagingNotificationCount})</button>
        <button>Notification ({notificationCount})</button>

        <button >Me ({totalNotificationCount})</button>
      </RecoilRoot>
    </>
  )
}

export default App
