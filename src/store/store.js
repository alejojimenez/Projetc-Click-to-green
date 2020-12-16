import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usuarioReducer, {leerUsuarioActivoAccion} from './userSign'

const rootReducer = combineReducers({
    usuario: usuarioReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer,  composeEnhancers( applyMiddleware(thunk) ))
    leerUsuarioActivoAccion()(store.dispatch)
    return store;
}