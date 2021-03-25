import React, { FC } from "react";
import { User } from "../types";

interface UserListProps {
  users: User[];
  handleUserClick: (
    userId?: string
  ) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const UserListView: FC<UserListProps> = (props) => {
  const { users, handleUserClick } = props;
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} onClick={handleUserClick(user.email)}>
          {`${user.last_name}, ${user.first_name}` || "no name..."}
        </div>
      ))}
    </div>
  );
};
