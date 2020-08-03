import React from "react";
import { useRecoilState } from "recoil";

import { todoListFilterState } from "../recoil/atoms";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="show All">All</option>
        <option value="show Completed">Completed</option>
        <option value="show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
