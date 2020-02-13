import React from 'react';
import { Link, Switch } from "react-router-dom";
import { routes } from '../routes/routes';
import { RouteWithSubRoutes } from '../routes/RouteWithSubRoutes';
import PrimaryAppBar from '../components/header/PrimaryAppBar';

class Defaults extends React.Component {
    render() {
        return (
            <div>
                <PrimaryAppBar />
                <main>
                    <Switch>
                        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Defaults;