import React, { useEffect, useState } from "react";
import TimeAgo from "timeago-react";
import { Check, Trash } from "react-feather";
import _map from "lodash/map";
import * as Styled from "./taskList.style";

import { IntTask } from "../../../../types";
import { useTaskList } from "../../../../hooks";
import TaskListItem from "./taskListItem";

const ToDoList: React.FC = () => {
  const [toDoItems, setToDoItems] = useState<IntTask[]>([]);
  const [taskText, setTaskText] = useState<string>("");

  const { createTask, useGetTasks, removeTask, updateTask, unCompleteTasks } =
    useTaskList();
  const { isLoading, data } = useGetTasks();

  useEffect(() => {
    let stillHere = true;

    if (!isLoading && stillHere && data) {
      unCompleteTasks(data);
      if (data) setToDoItems(data);
    }

    return () => {
      stillHere = false;
    };
  }, [isLoading, data]);

  const handleIsChecked = async (index: number): Promise<void> => {
    try {
      const items = await updateTask(toDoItems, index);
      items && setToDoItems(items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveItem = async (_id: string): Promise<void> => {
    try {
      const items = await removeTask(toDoItems, _id);
      items && setToDoItems(items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTaskText(e.target.value);
  };

  const handleAddItem = async (): Promise<void> => {
    if (!taskText) return;
    const newItems = await createTask(toDoItems, taskText);

    if (newItems) {
      setToDoItems(newItems);
      setTaskText("");
    }
  };

  return (
    <Styled.ToDoWrapper>
      <Styled.ToDoItems role="list">
        {_map(toDoItems, (item, index: number) => (
          <TaskListItem
            handleIsChecked={handleIsChecked}
            handleRemoveItem={handleRemoveItem}
            key={item._id}
            index={index}
            item={item}
          />
        ))}
      </Styled.ToDoItems>

      <Styled.ToDoForm role="form" aria-label="Add a task">
        <div>
          <Styled.Textarea
            aria-label="New Task Message"
            id="exampleFormControlTextarea1"
            onChange={handleOnChange}
            value={taskText}
          />
        </div>

        <Styled.AddButton disabled={!taskText} onClick={handleAddItem}>
          Submit New Task Item
        </Styled.AddButton>
      </Styled.ToDoForm>
    </Styled.ToDoWrapper>
  );
};

export default ToDoList;
