import { useState ,useEffect} from "react";
function MyComponent(){

   const[count , setCount] = useState(0)

   function handleClick(){
    setCount(c => c + 1)
   }


   
    function handleClicksub(){
    setCount(c => c - 1)
   }


   return(<>
        <div>Counter : {count}</div>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClicksub}>-</button>
   </>)

}
export default MyComponent