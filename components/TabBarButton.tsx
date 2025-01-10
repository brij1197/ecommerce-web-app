import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { icon } from "@/constants/Icons";
import { Colors } from "@/constants/Colors";

type Props = {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  label: string;
  routeName: string;
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, isFocused, label, routeName } = props;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
      {routeName === "cart" && (
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      )}

      {icon[routeName]({
        color: isFocused ? Colors.primary : Colors.black,
      })}
      <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  badgeWrapper: {
    position: "absolute",
    color: Colors.highlight,
    top: -5,
    right: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex: 10,
  },
  badgeText: {
    color:Colors.black,
    fontSize: 12,
  },
});

export default TabBarButton;
