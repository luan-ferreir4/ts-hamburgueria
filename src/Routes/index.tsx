import { Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home";
import { RegisterPage } from "../Pages/Register";
import { SignInPage } from "../Pages/SignIn";

export const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <SignInPage/>
            </Route>
            <Route path="/register">
                <RegisterPage/>
            </Route>
            <Route path="/home">
                <HomePage/>
            </Route>
        </Switch>
    )
}