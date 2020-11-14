import React, { Component } from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import TvIcon from '@material-ui/icons/Tv';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import BusinessIcon from '@material-ui/icons/Business';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PetsIcon from '@material-ui/icons/Pets';
import WeekendIcon from '@material-ui/icons/Weekend';
import WatchIcon from '@material-ui/icons/Watch';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import ToysIcon from '@material-ui/icons/Toys';
import PostAdHeader from "../PostAdHeader"
import PostAdFooter from "../PostAdFooter"
import "./style.css";
import { connect } from "react-redux";
import { select_category } from "../../store/action";

class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            categories: [
                { icon: <PhoneIphoneIcon />, title: "Mobiles" },
                { icon: <DriveEtaIcon />, title: "Vehicles" },
                { icon: <LoyaltyIcon />, title: "Property for Sale" },
                { icon: <LoyaltyIcon />, title: "Property for Rent" },
                { icon: <TvIcon />, title: "Electronics & Home Appliances" },
                { icon: <MotorcycleIcon />, title: "Bikes" },
                { icon: <BusinessIcon />, title: "Business, Industrial & Agriculture" },
                { icon: <RoomServiceIcon />, title: "Services" },
                { icon: <WorkOutlineIcon />, title: "Jobs" },
                { icon: <PetsIcon />, title: "Animals" },
                { icon: <WeekendIcon />, title: "Furniture & Home Decor" },
                { icon: <WatchIcon />, title: "Fashion & Beauty" },
                { icon: <SportsBaseballIcon />, title: "Books, Sports & Hobbies" },
                { icon: <ToysIcon />, title: "Kids" }
            ]
        }
    }

    render() {
        return (
            <div>
                <PostAdHeader />
                <div className="all-categories">
                    <div className="all-c-heading">
                        <h5>CHOOSE A CATEGORY</h5>
                    </div>
                    <ul>
                        {this.state.categories.map((v, i) => {
                            return <li key={i} className="category-item" onClick={()=>this.props.select_category(v.title,this.props.history)}>
                                <span className="c-i-image">{v.icon}</span>
                                <span className="c-i-text">{v.title}</span>
                                <span className="c-i-right-arrow"><ChevronRightIcon fontSize="large" /></span>
                            </li>
                        })}
                    </ul>
                </div>
                <PostAdFooter />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    select_category: (c, history) => dispatch(select_category(c, history))
})

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
