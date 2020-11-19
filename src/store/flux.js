const getState = ({ getStore, getActions, setStore }) => {
	return {
        store: {
            peopleID: {},
		},
        actions: {
            getPeopleID: (url) => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => setStore({ peopleID: data }))
            },
            },
		}
	};
export default getState;