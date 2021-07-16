import React, { useRef, useEffect, useState,useCallback } from "react";
import "./can.css";
const Canvas = () => {
  const [bg, setBg] = useState(null);
  const canvas = useRef(null);
  const [coords, setCoords] = useState([]);

  //on load only once if [] ealse keep update if changes

  useEffect(() => {
    const bg = new Image();
    bg.src = "https://www.w3schools.com/tags/img_the_scream.jpg";
    bg.onload = () => setBg(bg);
  }, []);

    
  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
//   const handler = useCallback(
//     (e ) => {
//       // Update coordinates
//       let x = (e.pageX * 100) / window.innerWidth;
//       let y = (e.pageY * 100) / window.innerHeight;
//       setCoords([x]);
//       console.info(coords)
//     },
//     [setCoords,coords]
//   );
  
  
  const getPos = (e) => {
    let x = (e.pageX * 100) / window.innerWidth;
    let y = (e.pageY * 100) / window.innerHeight;
    console.log(x + "% - " + y);
    setCoords([...coords,[y,x]])
    let ccc=canvas.current.getContext("2d")
    ccc.fillRect(6,6,10,10)
    ccc.drawImage(bg, 0, 0, x, y);
    console.info(coords) 
    
  };


  useEffect(() => {
    if (bg && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.drawImage(bg, 0, 0, window.innerWidth, window.innerHeight);
    //   canvas.current.addEventListener("click", getPos);
        
       ctx.fillRect(6,6,10,10)
    }
  }, [bg, canvas,coords]);

  return (
    <div>
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvas}
        onMouseDown={
            getPos
        }
      />
    </div>
  );
};

export default Canvas;

//   const canvasRef = useRef(null)
//   const imgsr = "https://www.w3schools.com/tags/img_the_scream.jpg"
//   useEffect(() => {
//     let caaa = document.getElementById("e")
//     const canvas = canvasRef.current
//     const context = canvas.getContext('2d')
//     //Our first draw
//     context.fillStyle = 'pink'
//     context.drawImage(imgsr, 0,0, context.canvas.width, context.canvas.height)
//   }, [])

//   return <canvas id="e" ref={canvasRef} {...props}/>
// }

// export default Canvas
