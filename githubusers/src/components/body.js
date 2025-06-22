import { useEffect, useState } from "react";

export default function Body(){
     
    const [profile,setprofile]=useState([]);  
    const [numberofprofile,setnumberofprofile]=useState("");
    
   async function fetching(count){
       const random=Math.floor((1+Math.random()*10000));
       
      // const response = await fetch("https://api.github.com/users?per_page=10");
  
       const response = await fetch(`https://api.github.com/users?since=${random}&per_page=${count}`)
       const data=await response.json();
       setprofile(data);
   }
 
    useEffect(()=>{
      fetching()
    },[]);
   
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center" ,height:"50px",margin:"20px"}}>
            <input type="text" placeholder="searchh profilessss" value={numberofprofile} onChange={(e)=>{setnumberofprofile(e.target.value)}}></input>
            <button onClick={()=>{fetching(Number(numberofprofile))}}>SEARCH PROFILES</button>
        </div>

        <div className="profiles">
       {
            profile.map((value)=>{
                 return(<div key={value.id} className="cards">
                        <img src={value.avatar_url}/>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">Profile</a>
                  </div>
                 )
            })
            

       }  
        </div>

    </> 
    )
}