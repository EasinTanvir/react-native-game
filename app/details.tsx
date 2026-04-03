import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text } from "react-native";

const details = () => {
  const { name } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ title: name as string }} />
      <ScrollView className=" bg-rose-700 flex-1">
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
      </ScrollView>
    </>
  );
};

export default details;
