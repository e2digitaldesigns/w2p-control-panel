import * as React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import _map from "lodash/map";
import _range from "lodash/range";

import StaffLogin from "../../oAuth/staffLogIn";
import Console from "../../console/console";

import { ProtectedRoute } from "./protectedRoute";

import { ApplicationRoutes } from "./../../../types";
import PageManagement from "../../Sections/pageManagement/pageManagement";
import PageManagementList from "../../Sections/pageManagement/pageManagementList";
import PageManagementProfile from "../../Sections/pageManagement/pageManagementProfile";
import PageManagementNew from "../../Sections/pageManagement/pageManagementNew";
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
            index
            // path={ApplicationRoutes.PageMgtList}
            element={<PageManagementList />}
          />

          <Route
            path={ApplicationRoutes.PageMgtNew}
            element={<PageManagementNew />}
          />

          <Route
            path={ApplicationRoutes.PageMgtProfile}
            element={<PageManagementProfile />}
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
