import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import _map from "lodash/map";
import _range from "lodash/range";
import Login from "../../oAuth/login";
import Register from "../../oAuth/register";
import Reset from "../../oAuth/reset";

const ApplicationRouter: React.FC = () => {
  return (
    <div style={{ padding: ".625rem" }}>
      <Routes>
        <Route
          path="console"
          element={
            <>
              <h1>Console</h1>
              <Outlet />
            </>
          }
        >
          {_map(_range(0, 9), (num, index) => (
            <Route
              key={index}
              path={`/console/${num.toString()}`}
              element={<h1>{`Page: ${num}`}</h1>}
            />
          ))}
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />

        <Route path="/home" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/sign-out" element={<h1>Sign Out</h1>} />
      </Routes>
    </div>
  );
};

export default ApplicationRouter;
