import React ,{useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator(){
       const [password,setpassword]=useState("");
       const [length,setlength]=useState(10);
       const [numberchanged,setnumberchanged]=useState(false);
       const [characterchanged,setcharacterchanged]=useState(false);
     
      function generatepassword(){
          let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          if(numberchanged){
               str+="1234567890";
          }
          if(characterchanged){
               str+="!@#$%^&*()(_+{}][";

          }
          let pass="";
          for(let i=0;i<length;i++){
                pass+=str[Math.floor(Math.random()*str.length)];
          }
            setpassword(pass);
      }
        // problem of infinite looppp
       // generatepassword();

       // use  hook==useeffect
       useEffect(()=>{
       generatepassword();
       },[length,numberchanged,characterchanged])

      return(
         
   <>
      <h1>PASSWORD IS :{password}</h1>   
      <div>
         <input type="range" min={1} max={20} value={length} onChange={(e)=>setlength(e.target.value)}></input>
         <label>LENGTH IS:{length}</label>  

         <input type="checkbox" defaultChecked={numberchanged} onChange={()=>setnumberchanged(!numberchanged)}></input>
         <label>NUMBER</label>

         <input type="checkbox" defaultChecked={characterchanged} onChange={()=>{setcharacterchanged(!characterchanged)}}></input>
         <label>CHARACTER</label>

      </div>
   </>

      )
    
}
const reactroot=ReactDOM.createRoot(document.getElementById("root"));
reactroot.render(<PasswordGenerator/>);
















