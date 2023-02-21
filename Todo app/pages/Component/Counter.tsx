import { useState } from "react";
import { Button } from "react-bootstrap";

var countValue:number=1
const Counter=()=>{
const [value, setValue]=useState(0)

const decHandler=()=>{
    countValue=countValue-1;
    setValue(countValue-1)
}

const incHandler=()=>{
    countValue=countValue+1;
    setValue(countValue+1)
}

return(
<>
<Button onClick={decHandler}>-</Button> {value}
<Button onClick={incHandler}>+</Button>
 
</>
)
}
export default Counter