import './App.css'
import {useState,useEffect} from 'react'
import Cir from './components/cir/cir.jsx'




 const App=()=> {
  
  const [items, setItems] = useState([]);


  const getPos = (e) => {
    let x = (e.pageX * 100) / window.innerWidth;
    let y = (e.pageY * 100) / window.innerHeight;
    console.log(x + "% - " + y);
    // setItems({x,y})
    setItems([...items,{id:items.length,x,y}],checkiing()
   )

  //   (prevState =>{
  //     return{
  //       [...prevState,{x,y}
  //         ]}
  //  })

      
 
  }



  //useing effect





const checkiing=()=>{
  console.info(items)
}

  return (
    <div className="App" >
      
      <input />
      {items.map(items=> <Cir key={items.id} items={items}/>)}
      
      <img  onClick={getPos } src="https://i.picsum.photos/id/213/536/354.jpg?hmac=uR4LvY7i-5xHRT95H_5axefzY962e0SahoabNthg3zg"/>
      
      <h1>ssss</h1>
      
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
export default App;