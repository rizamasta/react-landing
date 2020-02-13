import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Default, EmptyLayout } from '../layouts'

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
          <Route exec path="/signin" component={EmptyLayout} />
          <Route exec path="/signup" component={EmptyLayout} />
          <Route exec path="/" component={Default} />
        </Switch>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
