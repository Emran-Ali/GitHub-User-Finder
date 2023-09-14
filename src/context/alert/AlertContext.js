import { createContext, useReducer } from "react"
import alertReducer from "./alertReducer"

const AlertContext = createContext();
export const AlertProvider = ({ children }) => {
    const initialState = null;
    const [state, dispatch] = useReducer(alertReducer, initialState);

    //set Alert
    const setAlert = (massag, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { massag, type }
        })

        setTimeout(() => dispatch({ type: 'Remove_Alert' }), 3000)
    }


    return <AlertContext.Provider value={{
        alert: state,
        setAlert,

    }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext;
