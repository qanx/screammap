import React from 'react'

function Input({items,input,setInput}) {
    return (
        <div>

            <input value={input} onChange={e=>{setInput( e.target.value) }} />
            {items.map(item=>   <p key={item.id}>{` x: ${item.y}, y: ${item.x} ,text:${item.text}`}</p>)}
            
        </div>
    )
}

export default Input
