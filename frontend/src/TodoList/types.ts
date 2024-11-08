export type Task = {
  id: string;
  title: string;
  desc: string;
  completed: boolean;
};

export type UserTodoList = {
  id: string;
  name: string;
  desc: string;
  created: string;

  todos: Task[];
};
