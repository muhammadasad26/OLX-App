import React, { Component } from "react";
import Logo from "../../images/logo.png";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./style.css"

class PostAdHeader extends Component{
   
    render(){
        return(
            <div>
                <div className="post-header">
                    <div className="arrow-back">
                        <button><ArrowBackIcon /></button>
                    </div>
                    <div className="img-logo">
                        <img src={Logo} alt="OLX Logo" width="43px" />
                    </div>
                </div>
                <div className="post-main-heading">
                        <h3>POST YOUR AD</h3>
                </div>
            </div>
        )
    }
}

export default PostAdHeader;