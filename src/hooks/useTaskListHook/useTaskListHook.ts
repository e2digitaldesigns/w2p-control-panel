import _cloneDeep from "lodash/cloneDeep";
import _filter from "lodash/filter";
import _size from "lodash/size";
import _sortBy from "lodash/sortBy";

import { useTemplate } from "../../hooks/";

import { Endpoints, IntTask, QueryKeys } from "../../types";
import http from "../../utils/httpService/httpService";
import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";

type TGetTasksFn = () => any;

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

type IntUnCompleteTasksFn = (data: IntTask[]) => void;

export interface IntUseTodoListHooks {
  createTask: CreateTaskFn;
  useGetTasks: TGetTasksFn;
  updateTask: UpdateTaskFn;
  removeTask: RemoveTaskFn;
  unCompleteTasks: IntUnCompleteTasksFn;
}

const useTodoListHooks = (): IntUseTodoListHooks => {
  const END_POINT = Endpoints.Tasks;
  const { templateState, setTemplateState } = useTemplate();

  const createTask: CreateTaskFn = async (data, taskText) => {
    const items = _cloneDeep(data);

    const newItem: IntTask = {
      isComplete: false,
      text: taskText,
      timestamp: Date.now().toString()
    };

    try {
      const { data } = await http.post(END_POINT, { taskObj: newItem });
      delete data.__v;
      items.push(data);
      unCompleteTasks(items);
      return _sortBy(items, "timestamp");
    } catch (error) {
      return undefined;
    }
  };

  const useGetTasks: TGetTasksFn = (): UseQueryResult => {
    return useQuery<IntTask[], AxiosError>(
      QueryKeys.Task,
      async (): Promise<IntTask[]> => http.get(END_POINT).then(res => res.data),
      {
        staleTime: 30 * 1000
      }
    );
  };

  const updateTask: UpdateTaskFn = async (data, index) => {
    try {
      const items = _cloneDeep(data);
      const item = items[index];
      items[index].isComplete = !items[index].isComplete;
      await http.put(`${END_POINT}/${item._id}`, { updateObj: item });
      unCompleteTasks(items);
      return items;
    } catch (error) {
      return undefined;
    }
  };

  const removeTask: RemoveTaskFn = async (data, _id) => {
    try {
      await http.delete(`${END_POINT}/${_id}`);
      const filtered = _filter(data, (f: IntTask) => f._id !== _id);
      unCompleteTasks(filtered);
      return filtered;
    } catch (error) {
      return undefined;
    }
  };

  const unCompleteTasks: IntUnCompleteTasksFn = data => {
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
    useGetTasks,
    updateTask,
    removeTask,
    unCompleteTasks
  };
};

export default useTodoListHooks;
