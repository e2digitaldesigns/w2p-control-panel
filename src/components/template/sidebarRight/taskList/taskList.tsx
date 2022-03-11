import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import { Check, Trash } from "react-feather";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _map from "lodash/map";
import _replace from "lodash/replace";
import * as Styled from "./taskList.style";

import { IntTask } from "../../../../types/index";
import { useTaskList } from "../../../../hooks";

const ToDoList: React.FC = () => {
  const [toDoItems, setToDoItems] = useState<IntTask[]>([]);
  const [taskText, setTaskText] = useState<string>("");

  const { createTask, getTasks, removeTask, updateTask } = useTaskList();

  useEffect(() => {
    let stillHere = true;

    const fetchData = async () => {
      try {
        const data = await getTasks();

        if (stillHere) {
          setToDoItems(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      stillHere = true;
    };
  }, []);

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
      <Styled.ToDoItems>
        {_map(toDoItems, (item, index: number) => (
          <Styled.ToDoItem key={item._id} isChecked={item.isComplete}>
            <div>{item.isComplete && <Check />}</div>

            <div onClick={() => handleIsChecked(index)}>
              <Styled.ToDoItemText>{item.text}</Styled.ToDoItemText>

              <Styled.ToDoItemTime>
                {format(item.timestamp, "en_US")}
              </Styled.ToDoItemTime>
            </div>
            <div onClick={() => handleRemoveItem(item._id)}>
              <Trash />
            </div>
          </Styled.ToDoItem>
        ))}
      </Styled.ToDoItems>

      <Styled.ToDoForm>
        <div>
          <Styled.Textarea onChange={handleOnChange} value={taskText} />
        </div>

        <Styled.AddButton disabled={!taskText} onClick={handleAddItem}>
          Add
        </Styled.AddButton>
      </Styled.ToDoForm>
    </Styled.ToDoWrapper>
  );
};

export default ToDoList;
