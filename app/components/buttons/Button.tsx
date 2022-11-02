
type Button ={
    data:string;
    color:string
}

const Button1=(prop:Button)=>{

    console.log("prop" )
    return (
        
    //    <div><h1>Hello Fani</h1> </div>
     
     <button ><h1>We are friends{ prop.data} or {prop.color}</h1></button>
     
    )
}

export default Button1;