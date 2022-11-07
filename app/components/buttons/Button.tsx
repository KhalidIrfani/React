import { chakra } from "@chakra-ui/react";
 


type Button={
    data:string
}

const Groot=(prop:Button)=>{
    return (
        <button>We are friends{prop.data}</button>
    )
}

export default Groot;
 