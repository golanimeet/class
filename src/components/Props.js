import React from "react";


// Props use function component
const Props = (props) => {
    return(
       <div>
         <p>Name: {props.name} {props.lastName}</p>
         {props.children}
       </div>
    )
}

export default Props;