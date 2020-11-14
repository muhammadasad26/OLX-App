import React, { Component } from "react";
import Logo from "../../images/logo.png";
import "./style.css";
import { facebook_login } from "../../store/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="header-1">
                    <div className="img-logo">
                        <Link to="/"><img src={Logo} alt="OLX Logo" width="43px" /></Link>
                    </div>
                    <div className="inp-search-box">
                        <div className="input-group-prepend">
                            <div className="" id="btnGroupAddon"><i className="fa fa-search"></i></div>
                        </div>
                        <input type="text" className="form-control inp-search" placeholder="Search city, area or locality" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                        <div className="dropdown">
                            <button className="btn search-arrow-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                    <div className="inp-search-box search-item-box">
                        <input type="text" className="form-control inp-search-1" placeholder="Find Cars, Mobile Phone and more..." />
                        <div className="input-group-append">
                            <button className="btn search-btn" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div className="txt-login">
                            <button onClick={() =>  this.props.facebook_login(this.props.historyPath, "/")}>Login</button>
                    </div>
                    <div className="sell-btn">
                        <button onClick={() => this.props.facebook_login(this.props.historyPath, "/categoryList")}><span><i className="fa fa-plus"></i></span><span>SELL</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    facebook_login: (history, path) => dispatch(facebook_login(history, path)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);