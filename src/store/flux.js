const getState = ({ getStore, getActions, setStore }) => {
	return {
        store: {
            notify: {
                status: "Pendiente",
                notify: "Enviada"
                // notificationDate: ""
            },
            notifications: [
                {
                    status: "",
                    notify: "",
                    notificationDate: ""
                }
            ]
        },
        ///////////////////////////////
        // Fetch Send Notify - Alejo //
        ///////////////////////////////
        actions: {
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
            }
        },
	}
};
export default getState;