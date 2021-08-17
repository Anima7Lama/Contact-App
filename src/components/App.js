import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
// import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import { unstable_batchedUpdates } from "react-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  //state of the 'contacts' variable 
  // initial values will be empty array
  const [contacts, setContacts] = useState([]);

  // defining addContactHandler function
  const addContactHandler = (contact) => {
    console.log(contact);
    // never use contacts for updates, always use setContacts
    // [...previous contacts, new contact]
    setContacts([...contacts, contact]);
  };

  //grabing data from local storage
  useEffect(() => {
    // execute side effects
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []); //If you provide useEffect an empty dependency array, it'll run exactly once
  
  //a react hook that helps us to render the component again whenever the value changes
  // storing values in a local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]); 
  //[contacts] = dependency array (The dependency array is the second optional argument in the useEffect function. 
  //it is an array of dependencies that, when changed from the previous render, will recall the effect function defined in the first argument.)
  
  return (
    <div className="ui container">
    <Header />
    {/* passing function as a prop */}
    <AddContact addContactHandler={addContactHandler}/>
    {/* props name = {data you want to pass} */}
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
