import { useLocalStorage } from "usehooks-ts";
import { v4 as uuid } from "uuid";
import { ColumnType } from "../utils/enums";
import { ITask } from "../utils/models";

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: ITask[];
  }>("tasks", {
    Todo: [
      {
        id: uuid(),
        column: ColumnType.TODO,
        title: "Task 1",
        color: "blue.300",
      },
    ],
    "In Progress": [
      {
        id: uuid(),
        column: ColumnType["IN_PROGRESS"],
        title: "Task 2",
        color: "yellow.300",
      },
    ],
    Complete: [
      {
        id: uuid(),
        column: ColumnType.COMPLETE,
        title: "Task 3",
        color: "green.300",
      },
    ],
    Blocked: [
      {
        id: uuid(),
        column: ColumnType.BLOCKED,
        title: "Task 4",
        color: "red.300",
      },
    ],
  });
}

export default useTaskCollection;
