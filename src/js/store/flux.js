const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],

		},
		actions: {
			getContacts: async () => {
				try {
					const requestOptions = {
						method: 'GET',
						redirect: 'follow'
					};

					const response = await fetch("https://playground.4geeks.com/contact/agendas/celiaelias_agenda", requestOptions);
					if (response.ok) {
						const data = await response.json();
						setStore({ contacts: data });
						console.log("Contactos obtenidos exitosamente:", data);
					} else {
						console.error("Error al obtener los contactos");
					}
				} catch (error) {
					console.error("Error al realizar la solicitud:", error);
				}
			},


			createContact: async (formData) => {
				try {
					const myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					const raw = JSON.stringify({
						"name": formData.name,
						"email": formData.email,
						"agenda_slug": "celiaelias_agenda",
						"address": formData.address,
						"phone": formData.phone
					});

					const requestOptions = {
						method: 'POST',
						headers: myHeaders,
						body: raw,
						redirect: 'follow'
					};

					const response = await fetch("https://playground.4geeks.com/contact/agendas/celiaelias_agenda/contacts", requestOptions);

					if (response.ok) {
						console.log("Contact successfully created");
					} else {
						const errorBody = await response.text();
						console.error("Error creating the contact - Response:", response);
						console.error("Full error text:", errorBody);
					}
				} catch (error) {
					console.error("Error in the request:", error);
				}
			},

			updateContact: async (formData, id) => {
				try {
					const myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					const raw = JSON.stringify({
						"name": formData.name,
						"email": formData.email,
						"agenda_slug": "celiaelias_agenda",
						"address": formData.address,
						"phone": formData.phone
					});

					const requestOptions = {
						method: 'PUT',
						headers: myHeaders,
						body: raw,
						redirect: 'follow'
					};

					const response = await fetch(`https://playground.4geeks.com/contact/agendas/celiaelias_agenda/contacts/${id}`, requestOptions);

					if (response.ok) {
						console.log("Contact successfully updated");
					} else {
						const errorBody = await response.text();
						console.error("Error in updating the contact - Response:", response);
						console.error("Full error text::", errorBody);
					}
				} catch (error) {
					console.error("Error in the request:", error);
				}
			},

			deleteContact: async (id) => {
				try {
					const requestOptions = {
						method: "DELETE",
						redirect: "follow",
					};
					const response = await fetch(
						`https://playground.4geeks.com/contact/agendas/celiaelias_agenda/contacts/${id}`,
						requestOptions
					);

					if (response.ok) {
						console.log("Contact successfully deleted");
						getActions().getContacts();
					} else {
						console.error("Error in deleting the contact");
					}

				} catch (error) {
					console.error("Error in the request:", error);
				}
			},
		}
	};
};

export default getState;