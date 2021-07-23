import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routesConfig, { IFMenu } from './config';
import AllComponents from '../pages';

class CRouter extends Component {
    iterteMenu = (r: IFMenu) => {
        const Component = r.component && AllComponents[r.component];
        return (
            <Route path={r.key} component={Component} />
        )
    }
    createRoute = (key: string) => {
        return routesConfig[key].map(this.iterteMenu);
    }
    render() {
        return (
            <Switch>
                {Object.keys(routesConfig).map((key) => this.createRoute(key))}
            </Switch>
        )
    }
}
export default CRouter