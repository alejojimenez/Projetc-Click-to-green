import React from 'react';
import ReactDOM from 'react-dom';
import './styles/StyleNavbar.scss';
import './styles/StylesMP.scss';
import './styles/StyleContainers.scss';
import './styles/StyleViewCompany.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from 'react-redux'
import generateStore from './store/store'

const store = generateStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
