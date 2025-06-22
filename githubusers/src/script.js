import React  from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";


// header
// body

function GitHubProfile(){
   return (
   <> 
      <Header></Header>
      <Body></Body>
   </>   
   )
}






ReactDOM.createRoot(document.getElementById("root")).render(<GitHubProfile/>);