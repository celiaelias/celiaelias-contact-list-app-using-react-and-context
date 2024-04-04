import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalForm = ({
    show,
    contact,
    handleClose,
    handleChange,
    handleSave,
}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={contact.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={contact.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phone"
                            value={contact.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={contact.address}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForm;