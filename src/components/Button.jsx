import React from 'react'
import { useState } from 'react';

const Button = () => {
    const [value, setValue] = useState(0);

    return (
        <button onClick={()=>setValue(value+1)}>{value}</button>
    )
}

export default Button;