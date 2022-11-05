import { chakra } from "@chakra-ui/react";
 


type Button={
    data:string
}

const Button=(prop:Button)=>{
    return (
        <button>We are friends{prop.data}</button>
    )
}

export default Button;
 