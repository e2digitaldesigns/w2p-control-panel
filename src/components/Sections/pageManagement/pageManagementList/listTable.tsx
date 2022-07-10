import React from "react";
import _map from "lodash/map";
import { Link } from "react-router-dom";
import { ApplicationRoutes, TPages, IntPage } from "../../../../types";
import * as Styled from "../../../../paper/table/table.style";

interface IPageManagementListTable {
  data: TPages;
}

const PageManagementListTable: React.FC<IPageManagementListTable> = ({
  data
}) => {
  return (
    <>
      <Styled.Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Url</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {_map(data, (page: IntPage) => (
            <tr key={page._id}>
              <td>
                <Link to={`${ApplicationRoutes.PageMgtProfileLink}${page._id}`}>
                  {page.name}
                </Link>
              </td>
              <td>{page.url}</td>
              <td>{page.isActive ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </>
  );
};

export default PageManagementListTable;
