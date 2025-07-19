import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, UsersState } from "./types";

const initialState: UsersState = {
  users: [],
  favorites: [],
  loading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state) => {
      state.loading = false;
    },
    toggleFavorite: (state, action: PayloadAction<User>) => {
      const isFavorite = state.favorites.some(
        (user) => user.id === action.payload.id
      );

      state.favorites = isFavorite
        ? state.favorites.filter((user) => user.id !== action.payload.id)
        : [...state.favorites, action.payload];
    },
  },
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  toggleFavorite,
} = usersSlice.actions;
export const userReducer = usersSlice.reducer;
