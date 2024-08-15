

import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import './App.css'
import { CountContext } from './contenxt';
import { countAtom, evenSelector } from './stores/atoms/count';

function App() {
 
 
 //wrap anyone that wants to use teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      
    </div>
  )
}
function Count(){
  return (
    <div>
      <CountRerender />
      <Button />
      <EvenStatement />

    </div>
  )
  function CountRerender(){
    const count = useRecoilValue(countAtom);
    return (
      <div>
        {count}
      </div>
    )
  }

}
function Button(){
  const [count,setCount]= useRecoilState(countAtom);
  return (
    <div>
      <button onClick={()=>{
          setCount(count+1)
      }}>Increase</button>
      <button onClick={()=>{
        setCount(count-1)
      }}>Decrease</button>
    </div>
  )
}

function EvenStatement(){
  const isEven = useRecoilValue(evenSelector);
  
  return <div>
    {isEven?"It is even":""}
  </div>
}

export default App
