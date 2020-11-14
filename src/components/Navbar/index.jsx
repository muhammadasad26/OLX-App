import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { set_category_name } from "../../store/action";
import { connect } from "react-redux";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light pt-1 pb-1">
                    <Link className="navbar-brand pt-0" to="#">ALL CATEGORIES<i className="fa fa-chevron-down"></i></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/category" onClick={() => this.props.set_category_name("Mobiles")}>Mobiles<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category" onClick={() => this.props.set_category_name("Vehicles")}>Vehicles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category" onClick={() => this.props.set_category_name("Property for Sale")}>Property for Sale</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category" onClick={() => this.props.set_category_name("Electronics & Home Appliances")}>Electronics & Home Appliances</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category" onClick={() => this.props.set_category_name("Bikes")}>Bikes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category" onClick={() => this.props.set_category_name("Furniture & Home Decor")}>Furniture & Home Decor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category" onClick={() => this.props.set_category_name("Books, Sports & Hobbies")}>Books, Sports & Hobbies</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    set_category_name: (c) => dispatch(set_category_name(c)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
