import React from "react";
import _map from "lodash/map";
import { Link } from "react-router-dom";
import { ApplicationRoutes, TPages, IntPage } from "../../../../types";

interface IPageManagementListTable {
  data: TPages;
}

const PageManagementListTable: React.FC<IPageManagementListTable> = ({
  data
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Url</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {_map(data, (page: IntPage) => (
            <tr key={page._id}>
              <td>{page.name}</td>
              <td>{page.url}</td>
              <td>{page.isActive ? "Active" : "Inactive"}</td>
              <td>
                <Link to={`${ApplicationRoutes.PageMgtProfileLink}${page._id}`}>
                  go
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PageManagementListTable;
