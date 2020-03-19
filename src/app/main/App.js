import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Main, EmptyLayout } from "../layouts";
import { routes, empty } from "../routes";
import { NotFound } from "app/pages";

const options = {
  position: "top center",
  timeout: 5000,
  offset: "30px",
  transition: "scale"
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <Switch>
          {empty.map((value, i) => {
            return (
              <Route
                key={i + "e"}
                exec
                path={value.path}
                component={EmptyLayout}
              />
            );
          })}
          {routes.map((value, i) => {
            console.log(value);
            return <Route key={i} exec path={value.path} component={Main} />;
          })}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
