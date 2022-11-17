import React from "react";
import { Outlet } from "react-router-dom";
import BoardLayout from "../../components/reusable/BoardLayout";

const Board = () => {
  return <BoardLayout><Outlet/></BoardLayout>;
};

export default Board;
