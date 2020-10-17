import React, {useContext, useState} from "react";

export interface UserContext {
    loggedIn?: boolean,
    setUserLoggedIn?: (loggedIn: boolean) => void
}

const Context = React.createContext<UserContext>({});

export const UserContext = (props: any) => {
    const [loggedIn, setIsLoggedIn] = useState(false)
    return (
        <Context.Provider
            value={{
                loggedIn: loggedIn,
                setUserLoggedIn: (loggedIn) => (setIsLoggedIn(loggedIn))
            }}
        >
            {props.children}
        </Context.Provider>

    )
}
// allows to have access to current state of the context
export const useUserContext = () => useContext<UserContext>(Context)