import { selector } from "recoil";

import { todoListState, todoListFilterState } from "./atoms";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(filteredTodoListState);
    const totalNum = todoList.length;
    const totalCompleteNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompleteNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompleteNum / totalNum;

    return {
      totalNum,
      totalCompleteNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
