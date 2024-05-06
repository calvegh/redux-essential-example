import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "../users/usersSlice";

export const PostAuthor = () => {
  const author = useSelector(selectUserById);
  return <span>{author ? author.name : "Autor desconocido"}</span>;
};
