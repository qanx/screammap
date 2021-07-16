import logo from './logo.svg';
import { useState ,createRef,useEffect} from 'react';
// import './App.css';
import Canvas from '../components/canvas/can';
import NewCan from '../components/newCon/newCan';
import Cir from '../components/dot/dot';
function App() {

  const [pos, setpos] = useState([])


 const myRef = createRef();


//  useEffect(() => {
//   myRef.current.addEventListener('click',getPos)
//    return () => {
//     myRef.current.removeEventListener('click',getPos)
//    }
//  }, [myRef.current])
 

  const getPos = (e) => {
    let x = (e.pageX * 100) / window.innerWidth;
    let y = (e.pageY * 100) / window.innerHeight;
    console.log(x + "% - " + y);
   setpos({x,y})
   console.log(pos.x)
      
    
  };

  return (
    <div
     
     ref={myRef} onClick={getPos}>
       <Cir/>
    </div>
  );
}

export default App;
