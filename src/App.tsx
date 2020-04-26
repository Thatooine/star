import React, {useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme as DefaultTheme} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// Todo: setup to run to laod
const useStyles = makeStyles((theme: DefaultTheme) => {
    return (
        {
            root: {
                width: (props: any) => `${props.appWidth}px`,
                height: (props: any) => `${props.appHeight}px`,
                display: 'flex',
                position: 'fixed'
            },
            progressBar: {
              display: 'flex',
              width:'99%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            },
          appBar: {
              width: '99%',
              height: '100%',
          }
        }
    )
});

function App() {
    const [loading] = useState(false);
    const [appWidth, setAppWidth] = useState(window.innerWidth)
    const [appHeight, setAppHeight] = useState(window.innerHeight)
    const classes = useStyles({appWidth: appWidth, appHeight: appHeight});


    window.addEventListener("resize", () => {
        // Todo: Add a debouncer
        setAppHeight(window.innerHeight)
        setAppWidth(window.innerWidth)
    })


    return (
        <div className={classes.root}>
            {
                loading &&
                <div  className={classes.progressBar}>
                <CircularProgress/>
                </div>
            }
            {
              !loading && <div className={classes.appBar}>
                <AppBar position="static">
                  <Toolbar>
                    <Button>
                      Contacts
                    </Button>
                    <Button color="inherit">Logout</Button>
                  </Toolbar>
                </AppBar>

              </div>
            }
        </div>
    );
}

export default App;
