import React, { useState } from 'react'


export default function Dashboard() {

const [number, setNumber] = useState(0)

const plus = () => {
setNumber(number+1)
}

function minus() {
setNumber(number-1)

//id
//passwd
//salt
//post
//redirect
}

return (
<div className="flex flex-col">
{ number }
<button onClick={plus}>PLUS</button>
<button onClick={minus}>MINUS</button>
</div>
)
}
