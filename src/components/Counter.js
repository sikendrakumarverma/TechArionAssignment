import { useState } from "react"
import '../App.css';


function Counter() {
    const [count, setCount] = useState(0)

    function Increase(value){
    
        setCount(count + value)
        console.log("click",count)

    }
    

    return (
        <div >
            <h1> Counter</h1>
            <div className="counter">
                <button onClick={()=>{Increase(-3)}}> - </button>
                <h3>{count}</h3>
                <button onClick={()=>{Increase(+3)}}> + </button>
            </div>
        </div>
    )
}

export default Counter;