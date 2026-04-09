import Game from "@/components/Game";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <Game />
    </GestureHandlerRootView>
  );
};

export default Home;
