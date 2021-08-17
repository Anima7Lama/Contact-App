import React from "react";
import ContactCard from "./ContactCard";

//accessing props
const ContactList = (props) =>{
    console.log(props);

    // this function takes props of contacts
    const renderContactList = props.contacts.map((contact) => {
        return(
            //passing contact as a props to ContactCard component
            <ContactCard contact={contact}></ContactCard>
        );
    })
    return(
        <div className="ui celled list">
            {/* referencing function variable */}
            {renderContactList}       
        </div>
    );
};

export default ContactList;