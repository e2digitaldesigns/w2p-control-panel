import React, { useEffect, useRef, useState } from "react";
import _map from "lodash/map";
import * as Styled from "./taskList.style";

import { IntTask } from "../../../../types";
import { useTaskList } from "../../../../hooks";
import TaskListItem from "./taskListItem";

const ToDoList: React.FC = () => {
  const [toDoItems, setToDoItems] = useState<IntTask[]>([]);
  const [taskText, setTaskText] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { createTask, useGetTasks, removeTask, updateTask, unCompleteTasks } =
    useTaskList();
  const { isLoading, data } = useGetTasks();

  const unCompleteTasksCB = React.useCallback(
    data => unCompleteTasks(data),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );

  useEffect(() => {
    let stillHere = true;

    if (!isLoading && stillHere && data) {
      unCompleteTasksCB(data);
      if (data) setToDoItems(data);
    }

    return () => {
      stillHere = false;
    };
  }, [isLoading, data, unCompleteTasksCB]);

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

      if (scrollRef?.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }
  };

  return (
    <Styled.ToDoWrapper>
      <Styled.ToDoItems role="list" ref={scrollRef}>
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
