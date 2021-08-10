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
    </BrowserRouter>
  );
};

export default Router;
