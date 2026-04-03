import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <View className="flex-1 items-center justify-center">
        <Link href={{ pathname: "/details", params: { name: "Easin" } }}>
          <Text>Go to Details</Text>
        </Link>
      </View>
    </>
  );
}
