import React from "react";
import TimeAgo from "timeago-react";
import { Check, Trash } from "react-feather";
import * as Styled from "./taskList.style";

import { IntTask } from "../../../../types";

interface IntTaskListItem {
  handleIsChecked: (number: number) => void;
  handleRemoveItem: (string: string) => void;
  index: number;
  item: IntTask;
}

const TaskListItem: React.FC<IntTaskListItem> = ({
  handleIsChecked,
  handleRemoveItem,
  index,
  item
}) => {
  return (
    <Styled.ToDoItem key={item._id} isChecked={item.isComplete} role="listitem">
      <div>{item.isComplete && <Check />}</div>

      <div onClick={() => handleIsChecked(index)}>
        <Styled.ToDoItemText>{item.text}</Styled.ToDoItemText>

        <Styled.ToDoItemTime>
          <TimeAgo datetime={item.timestamp} />
        </Styled.ToDoItemTime>
      </div>

      <div onClick={() => handleRemoveItem(item._id || "")}>
        <Trash />
      </div>
    </Styled.ToDoItem>
  );
};

export default TaskListItem;
