import * as React from "react";
import { Outlet, Routes as Switch, Route } from "react-router-dom";
import _map from "lodash/map";
import _range from "lodash/range";
import Reset from "../../oAuth/reset";

import StaffLogin from "../../oAuth/staffLogIn";
import Console from "../../console/console";

import { ProtectedRoute } from "./protectedRoute";

import { Routes } from "./../../../types";
// useParams
const ApplicationRouter: React.FC = () => {
  return (
    <Switch>
      <Route
        path="console"
        element={
          <>
            <ProtectedRoute>
              <Console />
            </ProtectedRoute>
          </>
        }
      >
        {_map(_range(0, 5), (num, index) => (
          <Route
            key={index}
            path={`${num.toString()}`}
            element={<h1>{`Page: ${num}`}</h1>}
          />
        ))}

        <Route path={Routes.Dashboard} element={<h1>Dashboard</h1>} />
        <Route path="*" element={<h1>Console Page Not Found</h1>} />

        <Route
          path={Routes.PageMgt}
          element={
            <>
              <h1>page mgt header</h1> <Outlet />{" "}
            </>
          }
        >
          <Route path={Routes.PageMgtList} element={<h1>page mgt list</h1>} />

          <Route path={Routes.PageMgtNew} element={<h1>page mgt new</h1>} />

          <Route
            path={Routes.PageMgtProfile}
            element={<h1>page mgt profile</h1>}
          />
        </Route>
      </Route>

      <Route path="*" element={<h1>Not Found</h1>} />

      <Route path="login" element={<StaffLogin />} />
      <Route path="/" element={<StaffLogin />} />
      <Route path="/reset" element={<Reset />} />
    </Switch>
  );
};

export default ApplicationRouter;
