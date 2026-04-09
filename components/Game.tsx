import React from "react";
import { Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Game = () => {
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      const { translationX, translationY } = e;
      console.log("X:", translationX);
      console.log("y:", translationY);
    })
    .onEnd(() => {
      console.log("Gesture ended");
    });

  return (
    <GestureDetector gesture={panGesture}>
      <SafeAreaView className="bg-yellow-700 flex-1 justify-center items-center">
        <Text className="text-white">Game</Text>
      </SafeAreaView>
    </GestureDetector>
  );
};

export default Game;
