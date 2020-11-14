import React, { Component } from "react";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import PostAdHeader from "../PostAdHeader"
import PostAdFooter from "../PostAdFooter"
import "./style.css"
import { connect } from "react-redux";
import { get_user, post_data } from "../../store/action";
import firebase from "../../config/firebase";

class Form extends Component {
    state = {
        all_details: {},
        category: "",
        title: "",
        description: "",
        price: "",
        images: null,
        province: "",
        city: "",
        profile_pic: "",
        profile_name: "",
        phone_no: "",
        key: ""
    }

    send_data = (history) => {
        let key = firebase.database().ref("/").push().key;

        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child(`images/${this.state.images.name}`).put(this.state.images);
        let img = "";
        let promise = new Promise((resolve) => {

            uploadTask.on('state_changed', function (snapshot) {
            }, function (error) {
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    resolve(img = downloadURL)
                });
            })
        });
        promise.then(() => {
            this.state.all_details = {
                category: this.props.category,
                title: this.state.title,
                description: this.state.description,
                price: this.state.price,
                images: img,
                province: this.state.province,
                city: this.state.city,
                profile_pic: this.props.current_user.image,
                profile_name: this.props.current_user.name,
                phone_no: this.state.phone_no,
                key: key
            }
            this.setState({
                all_details: this.state.all_details
            })
            this.props.post_data(this.state.all_details, history)
        });
    }

    componentDidMount() {
        this.props.get_user();
    }

    render() {
        let user = this.props.current_user;
        return (
            <div>
                <PostAdHeader />
                <div className="ad-form">
                    <div className="ad-form-heading">
                        <h5>SELECTED CATEGORY</h5>
                        <p>{this.props.category}</p>
                    </div>
                    <div className="detail">
                        <div className="ad-detail">
                            <h5>INCLUDE SOME DETAILS</h5>
                            <div className="ad-detail-1">
                                <label htmlFor="">Ad title *</label><br />
                                <input value={this.state.title} type="text" onChange={(e) => this.setState({ title: e.target.value })} />
                                <p>
                                    <span>Mention the key features of your item (e.g. brand, model, age, type)</span>
                                    <span>0/70</span>
                                </p>
                            </div>
                            <div className="ad-detail-1">
                                <label htmlFor="">Description *</label><br />
                                <input value={this.state.description} type="text" onChange={(e) => this.setState({ description: e.target.value })} />
                                <p>
                                    <span>Include condition, features and reason for selling</span>
                                    <span>0/4096</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="ad-detail">
                            <h5>SET A PRICE</h5>
                            <div className="ad-detail-1">
                                <label htmlFor="">Price *</label>
                                <div className="ad-detail-price">
                                    <span>Rs</span>
                                    <input value={this.state.price} type="text" onChange={(e) => this.setState({ price: e.target.value })} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="ad-detail">
                            <h5>UPLOAD UPTO 8 PHOTOS</h5>
                            <div className="ad-detail-image">
                                <input type="file" id="img1" accept="image/*" onChange={(e) => this.setState({ images: e.target.files[0] })} />
                                <label htmlFor="img1"><AddAPhotoIcon fontSize="large" />Add photo</label>
                                <label htmlFor="img2"><AddAPhotoIcon fontSize="large" /></label>
                                <label htmlFor="img3"><AddAPhotoIcon fontSize="large" /></label>
                                <label htmlFor="img4"><AddAPhotoIcon fontSize="large" /></label>
                                <label htmlFor="img5"><AddAPhotoIcon fontSize="large" /></label>
                                <label htmlFor="img6"><AddAPhotoIcon fontSize="large" /></label>
                                <label htmlFor="img7"><AddAPhotoIcon fontSize="large" /></label>
                                <label htmlFor="img8"><AddAPhotoIcon fontSize="large" /></label>
                            </div>
                            <p className="ad-detail-p">This field is mandatory</p>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="ad-detail">
                            <h5>CONFIRM YOUR LOCATION</h5>
                            <div className="ad-detail-location">
                                <span>
                                    <label htmlFor="">State *</label>
                                    <input value={this.state.province} type="text" onChange={(e) => this.setState({ province: e.target.value })} />
                                </span>
                                <span>
                                    <label htmlFor="">City *</label>
                                    <input value={this.state.city} type="text" onChange={(e) => this.setState({ city: e.target.value })} />
                                </span>
                            </div>
                            <p className="ad-detail-p">This field is mandatory</p>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="ad-detail">
                            <h5>REVIEW YOUR DETAILS</h5>
                            <div className="ad-detail-profile">
                                <span className="profile-picture"><img src={user.image} alt="" /></span>
                                <span className="profile-title">
                                    <label htmlFor="">Name</label>
                                    <p>{user.name}</p>
                                    <span>0/30</span>
                                </span>
                            </div>
                            <div className="ad-detail-1">
                                <label htmlFor="">Mobile Phone Number *</label><br />
                                <input value={this.state.phone_no} type="text" onChange={(e) => this.setState({ phone_no: e.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="ad-detail">
                            <button className="btn-post-now" onClick={() => this.send_data(this.props.history)}>Post now</button>
                        </div>
                    </div>
                </div>
                <PostAdFooter />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    category: state.category,
    current_user: state.current_user
})

const mapDispatchToProps = (dispatch) => ({
    get_user: () => dispatch(get_user()),
    post_data: (details, history) => dispatch(post_data(details, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
