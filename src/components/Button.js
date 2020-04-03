import React from 'react';
import "../components/Button"

function Button({children}){
   
    return(
        <button className="Button">
            {children}
        </button>
    )
}
export default Button;