import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme as DefaultTheme} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "firebase/auth";
import {useFirebaseContext} from "../../context/firebaseContext";
import {useUserContext} from "../../context/userContext";


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


function Home() {
    const classes = useStyles();
    const {SignOutUser} = useFirebaseContext()
    const {setUserLoggedIn} = useUserContext()

    return (
        <div className={classes.root}>
            <div className={classes.appBar}>
                <AppBar position="static">
                  <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarLeft}>
                      <Button>Telegraph</Button>
                    </div>
                    <div className={classes.toolbarRight}>
                      <Button color="inherit"
                      onClick={async () => {
                          if (SignOutUser) {
                              await SignOutUser()
                          }
                          if (setUserLoggedIn) {
                              setUserLoggedIn(false)
                          }
                      }}
                      >Logout</Button>
                    </div>
                  </Toolbar>
                </AppBar>

              </div>
        </div>
    );
}

export default Home;
