import React from 'react';
import { Switch } from "react-router-dom";
import { routes } from '../routes/routes';
import { RouteWithSubRoutes } from 'app/routes';
import { Header, Footer } from 'app/components';
import { Grid } from '@material-ui/core';

class Default extends React.Component {
    render() {
        return (
            <div>
                <Grid container justify="center" alignContent="center" alignItems="center">
                    <Grid item lg={12}>
                        <Header />
                    </Grid>
                    <Grid item lg={12}>
                        <main style={{ minHeight: 800, marginTop: 40 }}>
                            <Switch>
                                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                            </Switch>
                        </main>
                    </Grid>
                    <Grid item lg={12}>
                        <div style={{ position: 'relative', bottom: 0 }} >
                            <Footer />
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Default;