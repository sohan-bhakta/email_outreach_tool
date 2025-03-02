"use client"
import { useScreenState } from "./hooks/screenState";
import StartScreen from "./screens/startingScreen";
import LoadingScreen from "./screens/loadingScreen";
import FinishedScreen from "./screens/finishedScreen";
import { useEffect } from "react";
import { Box } from "@mui/material"


const Home = () => {
  const { screen, nextScreen } = useScreenState();

  useEffect(() => {
    if (screen === "LOADING") {
      setTimeout(() => nextScreen(), 2000); // this will change when the AI is processing each row
    }
  }, [screen, nextScreen]);

  return (
    <Box sx={{
      height: "100vh"
    }}>
      {screen === "START" && <StartScreen onNext={nextScreen} />}
      {screen === "LOADING" && <LoadingScreen />}
      {screen === "FINISHED" && <FinishedScreen />}
    </Box>
  );
};

export default Home;
