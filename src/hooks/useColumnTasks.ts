import { useCallback } from "react";
import { ColumnType } from "../utils/enums";
import useTaskCollection from "./useTasksCollection";
import { v4 as uuidv4 } from "uuid";
import { pickChakraRandomColor } from "../utils/helpers";
import { ITask } from "../utils/models";

const MAX_TASK_PER_COLUMN = 30;

//! this hook is responsible for managing the tasks in a column
function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();

  const addEmptyTask = useCallback(() => {
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        console.log("Too many task!");
        return allTasks;
      }

      const newColumnTask: ITask = {
        id: uuidv4(),
        title: `New ${column} task`,
        color: pickChakraRandomColor(".300"),
        column,
      };

      return {
        ...allTasks,
        [column]: [newColumnTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);

  const deleteTask = useCallback(
    (id: ITask["id"]) => {
      console.log(`Removing task ${id}..`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks]
  );

  const updateTask = useCallback(
    // Omit : take the type ITask and remove the id property
    // Partial : take the type ITask and make all the properties optional
    (id: ITask["id"], updatedTask: Omit<Partial<ITask>, "id">) => {
      console.log(`Updating task ${id} with ${JSON.stringify(updateTask)}`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        };
      });
    },
    [column, setTasks]
  );

  return {
    tasks: tasks[column],
    addEmptyTask,
    deleteTask,
    updateTask,
  };
}

export default useColumnTasks;
