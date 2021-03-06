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

            operator: [],
            editOperator: {},
            username: '',
            emailO: '',
            telefono: '',

            company:[],
            editCompany: {},
            businessName: '',
            rut: '',
            email: '',
            phone1: '',
            phone2: '',
            address: '',
            regional: '',
            commune: '',

            errors: null,
            currentNotify: "",
            currentUser: null,

            notifications: [
                {
                    status: "",
                    notify: "",
                    notificationDate: ""
                }
            ],

            users: [],

            roles: [
                {
                    description: "Operador de Rutas",
                    status: "Activo"
                },
                {
                    description: "Administrador de Rutas",
                    status: "Activo"
                }
            ],

            notify: {
                status: "Pendiente",
                notify: "Enviada",
            },

            user_signup: {
                username: "",
                email: "",
                password: ""
            },
        },
        actions: {
            onChangeUser: evento => {
                const store = getStore();
                const { user_signup } = store;
                user_signup[evento.target.name] = evento.target.value
                setStore({ user_signup })
                console.log(evento.target.name)
                console.log(store.user_signup)
            },
            onSubmitSignup: evento => {
                evento.preventDefault()
                const store = getStore()
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
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
                const { user_login } = store;
                user_login[evento.target.name] = evento.target.value
                setStore({ user_login })
                console.log(evento.target.name)
                console.log(store.user_login)
            },
            onSubmitLogin: evento => {
                evento.preventDefault()
                const store = getStore()
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(store.user_login)
                }
                fetch("http://localhost:5000/users/login", options)
                    .then(resp => resp.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
                store.currentUser = store.data
            },
            //////////////////////////////////////
            // Fetch Send Notifications - Alejo //
            //////////////////////////////////////
            onClickSendNotify: (evento) => {
                evento.preventDefault();
                const store = getStore();
                console.log("Click para enviar", store.notify);
                const config = {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(store.notify),
                }
                fetch("http://127.0.0.1:5000/api/create_notification", config)
                    .then(resp => resp.json())
                    .then(data => console.log(data))
                    .catch((error) => console.log(error))
                const sendNotify = "Enviada"
                setStore({ ...sendNotify })
                store.currentNotify = "Enviada"
                console.log("En el Flux", store.currentNotify)
            },
            //////////////////////////////////////
            // Fetch List Notifications - Alejo //
            //////////////////////////////////////
            getNotifications: () => {
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
                        setStore({ notifications: data })
                    })
                    .catch((error) => console.log(error));
            },

            handleChange: (e) => {
                setStore({
                    [e.target.name]: e.target.value
                });
            },

            //////////////////////////////
            // Fetch List Users - Alejo //
            //////////////////////////////
            getUsers: () => {
                console.log('---Flux Get Usuarios---')
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                fetch("http://127.0.0.1:5000/api/get_user", config)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setStore({ users: data })
                    })
                    .catch((error) => console.log(error));
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
                const { container } = getStore();
                setStore({ editContainer: container[index] });
                console.log(container[index]);
            },

            updateContainer: (e, container) => {
                e.preventDefault();
                const { editContainer } = getStore();
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
                    getActions().getContainer("http://127.0.0.1:5000/api/container")
                    console.log(data)
                })
                .catch((error) => console.log(error));
            },

            deleteContainer: (index, id) => {
                const { container } = getStore();
                container.splice(index, 1)
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

            getContainer: (url) => {
                fetch(url)
                .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setStore({ container: data })
                })
                .catch((error) => console.log(error));
            },

            addOperator: (e) => {
                e.preventDefault();
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/operator/add_operator", {
                    method: 'POST',
                    body: JSON.stringify({
                        "username": store.username,
                        "emailO": store.emailO,
                        "telefono": store.telefono
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        getActions().getOperator("http://127.0.0.1:5000/api/operator")
                        console.log(data)
                    })
                    .catch((error) => console.log(error));
            },

            editOperator: (index) => {
                const { operator } = getStore();
                setStore({ editOperator: operator[index] });
                console.log(operator[index]);
            },

            updateOperator: (e, operator) => {
                e.preventDefault();
                const { editOperator } = getStore();
                const { userId } = editOperator
                console.log(e, operator)
                fetch(`http://127.0.0.1:5000/api/operator/update_operator/${userId}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        "username": operator.username,
                        "emailO": operator.emailO,
                        "telefono": operator.telefono
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        getActions().getOperator("http://127.0.0.1:5000/api/operator")
                        console.log(data)
                    })
                    .catch((error) => console.log(error));
            },

            deleteOperator: (index, id) => {
                const { operator } = getStore();
                operator.splice(index, 1)
                setStore(...operator)
                console.log(index)
                console.log(id)
                fetch(`http://127.0.0.1:5000/api/operator/delete_operator/${id}`,
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

            getOperator: (url) => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setStore({ operator: data })
                    })
                    .catch((error) => console.log(error));
            },

            deleteCompany: (index, id) => {
                const { company } = getStore();
                company.splice(index, 1)
                setStore(...company)
                console.log(index)
                console.log(id)
                fetch(`http://127.0.0.1:5000/api/compania/delete_compania/${id}`,
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

            addCompany: (e) => {
                e.preventDefault();
                const store = getStore();
                fetch("http://127.0.0.1:5000/api/compania/compania", {
                    method: 'POST',
                    body: JSON.stringify({
                        "businessName": store.businessName,
                        "rut": store.rut,
                        "email": store.email,
                        "phone1": store.phone1,
                        "phone2": store.phone2,
                        "address": store.address,
                        "regional": store.regional,
                        "commune": store.commune
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                getActions().getCompany("http://127.0.0.1:5000/api/compania")
                    console.log(data)
                })
                .catch((error) => console.log(error));
            },

            editCompany: (index) => {
                const { company } = getStore();
                setStore({ editCompany: company[index] });
                console.log(company[index]);
            },

            updateCompany: (e, company) => {
                e.preventDefault();
                const { editCompany } = getStore();
                const { companyId } = editCompany
                console.log(e, company)
                fetch(`http://127.0.0.1:5000/api/compania/update_compania/${companyId}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        "businessName": company.businessName,
                        "rut": company.rut,
                        "email": company.email,
                        "phone1": company.phone1,
                        "phone2": company.phone2,
                        "address": company.address,
                        "regional": company.regional,
                        "commune": company.commune
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    getActions().getCompany("http://127.0.0.1:5000/api/compania")
                    console.log(data)
                })
                .catch((error) => console.log(error));
            },

            getCompany: (url) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setStore({ company: data })
                })
                .catch((error) => console.log(error));
            },
        },
    };
};

export default getState;