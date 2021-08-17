import React from "react";
import reactDom from "react-dom";
import user from "../images/user.png"

const ContactCard = (props) => {
    // named the 
    const {id, name, email } = props.contact

    return(
        <div className="item">
            <div className="content">
                <img className="ui avatar image" src={user} alt="user"></img>
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" 
            //inline css
            style={{color:"red", position:"absolute",marginLeft:"200px",marginTop:"-20px"}}></i>
        </div>
    );
};

export default ContactCard;