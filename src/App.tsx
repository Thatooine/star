import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme as DefaultTheme} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import * as firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";

// Todo: setup to run to laod
const useStyles = makeStyles((theme: DefaultTheme) => {
    return (
        {
            root: {
                width: '100%',
                height: '100%',
                display: 'flex',
            },
            progressBar: {
              display: 'flex',
              width:'100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            },
          appBar: {
              width: '100%',
              height: '100%',
          },
          toolbar: {
            display: 'flex'
          },
          toolbarLeft:{
            display: 'flex',
            flexGrow:2,
            justifyContent: 'flex-start'
          },
          toolbarRight:{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'flex-end'
          },
        }
    )
});

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

function App() {
    const [loggedIn] = useState(false);
    const classes = useStyles();
    useEffect(() => {
            firebase.initializeApp(firebaseConfig);
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', {
                signInOptions: [
                    firebase.auth.EmailAuthProvider.PROVIDER_ID
                ],
            });
    },[]);

    return (
        <div className={classes.root}>
            {
                !loggedIn &&
                <div  className={classes.progressBar}>
                <div id={'firebaseui-auth-container'}/>
                </div>
            }
            {
              loggedIn && <div className={classes.appBar}>
                <AppBar position="static">
                  <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarLeft}>
                      <Button>Contacts</Button>
                    </div>
                    <div className={classes.toolbarRight}>
                      <Button color="inherit">Logout</Button>
                    </div>
                  </Toolbar>
                </AppBar>

              </div>
            }
        </div>
    );
}

export default App;
