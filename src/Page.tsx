import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './pages/errorPage/NotFound';
import Home from './pages/home/Index';
import App from './App';

const page = () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/index" push />} />
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);
export default page