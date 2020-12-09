const getState = ({ getStore, getActions, setStore }) => {
	return {
        store: {
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
            }
        }
	}
};
export default getState;