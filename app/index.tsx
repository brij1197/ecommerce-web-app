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
import { Colors } from "@/constants/Colors";
import Animated, { FadeInRight } from "react-native-reanimated";
import SocialLoginButtons from "@/components/SocialLoginButtons";

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
            <Animated.Text
              style={styles.title}
              entering={FadeInRight.delay(300).duration(300).springify()}
            >
              ShopX
            </Animated.Text>
            <Animated.Text
              style={styles.description}
              entering={FadeInRight.delay(500).duration(300).springify()}
            >
              Discover Your Style
            </Animated.Text>
            <SocialLoginButtons />
            <Text style={styles.loginTxt}>
              Already have an account?{" "}
              <Link href={"/signin"} asChild>
                <TouchableOpacity>
                  <Text style={styles.loginTxtSpan}>SignIn</Text>
                </TouchableOpacity>
              </Link>
            </Text>
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
  title: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: "700",
    letterSpacing: 2.4,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    lineHeight: 30,
    marginBottom: 20,
  },
  loginTxt: {
    marginTop: 30,
    fontSize: 14,
    lineHeight: 24,
    color: Colors.black,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
});
