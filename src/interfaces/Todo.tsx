export interface Todo {
  title: string;
  description: string;
  deadline: Date;
  isPending: boolean;
  finishedOn?: Date;
  key: number;
}
