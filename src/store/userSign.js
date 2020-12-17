import {auth, firebase} from '../firebase'

// data inicial
const dataInicial = {
    loading: false,
    activo: false
}

// types
const LOADING = 'LOADING'
const USUARIO_ERROR = 'USUARIO_ERROR'
const USUARIO_EXITO = 'USUARIO_EXITO'
const CERRAR_SESION = 'CERRAR_SESION'

// reducer
export default function usuarioReducer (state = dataInicial, action) {
    switch(action.type){
        case LOADING:
            return {...state, loading: true}
        case USUARIO_ERROR:
            return {...dataInicial}
        case USUARIO_EXITO:
            return {...state, loading: false, user: action.payload, activo: true}
        case CERRAR_SESION:
            return {...dataInicial}
        default:
            return {...state}
    }
}

// action
export const ingresoUsuarioAccion = () => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {

        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)
        dispatch({
            type: USUARIO_EXITO,
            payload: {
                uid: res.user.uid,
                email: res.user.email
            }
        })
        localStorage.setItem('usuario', JSON.stringify({
            uid: res.user.uid,
            email: res.user.email
        }))
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: USUARIO_ERROR 
        })
    }
}

export const leerUsuarioActivoAccion = () => (dispatch) => {
    if(localStorage.getItem('usuario')){
        dispatch({
            type: USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })
    }
}

export const cerrarSesionAccion = () => (dispatch) => {
    auth.signOut()
    localStorage.removeItem('usuario')
    dispatch({
        type: CERRAR_SESION
    })
}