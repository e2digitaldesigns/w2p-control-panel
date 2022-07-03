import * as React from "react";
import _map from "lodash/map";
import { sidebarMenuData } from "./sidebarMenuData";
import SidebarNormalMenuItems from "./normalItems";
import { IntMenuItem } from "./../../../../types";
import SidebarMenuFooterItem from "./footerItem";

const SidebarMenuItems: React.FC = () => {
  return (
    <>
      {_map(sidebarMenuData, (menuItem: IntMenuItem, index: number) => (
        <SidebarNormalMenuItems key={index} menuItem={menuItem} />
      ))}

      <SidebarMenuFooterItem />
    </>
  );
};

export default SidebarMenuItems;
