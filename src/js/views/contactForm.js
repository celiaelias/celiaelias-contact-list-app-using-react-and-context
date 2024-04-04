import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {

    const navigate = useNavigate();

    const { actions } = useContext(Context);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        agenda_slug: "agenda-celiaelias",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.email || !formData.address) {
            alert("Please fill in all the required fields");
            return;
        }
        actions.createContact(formData);
        navigate("/");
        actions.getContacts(formData)
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    
    return (
        <div>
            <div className="container d-flex justify-content-center pt-4">
                <h1>Create a new contact</h1>
            </div>

            <div className="container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2 pb-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Full name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2 pb-2" controlId="exampleForm.ControlInput3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            name="phone"
                            type="number"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2 pb-2" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2 pb-2" controlId="exampleForm.ControlInput4">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-center pt-2 pb-2">
                        <Button type="submit" variant="secondary">
                            Save
                        </Button>
                    </div>
                </Form>
            </div>

            <div className="container">
                <Link to="/">Back to contacts</Link>
            </div>
        </div>
    );

}

export default ContactForm