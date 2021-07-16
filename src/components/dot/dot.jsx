import React from 'react'
import '../newcss.css'

const Cir = ({coords}) => {
    return (
        <div>
              
        <span id="circle"></span>
        <span id="circle"></span>
        <span style={{left:coords.x+"%" ,top:coords.y+"%" }} id="circle"></span>
        </div>
    )
}

export default Cir
