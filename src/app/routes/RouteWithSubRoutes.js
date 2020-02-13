import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DocumentTitle from 'react-document-title';
const RemoveWarning = route => (
    <Router></Router>
);
const RouteWithSubRoutes = route => (
    <DocumentTitle title={process.env.REACT_APP_NAME + ' - ' + route.pageTitle}>
        <Route
            state={route.pageTitle}
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    </DocumentTitle>
);
export { RouteWithSubRoutes, RemoveWarning };