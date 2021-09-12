import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../static/resume.png";
import { connect } from "react-redux";
import {isLoaded,isEmpty} from 'react-redux-firebase';
import * as authActions from '../../redux/actions/authActions';
import './geader.css'
function LoggesOut(props) {
  return (
    <ul>
      <li className="signup ">
        <NavLink style={{color:"white",textDecoration:"none"}} className=" btnv-2" to="/register">
        Register
        </NavLink>
      </li>
      <li className="signin"> 
        <NavLink style={{color:"white"}} className="text-blue btnv-3" to="/login">
        Sign In
        </NavLink>         
      </li>
    </ul>
  )
}

const Header = (props) => {
  const auth = props.auth;
  const handleLogOut=()=>{
   console.log('The user will sign out');
   props.signOut();
  }

  return (  
  <header className="header" style=
  {{backgroundColor:"#292727" ,color:"white"}}>
  <nav className="nav">
      <NavLink to="/" className="holder-logo">
        <img className='logo' style={{width:"16rem"}} src={logo}></img>
      </NavLink> 
        <div className="header-links full-height">

        { isLoaded(auth) && !isEmpty(auth) ?<>

          <ul>
            <li className="signin ">
            <NavLink style={{color:"white"}} className="btn-nvt-gm" to="/myresumes">
              <span>
              {auth.email}
              </span>
              </NavLink>
            </li>
            <li className="signin"> 
              <button className="text-blue btnv-3" onClick={handleLogOut}>
                  Signout
              </button>         
            </li>
          </ul>

        </>:<LoggesOut></LoggesOut>}
          
          <ul id="nav-mid">
            <li>
            <NavLink style={{color:"white"}} className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink style={{color:"white"}} className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>        
          </ul>
            
      </div>   
    </nav>
  </header>

  );
};

const mapStateToProps=(state)=>{
  return{
     auth: state.firebase.auth
  }
}
const mapDispatchToProps= (dispatch)=>{
  return {
   signOut:()=>dispatch(authActions.signout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
