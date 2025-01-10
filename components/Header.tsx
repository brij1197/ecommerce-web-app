import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Header() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.logo}>SX</Text>
      <Link href={'/explore'} asChild>
      <TouchableOpacity style={styles.searchBar}>
        <Text style={styles.searchText}>Search</Text>
        <Ionicons name="search-outline" size={20} color={Colors.gray} />
      </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: Colors.white,
    gap: 15,
  },
  logo: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.primary,
  },
  searchBar: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchText: {
    color: Colors.gray,
  },
});
