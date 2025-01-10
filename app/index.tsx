import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <ImageBackground
      source={require("../assets/images/ecommerce-splash.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <LinearGradient
          colors={[
            "transparent",
            "rgba(255,255,255,0.9)",
            "rgba(255,255,255,1)",
          ]}
          style={styles.background}
        >
          <View style={styles.wrapper}>
            <Text>Welcome Screen</Text>
            <Link href={"/signin"} asChild>
              <TouchableOpacity>
                <Text>Go to SignIn Screen</Text>
              </TouchableOpacity>
            </Link>
            <Link href={"/signup"} asChild>
              <TouchableOpacity>
                <Text>Go to SignUp Screen</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
