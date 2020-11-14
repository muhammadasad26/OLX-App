import React, { Component } from "react";
import Header from "../Header"
import Footer from "../Footer"
import Navbar from "../Navbar"
import "./style.css";
import { connect } from "react-redux";
import { get_category_data, goto_addetail } from "../../store/action";


class Category extends Component {

    componentDidMount() {
        this.props.get_category_data();
    }

    renderList = () => {
        return this.props.category_data.map((v, i) => {
            return <div key={i} className="col-md-3 col-sm-6 col-xs-12 my-2 px-2">
                <div onClick={() => this.props.goto_addetail(v.key, this.props.history)} className="card w-100">
                    <span className="text-center pt-2 px-2"><img src={v.images} className="card-img-top w-100" alt="Sofa" /></span>
                    <div className="card-body">
                        <h5 className="card-title m-0">Rs {v.price}</h5>
                        <p className="card-text para-desc">{v.description}</p>
                        <p className="card-text"><small className="text-muted">{v.city}, {v.province}</small></p>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div>
                <Header historyPath={this.props.history} />
                <Navbar path={this.props.history} />
                <div className="container mt-4  bg-light">
                    <div className="heading-1">
                        <h4>{this.props.category_name}</h4>
                    </div>
                    <div className="container">
                        <div className="row px-2">
                            {this.renderList()}
                        </div>
                    </div>
                    <div className="load-more-btn">
                        <button>Load more</button>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    category_data: state.category_data,
    category_name: state.category_name
})

const mapDispatchToProps = (dispatch) => ({
    get_category_data: () => dispatch(get_category_data()),
    goto_addetail: (key, history) => dispatch(goto_addetail(key, history)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Category);

