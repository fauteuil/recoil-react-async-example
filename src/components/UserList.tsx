import React from "react";
import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { UserListView } from "./UserListView";
import { selectedUserEmailState, userListState } from "../state";

/**
 * This is the React Container Component, which holds the logic
 * and passes it down to the Presentational Component as `props`.
 */
export function UserList() {
  const [usersData, setUserState] = useRecoilStateLoadable(userListState);
  const [selectedUserEmail, setSelectedUserEmail] = useRecoilState(
    selectedUserEmailState
  );

  const handleUserClick = (email?: string) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const selectedEmail = email || "";
    // console.log("handleUserClick", selectedEmail);
    setSelectedUserEmail(selectedEmail);
  };

  if (usersData.state === "hasError") {
    return <div> There is some problem! </div>;
  }

  if (usersData.state === "loading") {
    return <div>Loading...</div>;
  }

  if (usersData.state === "hasValue") {
    return (
      <>
        <UserListView
          users={usersData.contents}
          handleUserClick={handleUserClick}
        />
      </>
    );
  }

  return <div>No results...</div>;
}
