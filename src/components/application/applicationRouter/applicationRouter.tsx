import * as React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import _map from "lodash/map";
import _range from "lodash/range";

import StaffLogin from "../../oAuth/staffLogIn";
import Console from "../../console/console";

import { ProtectedRoute } from "./protectedRoute";

import { ApplicationRoutes } from "./../../../types";
import PageManagement from "../../Sections/pageManagement/pageManagement";
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

        <Route
          path={ApplicationRoutes.Dashboard}
          element={<h1>Dashboard</h1>}
        />
        <Route path="*" element={<h1>Console Page Not Found</h1>} />

        <Route path={ApplicationRoutes.PageMgt} element={<PageManagement />}>
          <Route
            path={ApplicationRoutes.PageMgtList}
            element={<h1>page mgt list</h1>}
          />

          <Route
            path={ApplicationRoutes.PageMgtNew}
            element={<h1>page mgt new</h1>}
          />

          <Route
            path={ApplicationRoutes.PageMgtProfile}
            element={<h1>page mgt profile</h1>}
          />
        </Route>
      </Route>

      <Route path="*" element={<h1>Not Found</h1>} />

      <Route path="login" element={<StaffLogin />} />
      <Route path="/" element={<StaffLogin />} />
    </Switch>
  );
};

export default ApplicationRouter;
