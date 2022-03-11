import * as React from "react";
import { format } from "timeago.js";
import { LogIn } from "react-feather";
import _map from "lodash/map";
import * as Styled from "./activityFeed.style";
import data from "./mockData.json";

const TypeObj: any = {
  login: { icon: LogIn, text: "has logged in." }
};

const ActivityFeed: React.FC = () => {
  return (
    <Styled.ActivityWrapper>
      {_map(data, (act, index) => (
        <Styled.ActivityIndy key={index}>
          <Styled.ActivityIcon>
            <LogIn />
          </Styled.ActivityIcon>

          <div>
            <Styled.ActivityHeader>
              <div>{act.user}</div>
              <div>{format(act.timestamp, "en_US")}</div>
            </Styled.ActivityHeader>
            <Styled.ActivityText>{TypeObj[act.type].text}</Styled.ActivityText>
          </div>
        </Styled.ActivityIndy>
      ))}
    </Styled.ActivityWrapper>
  );
};

export default ActivityFeed;
