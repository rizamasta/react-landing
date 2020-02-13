import React from 'react';
import { empty } from '../routes/routes';
import { RouteWithSubRoutes } from '../routes/RouteWithSubRoutes';
const emptyLayout = () => (
    <div>
        {empty.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
);
export default emptyLayout;