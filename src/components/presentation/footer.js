import React from "react";
import { NavLink } from "react-router-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./footer.css"

const footer = () => {
  return (  
  
  <footer className="footer" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>  
    <div style={{color:"white",fontSize:"2.5rem",margin:"3rem"}}>Created by Sarab</div>
    <div >
      <a target="_blank" href="https://www.linkedin.com/in/sarabpreet-singh-989a87181/"><LinkedInIcon className="icon" style={{fontSize:"5.5rem",marginRight:"4rem"}}></LinkedInIcon></a>
      <a target="_blank" href="https://github.com/sarabpreets7"><GitHubIcon className="icon" style={{fontSize:"5.2rem"}}></GitHubIcon></a>
    </div>


  </footer>

  );
};
export default footer;
