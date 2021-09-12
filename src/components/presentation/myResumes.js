import React,{useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
// import update from 'immutability-helper';
import {fieldCd, skinCodes}  from '../../constants/typeCodes';
// import * as contactActions from '../../actions/contactActions';
// import { bindActionCreators } from 'redux';
// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ResumePreview from './resumePreview'
import * as contactActions from '../../redux/actions/contactActions';
 import { connect } from "react-redux";
 import { useFirestore } from "react-redux-firebase";

 function Resumes(props) {
     const [state,setState] = useState(true)
    const firestore = useFirestore();
   let history = useHistory();
   const [resumes,setResumes] =useState([])
    const arrayyy = []
   useEffect(async() => {
    let user = await firestore.collection('users').doc(props.auth.uid).get();
    
    
    //await console.log(user.data())
   let ids = user.data().resumeIds
    console.log(ids);
    
    for(let key in ids){
        let obj =await ids[key]
        console.log(obj)
        
        resumes.push(<div style={{margin:"13rem"}} className="preview-card">
                    <ResumePreview contactSection={obj.contactSection} educationSection={obj.educationSection} skinCd={obj.document.skinCd} ></ResumePreview>
        </div>)
    }
    
    
    console.log(resumes)
    
    
   }, [props,state])
   
  
 
  
    


    // const getFieldData=(key)=>{
    //     if(contact && contact[key]){
    //       return contact[key]
    //     }
    //     return "";
    // }
    
    return (
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}} >
            
            {resumes.length==0?
                <div style={{marginTop:"10rem",width:"100%"}}>
                    <h1>You haven't created any Resumes</h1>
                </div>:
                <div style={{marginTop:"10rem",width:"100%"}}>
                <h1>Your Resumes</h1>
                </div>
            }
                {resumes}
            </div>
    );
}
const mapStateToProps = (state) => {
    return{
      
      auth:state.firebase.auth
    }
  }
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         addContact : (contact) => dispatch(contactActions.add(contact)),
//         updateContact : (contact) => dispatch(contactActions.update(contact))
//     }

// }


export default connect(mapStateToProps)(Resumes)

