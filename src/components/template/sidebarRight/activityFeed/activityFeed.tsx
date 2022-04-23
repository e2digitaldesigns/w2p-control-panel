import * as React from "react";
import TimeAgo from "timeago-react";
import { LogIn } from "react-feather";
import _map from "lodash/map";
import * as Styled from "./activityFeed.style";
import data from "./mockData.json";

const TypeObj: any = {
  login: { icon: LogIn, text: "has logged in." }
};

const ActivityFeed: React.FC = () => {
  return (
    <Styled.ActivityWrapper role="list">
      {_map(data, (act, index) => (
        <Styled.ActivityIndy key={index} role="listitem">
          <Styled.ActivityIcon>
            <LogIn />
          </Styled.ActivityIcon>

          <div>
            <Styled.ActivityHeader>
              <div>{act.user}</div>
              <div>
                <TimeAgo datetime={act.timestamp} />
              </div>
            </Styled.ActivityHeader>
            <Styled.ActivityText>{TypeObj[act.type].text}</Styled.ActivityText>
          </div>
        </Styled.ActivityIndy>
      ))}
    </Styled.ActivityWrapper>
  );
};

export default ActivityFeed;
