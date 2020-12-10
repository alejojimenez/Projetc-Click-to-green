const getState = ({ getStore, getActions, setStore }) => {
	return {
        store: {
            container: [],
            typeOfMaterial: '',
            capacity: '',
            location: '',
            length: '',
            latitude: '',
            errors: null
		},
        actions: {
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

            updateContainer: (index, newContainer, id) => {
                index.preventDefault();
                const store = getStore();
                const { container } = getStore();
                container.splice(index, 1, newContainer)
                setStore(...container)

                fetch(`http://127.0.0.1:5000//api/container/update_container/<int:id>`, {
                    method: 'PUT',
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

            deleteContainer: (index,id ) => {
                // index.preventDefault();
                const store = getStore();
                const { container } = getStore();
                container.splice(index,1) 
                setStore(...container)

                fetch(`http://127.0.0.1:5000/api/container/delete_container/<int:id>`, {
                    method: 'DELETE',
                    body: JSON.stringify({
                        ...store.container
                        // "typeOfMaterial": store.typeOfMaterial,
                        // "capacity": store.capacity,
                        // "location": store.location,
                        // "length": store.length,
                        // "latitude": store.latitude
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