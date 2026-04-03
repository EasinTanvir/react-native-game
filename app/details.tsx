import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const details = () => {
  const { name } = useLocalSearchParams();
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default details;
