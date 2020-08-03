import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../recoil/selectors";
import { TodoListStats } from "./TodoListStats";
import { TodoListFilters } from "./TodoListFilters";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => {
        return <TodoItem key={todoList.id} item={todoItem} />;
      })}
    </>
  );
};
