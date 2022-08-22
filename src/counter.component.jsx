import { useState } from "react";
export default function Counter(){
    const [counter, setcounter]= useState(0);
    cngtofive=()=>{
        setcounter({counter})
    }
    return(
        <div>
            <h2>{counter}</h2>
            


        </div>
    )

}
