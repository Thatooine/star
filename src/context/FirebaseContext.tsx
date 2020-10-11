import React, {useContext, useState} from "react";
import firebase from "firebase";

export interface FirebaseContext {
    UserDetails?: string
    SignInUser: (email: string, password: string) => void,
    SignUpUser?: (firstName: string, lastName: string, email: string, password: string) => void
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

const Context = React.createContext<FirebaseContext>({
    SignInUser: () => {console.log("called the dud service")}
})

export const FirebaseContext = (props: any) => {
    const [firebaseApp] = useState<any>(firebase.apps.length === 0 ? firebase.initializeApp(firebaseConfig): firebase.app())
    const SignInUser = async (email: string, password: string) => {
        try {
            await SignOutUser()
            const firebaseSignInResponse = await firebaseApp.auth().signInWithEmailAndPassword(email, password)
            const token = await firebaseSignInResponse.user?.getIdToken()
            // @ts-ignore
                console.log('sign in --------> credential ', token)

        } catch (e) {
            throw e
        }
    }

    const SignOutUser = async () => {
        try {
            await firebaseApp.auth().signOut()
        } catch (e) {
            console.log('signed out ----------->')
            throw e
        }
    }

    const SignUpUser = async (email: string, password: string) => {
        try {
            const firebaseSingUpUserResponse = await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            // @ts-ignore
            console.log('sign in --------> credential ', firebaseSingUpUserResponse.credential.toJSON)
        } catch (e) {
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