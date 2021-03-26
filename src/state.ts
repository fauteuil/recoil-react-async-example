import { atom, selector } from "recoil";
import { User } from "./types";
import { getUsers } from "./service";

export const selectedUserEmailState = atom<string>({
  key: "selectedUserEmailState",
  default: ""
});

/**
 * Populate the default selector return value with a service call.
 */
export const allUsersState = selector<User[]>({
  key: "allUsersState",
  get: async ({ get }) => {
    // Referencing another state element (atom) creates a dependency:
    // Any change to the value of `selectedUserEmailState` will cause
    // the service request to be made again.
    const selectedUserEmail = get(selectedUserEmailState);
    try {
      const response = await getUsers();
      // console.log("getUsers called...");
      return response.data || [];
    } catch (error) {
      console.error(`allUsersState -> getUsers() ERROR: \n${error}`);
      return [];
    }
  }
});

/**
 * This is the atom the UI components will use to display state.
 * When `selectedUserEmailState` is updated,
 * the service request in `allUsersState.get()` will be called,
 * which will then update `userListState`
 * and trigger a redraw of any UI Components that
 * consume `userListState`.
 */
export const userListState = atom<User[]>({
  key: "userListState",
  default: allUsersState
});
