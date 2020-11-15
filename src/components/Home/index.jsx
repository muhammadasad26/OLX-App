import React, { Component } from "react";
import Slider from "../../images/slider.jpg";
import Image2 from "../../images/phone-app.png";
import Image3 from "../../images/app-store.png";
import Image4 from "../../images/google-play.png";
import { connect } from "react-redux";
import Header from "../Header"
import Footer from "../Footer"
import Navbar from "../Navbar"
import "./style.css";
import { get_data, goto_addetail } from "../../store/action"

class Home extends Component {

    componentDidMount() {
        this.props.get_data();
    }

    renderList = () => {
        return this.props.alldata.map((v, i) => {
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
                <div className="home">
                    <div>
                        <img src={Slider} className="d-block w-100 main-pic" alt="Slider" />
                    </div>
                    <div className="container mt-4 bg-light">
                        <div className="heading-1">
                            <h4>Fresh Recommendation</h4>
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
                    <div className="play-store-area">
                        <div className="container-fluid phone-app">
                            <div className="app-image">
                                <img src={Image2} className="w-100" alt="Phone App" />
                            </div>
                            <div className="app-text">
                                <h2>TRY THE OLX APP</h2>
                                <p>Buy, sell and find just about anything using the app on your mobile.</p>
                            </div>
                            <div className="app-btn">
                                <div className="app-btn-heading">
                                    <h6>GET YOUR APP TODAY</h6>
                                    <div className="app-btn-btns-1 ">
                                        <img src={Image3} alt="" /> <img src={Image4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user,
    alldata: state.alldata
})

const mapDispatchToProps = (dispatch) => ({
    goto_addetail: (key, history) => dispatch(goto_addetail(key, history)),
    get_data: () => dispatch(get_data())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);