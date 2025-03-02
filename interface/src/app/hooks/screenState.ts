import { useState } from "react";

export type ScreenState = "START" | "LOADING" | "FINISHED";

export const useScreenState = () => {
  const [screen, setScreen] = useState<ScreenState>("START");

  const nextScreen = () => {
    if (screen === "START") setScreen("LOADING");
    else if (screen === "LOADING") setScreen("FINISHED");
  };

  return { screen, nextScreen };
};
