import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard";
import { Context } from "../store/appContext";

const ContactList = () => {
    const { store, actions } = useContext(Context);
    let contacts = [];
    useEffect(() => {
        actions.getContacts();
        console.log(store.contacts.contacts)
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-center m-2 pb-3 pt-4">
                <Link to="/form">
                    <button className="btn btn-success btn-lg" href="#" role="button">
                        Add new contact
                    </button>
                </Link>
            </div>

            <div className="">
                {console.log(store)}
                {console.log(store['contacts'].contacts)}
                {console.log(store.contacts.contacts)}
                {store.contacts.contacts && store.contacts.contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
};

export default ContactList;