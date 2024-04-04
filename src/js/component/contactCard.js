import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ModalForm from "./modalForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faEnvelope,
    faPencilAlt,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";


const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);
    const [show, setShow] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    useEffect(() => {
        if (selectedContact) {
            setNewContact({
                name: selectedContact.name,
                phone: selectedContact.phone,
                email: selectedContact.email,
                address: selectedContact.address,
                img: selectedContact.img,
            });
        }
    }, [selectedContact]);

    const handleShow = () => {
        setSelectedContact(contact);
        setShow(true);
    }; 

    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        actions
            .updateContact(newContact, contact.id)
            .then(() => {
                alert('The contact has been updated')
                handleClose();

                actions.getContacts();
            })
            .catch((error) => {
                console.error("Error updating the contact:", error);
            });
    };

    const handleDeleteContact = (id) => {
        actions.deleteContact(id);
    };


    return (
        <div className="container d-flex p-2 justify-content-center align-items-center">
            <div className="card w-100 h-20" style={{ height: "auto" }}>
                <div className="row no-gutters">
                    <div className="col-12 col-md-3">
                        <img
                            src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
                            className="mt-3 ms-5 pt-2 pb-2 ps-4 pe-4 rounded-circle"
                            style={{ height: "150px", width: "75%" }}
                            alt="alternativeImage"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card-body">
                            <h5 className="card-title pb-3 ">{contact.name}</h5>
                            <p className="card-text text-secondary fw-bolder">
                                <FontAwesomeIcon icon={faPhone} size="md" className="pe-4" />
                                {contact.phone}
                            </p>
                            <p className="card-text text-secondary fw-bolder">
                                <FontAwesomeIcon icon={faEnvelope} size="md" className="pe-4" />
                                {contact.email}
                            </p>
                            <p className="card-text text-secondary fw-bolder">
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    size="md"
                                    className="pe-4"
                                />
                                {contact.address}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 p-3 d-flex flex-column justify-content-between">
                        <div className="d-flex justify-content-center mb-5 pb-5">
                            <button className="btn"
                                onClick={handleShow}
                            >
                                <FontAwesomeIcon icon={faPencilAlt} size="md" />
                            </button>
                            <button
                                href="#"
                                className="btn ps-3"
                                onClick={() => handleDeleteContact(contact.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} size="md" />
                            </button>
                        </div>
                    </div>
                </div>
                {<ModalForm
                    show={show}
                    contact={newContact}
                    handleClose={handleClose}
                    handleChange={handleChange}
                    handleSave={handleSave}
                />}
            </div>
        </div>
    );
};

export default ContactCard;