import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";

type Props = {};

const ProfileScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://xsgames.co/randomusers/avatar.php?g=pixel",
            }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text style={styles.userName}>John Doe</Text>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: Colors.black,
  },
});
