import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import InputField from "@/components/InputField";

type Props = {};

const SignUpScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <InputField
          placeholder="Email Address"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
        placeholder="Password"
        placeholderTextColor={Colors.gray}
        secureTextEntry={true}
      />
      <InputField
        placeholder="Confirm Password"
        placeholderTextColor={Colors.gray}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Create An Account</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
    letterSpacing: 1.2,
    marginBottom: 50,
  },
  inputField: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    borderRadius: 5,
    fontSize: 16,
    color: Colors.black,
    marginBottom: 20,
  },
  btn:{
   backgroundColor: Colors.primary,
   paddingVertical: 14,
   paddingHorizontal: 18,
   borderRadius: 5,
   alignSelf: "stretch",
   alignItems: "center",
   marginBottom: 20, 
  },
  btnTxt:{
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1.2,
  }
});
