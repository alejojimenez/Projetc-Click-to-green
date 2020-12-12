const getState = ({ getStore, getActions, setStore }) => {
	return {
        store: {
            container: [],
            editContainer: {},
            typeOfMaterial: '',
            capacity: '',
            location: '',
            length: '',
            latitude: '',
            errors: null,
            notify: {
            status: "Pendiente",
            notify: "Enviada"
            // notificationDate: ""
            },
		},
        actions: {
          onClickSendNotify: (evento) => {
                evento.preventDefault();
                const store = getStore();
                console.log(store);
                var options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://127.0.0.1:5000/api/create_notification",
                        "Access-Control-Allow-Methods": "POST",
                        "Access-Control-Allow-Headers": "Content-Type, Authorization"
                    },
                    body: JSON.stringify({
                        "status": store.notify.status,
                        "notify": store.notify.notify
                    })
                }
                fetch("http://127.0.0.1:5000/api/create_notification", options)
                .then(resp => resp.json())
                .then(data => console.log(data))
                .catch((error) => console.log(error))
            },

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value,
                })
            },

            addContainer: (e) => {
                e.preventDefault();
                const store = getStore();

                fetch("http://127.0.0.1:5000/api/container/add_container", {
                    method: 'POST',
                    body: JSON.stringify({
                        "typeOfMaterial": store.typeOfMaterial,
                        "capacity": store.capacity,
                        "location": store.location,
                        "length": store.length,
                        "latitude": store.latitude
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })  
                    .then(resp => resp.json())
                    .then(data => {
                        getActions().getContainer("http://127.0.0.1:5000/api/container")
                        console.log(data)
                    })
                    .catch((error) => console.log(error));
            },

            editContainer: (index) => {
                // index.preventDefault();
                const { container } = getStore();
                setStore({editContainer: container[index]})
                console.log(container[index])

                // fetch(`http://127.0.0.1:5000/api/container/edit_container/${id}`,
                //     {
                //         method: "GET",
                //         headers: {
                //             "Content-Type": "application/json"
                //         }
                //     }
                // )
                //     .then(res => res.json())
                //     .then(data => console.log(data))
                //     .catch((error) => console.log(error));
            },

            updateContainer: (e, container) => {
                e.preventDefault();
                // const store = getStore();
                const { editContainer } = getStore();
                // container.splice(index, 1, newContainer)
                // setStore(...container)
                // console.log("traera el id"+index)
                const { containerId } = editContainer
                console.log(e, container)

                fetch(`http://127.0.0.1:5000/api/container/update_container/${containerId}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        "typeOfMaterial": container.typeOfMaterial,
                        "capacity": container.capacity,
                        "location": container.location,
                        "length": container.length,
                        "latitude": container.latitude
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })  
                    .then(resp => resp.json())
                    .then(data => {
                        // getActions().getContainer("http://127.0.0.1:5000/api/container")
                        console.log(data)
                    })
                    .catch((error) => console.log(error));
            },

            deleteContainer: (index, id ) => {
                // index.preventDefault();
                // const store = getStore();
                const { container } = getStore();
                container.splice(index,1) 
                setStore(...container)
                console.log(index)
                console.log(id)

                fetch(`http://127.0.0.1:5000/api/container/delete_container/${id}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                )
                    .then(res => res.json())
                    .then(data => console.log(data))
            },

            getContainer:  (url) => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setStore({ container: data })
                    })
                    .catch((error) => console.log(error));
            },
            },
		}
	};
export default getState;