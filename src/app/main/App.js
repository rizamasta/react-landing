import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Default, EmptyLayout } from '../layouts'
import { routes, empty } from '../routes';


const options = {
  position: 'top center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>

      <BrowserRouter>
        <Switch>
          {
            routes.map((value, i) => {
              console.log(value)
              return <Route key={i} exec={value.exact || false} path={value.path} component={Default} />
            })
          }
          {
            empty.map((value, i) => {
              return <Route key={i + "e"} exec={value.exact || false} path={value.path} component={EmptyLayout} />
            })
          }
        </Switch>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
