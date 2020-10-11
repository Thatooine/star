import React, {useContext, useState} from "react";

export interface UserContext {
    loggedIn?: boolean,
    setUserLoggedIn?: () => void
}

const Context = React.createContext<UserContext>({});

export const UserContext = (props: any) => {
    const [loggedIn, setIsLoggedIn] = useState(false)
    return (
        <Context.Provider
            value={{
                loggedIn: loggedIn,
                setUserLoggedIn: () => (setIsLoggedIn(true))
            }}
        >
            {props.children}
        </Context.Provider>

    )
}
// allows to have access to current state of the context
export const useUserContext = () => useContext<UserContext>(Context)