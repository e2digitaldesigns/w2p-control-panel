import React, { useState } from "react";
import _map from "lodash/map";
import {
  Activity,
  CheckSquare,
  MessageSquare,
  Search,
  Settings
} from "react-feather";
import * as Styled from "./sidebarRight.style";
import { useTemplate } from "../../../hooks";
import ActivityFeed from "./activityFeed/activityFeed";
import TaskList from "./taskList/taskList";
import StaffSettings from "./staffSettings/staffSettings";

const BlankPanel: React.FC<{ index: number }> = ({ index }) => (
  <h1>blank {index}</h1>
);

const SidebarRight: React.FC = () => {
  const [activePanel, setActivePanel] = useState<number>(2);
  const { templateState } = useTemplate();

  const handleActivePanel = (panel: number): void => {
    setActivePanel(panel);
  };

  const sidebarObj = [
    {
      component: <ActivityFeed />,
      icon: <Activity />,
      tag: "activity"
    },
    {
      component: <TaskList />,
      icon: <CheckSquare />,
      tag: "task",
      isCounter: templateState?.sidebarMenuRight?.unCompletedTasks || 0
    },
    {
      component: <StaffSettings />,
      icon: <Settings />,
      tag: "settings"
    },
    {
      component: <BlankPanel index={3} />,
      icon: <Search />,
      tag: "search"
    },
    {
      component: <BlankPanel index={4} />,
      icon: <MessageSquare />,
      tag: "messaging"
    }
  ];

  return (
    <Styled.SidebarRightWrapper data-testid="sidebar-right-wrapper">
      <Styled.SidebarRightMenu
        aria-label="Right side bar menu"
        data-testid="sidebar-right-menu"
        role="navigation"
      >
        {_map(sidebarObj, (item: any, index) => (
          <Styled.SidebarRightMenuItem
            isCounter={item?.isCounter}
            key={index}
            data-testid={`sidebar-right-menu-item-${item.tag}`}
            isActive={activePanel === index}
            onClick={() => handleActivePanel(index)}
          >
            <Styled.NumCount amount={item.isCounter || 0}>
              {item.isCounter}
            </Styled.NumCount>
            {item.icon}
          </Styled.SidebarRightMenuItem>
        ))}
      </Styled.SidebarRightMenu>

      <Styled.SidebarScrollerContainer data-testid="sidebar-right-scroller-container">
        {_map(sidebarObj, (item, index) => (
          <Styled.SidebarPanel
            key={index}
            data-testid={`sidebar-right-panel-${item.tag}`}
            isActive={activePanel === index}
          >
            {item.component}
          </Styled.SidebarPanel>
        ))}

        <Styled.SidebarPanel
          data-testid={`sidebar-right-panel-loader`}
          isActive={false}
        ></Styled.SidebarPanel>
      </Styled.SidebarScrollerContainer>
    </Styled.SidebarRightWrapper>
  );
};

export default SidebarRight;
