import React, { useState,useRef } from "react";
import ReactDOM from "react-dom/client";


 function StopWatch(){
    const [time,settime]=useState(0);
    const intervalRef = useRef(null);
    const [isRunning , setIsRunning] = useState(false);
   
   function start(){
        if(!isRunning){
             intervalRef.current= setInterval(()=>{
             settime((prevtime)=>prevtime+1);
         },1000)
      }
      setIsRunning(true);  
   }

    function stop(){
      if(isRunning){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
      }
      setIsRunning(false);
    }

    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        settime(0);
    }
    return(
       <div id="container">
          <h1>STOPWATCH TIMER : {time}</h1>
           <button onClick={start}>START</button>
           <button onClick={stop}>STOP</button>
           <button onClick={reset}>RESET</button>
       </div>
    )
 }

ReactDOM.createRoot(document.getElementById("root")).render(<StopWatch/>);