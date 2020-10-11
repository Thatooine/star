import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme as DefaultTheme} from "@material-ui/core/styles/createMuiTheme";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInSide from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";

const useStyles = makeStyles((theme: DefaultTheme) => ({
    root:{}
}))


export const AppRouter = () => {
    const classes = useStyles();

    const [loggedIn] = useState(false);
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <Switch>
                    <Route
                        path={"/home"}
                        render={() => {
                            if (!loggedIn){
                                return <SignInSide/>
                            } else {
                                return <Home/>
                            }
                        }}
                    />
                    <Route
                        path={"/sign-in"}
                        render={() => {
                            return <SignInSide/>
                        }}
                    />
                    <Route
                        path={"/sign-up"}
                        render={() => {
                            return <SignUp/>
                        }}
                    />
                    <Route
                        path={"/"}
                        render={() => {
                            if (!loggedIn){
                                return <SignInSide/>
                            } else {
                                return <Home/>
                            }
                        }}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
}