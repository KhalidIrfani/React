import { chakra } from "@chakra-ui/react";
import { profile } from "console";
 


type Button={
    data:string
}

const Groot=(prop:Button)=>{
    return (
        <button>We are friends{prop.data}</button>
    )
}

export default Groot;



// class Profile React.Component{
//     constructor(){
//         super()
//     }
//     return
//     (
//         <div><h1>Hello world</h1></div>
//     )
// }
 
// export default profile;