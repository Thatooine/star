import React, {useContext, useState} from "react";
import firebase from "firebase";

export interface FirebaseContext {
    UserDetails?: string
    SignInUser?: (email: string, password: string) => Promise<string>,
    SignUpUser?: (email: string, password: string) => Promise<void>
    SignOutUser?: () => void
}

// Todo this should come from the config or hidden in a way
const firebaseConfig = {
    apiKey: "AIzaSyA0Eb-bvtXm2VV5ZK9oPQ7dy5DhPCHBwMw",
    authDomain: "bikinibottom-8ed47.firebaseapp.com",
    databaseURL: "https://bikinibottom-8ed47.firebaseio.com",
    projectId: "bikinibottom-8ed47",
    storageBucket: "bikinibottom-8ed47.appspot.com",
    messagingSenderId: "1023497120026",
    appId: "1:1023497120026:web:9a5d44a5d5e6faf13724a3",
    measurementId: "G-GM7884RRVX"
};

const Context = React.createContext<FirebaseContext>({})

export const FirebaseContext = (props: any) => {
    const [firebaseApp] = useState<any>(firebase.apps.length === 0 ? firebase.initializeApp(firebaseConfig) : firebase.app())
    const SignInUser = async (email: string, password: string): Promise<string> => {
        let token = ""
        try {
            await SignOutUser()
            const firebaseSignInResponse = await firebaseApp.auth().signInWithEmailAndPassword(email, password)
            token = await firebaseSignInResponse.user?.getIdToken()
        } catch (e) {
            console.log('error signing into firebase')
            throw e
        }
        return token
    }

    const SignOutUser = async () => {
        try {
            await firebaseApp.auth().signOut()
        } catch (e) {
            console.error('unable to sign out user: ', e)
            throw e
        }
    }

    const SignUpUser = async (email: string, password: string) => {
        try {
            await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        } catch (e) {
            console.error('unable to sign up user on firebase:', e)
            throw e
        }
    }

    return (
        <Context.Provider
            value={{
                SignInUser: SignInUser,
                SignOutUser: SignOutUser,
                SignUpUser: SignUpUser
            }}
        >
            {props.children}
        </Context.Provider>

    )
}

export const useFirebaseContext = () => useContext<FirebaseContext>(Context)