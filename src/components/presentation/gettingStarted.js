import React, { useEffect ,useState} from 'react';
import {skinCodes} from '../../constants/typeCodes';
import * as actionTypes from "../../redux/actions/actionTypes"
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as documentActions from "../../redux/actions/documentActions"
import image1 from "./images/skin1.svg"
import image2 from "./images/skin2.svg"
import image3 from "./images/skin3.svg"
import image4 from "./images/skin4.svg"
import image5 from "./images/skin5.svg"



function GettingStarted(props) {
    const [array,setArray] = useState([])
     let history = useHistory();
     const onChange = async (skinCd) => {

        if(props.document.id){
             props.updateDocument(props.document.id, skinCd);        
        }
        else{
             props.setDocument(skinCd); 
        }
        history.push('/contact');
      }
      useEffect(()=>{
          let arr = [image1,image2,image3,image4];
          setArray([...arr])
      })

      
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == 'demo-value'? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={array[index]}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}
const mapStateToProps=(state)=>{
    return{
        document:state.document
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setDocument : (skinCd) => dispatch(documentActions.setSkinCd(skinCd)),
        updateDocument : (skinCd) => dispatch(documentActions.updateSkinCd(skinCd))
    }
}
  


export default connect(mapStateToProps,mapDispatchToProps)(GettingStarted)

