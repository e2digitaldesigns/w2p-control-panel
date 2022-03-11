import axios from "axios";
import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _size from "lodash/size";
import _sortBy from "lodash/sortBy";
import shortid from "shortid";

import { useTemplate } from "../../hooks/";

import { IntTask } from "../../types";

type GetTasksFn = () => Promise<IntTask[]>;

type CreateTaskFn = (
  items: IntTask[],
  taskText: string
) => Promise<IntTask[] | undefined>;

type UpdateTaskFn = (
  data: IntTask[],
  index: number
) => Promise<IntTask[] | undefined>;

type RemoveTaskFn = (
  data: IntTask[],
  _id: string
) => Promise<IntTask[] | undefined>;

type IntUnCompleteTaskFn = (data: IntTask[]) => void;

export interface IntUseTodoListHooks {
  getTasks: GetTasksFn;
  createTask: CreateTaskFn;
  updateTask: UpdateTaskFn;
  removeTask: RemoveTaskFn;
  unCompleteTask: IntUnCompleteTaskFn;
}

const useTodoListHooks = (): IntUseTodoListHooks => {
  const END_POINT = "http://localhost:3001/api/v1/todo";
  const { templateState, setTemplateState } = useTemplate();

  const createTask: CreateTaskFn = async (data, taskText) => {
    const items = _cloneDeep(data);

    const newItem: IntTask = {
      _id: shortid.generate(),
      isComplete: false,
      text: taskText,
      timestamp: Date.now().toString()
    };

    try {
      await axios.post(END_POINT, newItem);
      items.push(newItem);
      unCompleteTask(items);
      return _sortBy(items, "timestamp");
    } catch (error) {
      return undefined;
    }
  };

  const getTasks: GetTasksFn = async () => {
    try {
      const { data } = await axios.get(END_POINT);
      unCompleteTask(data.Items);
      return data.Items;
    } catch (error) {
      return [];
    }
  };

  const updateTask: UpdateTaskFn = async (data, index) => {
    try {
      const items = _cloneDeep(data);
      const item = items[index];
      items[index].isComplete = !items[index].isComplete;
      await axios.put(`${END_POINT}/${item._id}`, item);
      unCompleteTask(items);
      return items;
    } catch (error) {
      return undefined;
    }
  };

  const removeTask: RemoveTaskFn = async (data, _id) => {
    try {
      await axios.delete(`${END_POINT}/${_id}`);
      const filtered = _filter(data, (f: IntTask) => f._id !== _id);
      unCompleteTask(filtered);
      return filtered;
    } catch (error) {
      return undefined;
    }
  };

  const unCompleteTask: IntUnCompleteTaskFn = data => {
    const taskNum = _size(
      _filter(data, (task: IntTask) => task.isComplete === false)
    );

    const newTemplateState = _cloneDeep(templateState);
    newTemplateState.sidebarMenuRight.unCompletedTasks =
      taskNum > 100 ? 99 : taskNum;
    setTemplateState(newTemplateState);
  };

  return {
    createTask,
    getTasks,
    updateTask,
    removeTask,
    unCompleteTask
  };
};

export default useTodoListHooks;
