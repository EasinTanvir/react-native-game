import { COLORS } from "@/constant";
import { Coordinate } from "@/types";
import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";

interface SnakeProps {
  snake: Coordinate[];
}

const Snake = ({ snake }: SnakeProps) => {
  return (
    <Fragment>
      {snake.map((segment: Coordinate, index: number) => {
        const segmentStyle = {
          left: segment.x * 10,
          top: segment.y * 10,
        };
        return <View key={index} style={[styles.snake, segmentStyle]} />;
      })}
    </Fragment>
  );
};

export default Snake;

const styles = StyleSheet.create({
  snake: {
    width: 15,
    height: 15,
    backgroundColor: COLORS.primary,
    position: "absolute",
    borderRadius: 7,
  },
});
