import { Route, Switch } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'

function Routes() {
    return (
        <Switch>
            <Route path='/' exact />
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
            <Route path="*">
                <NotFound />
            </Route> 
        </Switch>
    )
}
export default Routes