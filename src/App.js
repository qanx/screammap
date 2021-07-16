import './App.css'
import {useState,useEffect} from 'react'
import Cir from './components/cir/cir.jsx'
import Input from './components/input/input'



 const App=()=> {
  
  const [items, setItems] = useState([  {id: 0, x: 16.893514811849478, y: 18.583042973286876 ,text:"d"},
    {id: 1, x: 52.602081665332264, y: 38.79210220673635 ,text:"d"}]);
  const [input, setInput] = useState('')

  const getPos = (e) => {

    if (input===""){
      console.warn("enter value")
    }
    else{
    let x = (e.pageX * 100) / window.innerWidth;
    let y = (e.pageY * 100) / window.innerHeight;
    let text=input;
    console.log(x + "% - " + y);
    // setItems({x,y})
    setItems([...items,{id:items.length,x,y,text:text}],checkiing()
   
   )
   setInput("")

  //   (prevState =>{
  //     return{
  //       [...prevState,{x,y}
  //         ]}
  //  })

      
 
  }
}


  //useing effect





const checkiing=()=>{
  console.info(items)
}

  return (
    <div className="App" >
      <Input input={input} setInput={setInput}  items={items}/>
      
      {items.map(items=> <Cir key={items.id} items={items}/>)}
      
      <img  onClick={getPos } src="https://i.picsum.photos/id/213/536/354.jpg?hmac=uR4LvY7i-5xHRT95H_5axefzY962e0SahoabNthg3zg"/>
      
      <h1>ssss</h1>
      
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
export default App;