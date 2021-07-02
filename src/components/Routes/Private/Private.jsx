import StoreContext from "components/Store/Context";
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() =>
        token ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default RoutesPrivate;
