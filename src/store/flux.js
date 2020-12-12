const getState = ({ getStore, getActions, setStore }) => {
	return {
        store: {

            container: [],
            typeOfMaterial: '',
            capacity: '',
            location: '',
            length: '',
            latitude: '',
            errors: null,
            notifications: [
                {
                    status: "",
                    notify: "",
                    notificationDate: ""
                }
            ],

            currentUser: null,

            user_signup:{
                username : "",
                email : "",
                password : ""

            },
            user_login:{
                email : "",
                password : ""
            }
        },
        ///////////////////////////////

        // Fetch Send Notify - Alejo //
        ///////////////////////////////
        actions: {
            onChangeUser: evento => {
                const store = getStore();
                const {user_signup} = store;
                user_signup[evento.target.name] = evento.target.value
                setStore({user_signup})
                console.log(evento.target.name)
                console.log(store.user_signup)
            },
            onSubmitSignup: evento => {
                evento.preventDefault()
                const store = getStore()
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(store.user_signup)
                }
                fetch("http://localhost:5000/users/register", options)
                .then(resp => resp.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))

            },
            onChangeUserLogin: evento => {
                const store = getStore();
                const {user_login} = store;
                user_login[evento.target.name] = evento.target.value
                setStore({user_login})
                console.log(evento.target.name)
                console.log(store.user_login)
                store.currentUser = "prueba"
            },
            onSubmitLogin: evento => {
                evento.preventDefault()
                const store = getStore()
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(store.user_login)
                }
                fetch("http://localhost:5000/users/login", options)
                .then(resp => resp.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))

            },
            onClickSendNotify: (evento) => {
                evento.preventDefault();
                const store = getStore();
                console.log(store);
                let options = {
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
            //////////////////////////////////////
            // Fetch List Notifications - Alejo //
            //////////////////////////////////////
	        getNotifications: async () =>{
                console.log('---Flux Get Notifications---')
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                fetch("http://127.0.0.1:5000/api/get_notification", config)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                    setStore({notifications: data})
                })
                .catch((error) => console.log(error));
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