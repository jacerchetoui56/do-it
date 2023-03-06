import { ColumnType } from "./enums";

export interface ITask {
  id: string;
  title: string;
  column: ColumnType;
  color: string;
}

export interface DragItem {
  index: number;
  id: ITask["id"];
  from: ColumnType;
}
