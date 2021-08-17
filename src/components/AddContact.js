import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };
    
    // defining add function
    add = (e) => {
        // to prevent page refresh after the button is clicked
        e.preventDefault();
        if(this.state.name=== "" || this.state.email=== ""){
            alert("Please fill up all the fields!");
            return;
        }
        //using handler function from the App component (passing state values to the function of App.js)
        // now fields are passed to App component
        this.props.addContactHandler(this.state);
        // clearing the state value after the form is submitted
        this.setState({name:"", email:""});
    };
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                {/* when the form is submitted, add function is called */}
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Your Name" 
                        value={this.state.name}
                        onChange={(e)=>this.setState({name: e.target.value})}>
                        </input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Your E-mail"
                        value={this.state.email}
                        onChange={(e)=>this.setState({email: e.target.value})}>
                        </input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;