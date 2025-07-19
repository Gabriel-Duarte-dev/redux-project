import { useState } from "react";
import { useAppSelector } from "./useAppSelector";
import type { User } from "../stores/users/types";

export function useFilter() {
  const { users, favorites } = useAppSelector((state) => state.users);
  const [filter, setFilter] = useState("");

  function applyFilter(data: User[]) {
    if (!filter.trim().toLocaleLowerCase()) return data;

    return data.filter((user) =>
      user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

  return {
    users: applyFilter(users),
    favorites: applyFilter(favorites),
    filter,
    setFilter,
  };
}
