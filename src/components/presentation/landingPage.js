import React, { useEffect } from 'react';
import logo from "../../static/images/landing.jpg";
import { NavLink } from "react-router-dom";
import { isLoaded } from 'react-redux-firebase'
import { connect } from "react-redux";

const Lp = (props) => {

  useEffect(()=>{

  },[props])
    return (    
    
        <div className="container  lp-page center">          
        <div className="section">
         <h1>Create a resume that stands out</h1>
           <p >Create a Resume that perfectally describes your skils and match job profile.</p>
            <br></br>
           <div >
             {!isLoaded(props.auth.uid)?
              <NavLink to="/getting-started"   className="btn hvr-float-shadow"><span>Login to create Resume!</span>
              </NavLink>:
              <NavLink to="/getting-started"   className="btn hvr-float-shadow"><span>Create Resume!</span>
              </NavLink> 
            }
                
                
                </div>
                <img src={logo} style={{marginTop:"2.5%",width:"32rem",height:"20%"}}   className="lp-resume" alt="logo" />
         </div>        
         </div>
    
        );
}
const mapStateToProps = (state) => {
  return{
    
    auth:state.firebase.auth
  }
}
 
export default connect(mapStateToProps)(Lp)