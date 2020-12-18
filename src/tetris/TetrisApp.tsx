import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Description } from "./components/Description";
import { GameRoot } from "./components/GameRoot";

import { pressLeft, pressRight, pressUp } from "../slices/tetris";

function TetrisApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("keydown", (ev) => {
      if (ev.key === "ArrowLeft") {
        dispatch(pressLeft());
      } else if (ev.key === "ArrowRight") {
        dispatch(pressRight());
      } else if (ev.key === "ArrowUp") {
        dispatch(pressUp());
      }
    });
    return () => {
      //
    };
  }, [dispatch]);
  return (
    <>
      <Description />
      <GameRoot />
    </>
  );
}

export default TetrisApp;
