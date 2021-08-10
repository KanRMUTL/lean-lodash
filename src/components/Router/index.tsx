import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import paths from "../../route/paths";
interface Props {
  chilldren: React.ReactNode;
}

const Router = ({ chilldren }: Props) => {
  return (
    <BrowserRouter>
      {chilldren}
      <div
        style={{ display: "flex", justifyContent: "space-around", padding: 10 }}
      >
        <Switch>
          {paths.map((path, index) => (
            <Route
              exact
              key={index}
              path={path.path}
              component={path.component}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
