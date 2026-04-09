import { COLORS } from "@/constant";
import { Coordinate, Direction } from "@/types";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Snake from "./Snake";

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POSITION = { x: 5, y: 20 };
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 63 };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;

const Game = () => {
  const [direction, setDirection] = useState<Direction>(Direction.RIGHT);
  const [snake, setSnake] = useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
  const [food, setFood] = useState<Coordinate>(FOOD_INITIAL_POSITION);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isGameOver) return;

    const intervalId = setInterval(() => {
      !isPaused && moveSnake();
    }, MOVE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [snake, isGameOver, isPaused]);

  const moveSnake = () => {
    const sneakHead = snake[0];
    const newHead = { ...sneakHead };

    switch (direction) {
      case Direction.UP:
        newHead.y -= 1;
        break;
      case Direction.DOWN:
        newHead.y += 1;
        break;
      case Direction.LEFT:
        newHead.x -= 1;
        break;
      case Direction.RIGHT:
        newHead.x += 1;
        break;

      default:
        break;
    }

    setSnake([newHead, ...snake.slice(0, -1)]);
  };

  const panGesture = Gesture.Pan()

    .onUpdate((e) => {
      const { translationX, translationY } = e;
      console.log("X:", translationX);
      console.log("y:", translationY);

      if (Math.abs(translationX) > Math.abs(translationY)) {
        if (translationX > 0) {
          /// right
          setDirection(Direction.RIGHT);
        } else {
          // left
          setDirection(Direction.LEFT);
        }
      } else {
        if (translationY > 0) {
          /// down
          setDirection(Direction.DOWN);
        } else {
          setDirection(Direction.UP);
          // up
        }
      }
    })

    .onEnd(() => {
      console.log("Gesture ended");
    });

  return (
    <GestureDetector gesture={panGesture}>
      <SafeAreaView style={styles.container}>
        <View style={styles.boundaries}>
          <Snake snake={snake} />
        </View>
      </SafeAreaView>
    </GestureDetector>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  boundaries: {
    flex: 1,
    borderColor: "black",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: COLORS.background,
  },
});
