import React, { Component } from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import Header from "../Header"
import Footer from "../Footer"
import Navbar from "../Navbar"
import "./style.css";
import { connect } from "react-redux";
import { get_addetail } from "../../store/action"
import { Link } from "react-router-dom";

class AdDetail extends Component {

    componentDidMount() {
        this.props.get_addetail();
    }

    render() {
        return (
            <div>
                <Header historyPath={this.props.history} />
                <Navbar path={this.props.history} />
                <div className="image-detail-div">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <div id="carouselExampleControls" className="carousel">
                                <div className="carousel-inner bg-dark">
                                    <div className="carousel_item active text-center ad-detail-main-img bg-dark">
                                        <img src={this.props.detail.images} className="d-inline w-100" alt="..." />
                                    </div>
                                </div>
                                <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </Link>
                                <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </Link>
                            </div>
                            <div className="more-images col-12">
                                <img src={this.props.detail.images} alt="" width="77px" className="m-2" />
                            </div>
                            <div className="image-detail-desc">
                                <h3>Description</h3>
                                <p>{this.props.detail.description}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="image-price p-3 ">
                                <h3>Rs {this.props.detail.price}</h3>
                                <p>{this.props.detail.title}</p>
                                <small>{this.props.detail.city}, {this.props.detail.province}</small>
                            </div>
                            <div className="seller-desc mt-2 px-3 pt-2">
                                <h5>Seller description</h5>
                                <div>
                                    <div className="ad-detail-profile">
                                        <span className="seller-profile-imgage"><img src={this.props.detail.profile_pic} alt="" /></span>
                                        <span className="seller-profile-title">
                                            <p>{this.props.detail.profile_name}</p>
                                        </span>
                                    </div>
                                    <div className="btn-chat">
                                        <button className="col-12">
                                            Chat with seller
                                        </button>
                                    </div>
                                </div>
                                <div className="seller-phone-no">
                                    <p><PhoneIcon /> {this.props.detail.phone_no}</p>
                                </div>
                            </div>
                            <div className="seller-location mt-2 p-3">
                                <h5>Posted in</h5>
                                <div className="embed-responsive embed-responsive-4by3 mx-auto">
                                    <iframe title="map" className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628508.070178197!2d67.71426487259681!3d27.361192429490334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1604387097335!5m2!1sen!2s"></iframe>
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
    detail: state.detail,
})

const mapDispatchToProps = (dispatch) => ({
    get_addetail: () => dispatch(get_addetail())
})

export default connect(mapStateToProps, mapDispatchToProps)(AdDetail);