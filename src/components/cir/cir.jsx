import React from 'react'
import './cir.css'

const Cir = ({items}) => {
    return (
        <div>
              
        <h6 id="text" style={{left:items.x+"%" ,top:items.y+"%" }}>{items.x+" y :"+items.y}</h6>
        <span style={{left:items.x+"%" ,top:items.y+"%" }} id="circle"></span>
        </div>
    )
}

export default Cir
