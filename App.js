import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import twitter from "./assets/twitter.png";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontWeight: "700", fontSize: 35, marginTop: 50 }}>Login</Text>

      <View style={{ width: "70%", marginTop: 50 }}>
        <Text>Username</Text>
        <View style={styles.textInputContainer}>
          <AntDesign name="user" size={24} color="#bfbfbf" />
          <TextInput style={styles.textInput} placeholder="Enter Username Here"></TextInput>
        </View>
      </View>
      <View style={{ width: "70%", marginTop: 20 }}>
        <Text>Password</Text>
        <View style={styles.textInputContainer}>
          <AntDesign name="lock" size={24} color="#bfbfbf" />
          <TextInput style={styles.textInput} placeholder="Enter Password Here"></TextInput>
        </View>
      </View>
      <View style={{ width: "70%", alignItems: "flex-end" }}>
        <Text style={{ marginTop: 5 }}>Forgot Password?</Text>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 30,
          width: "70%",
          height: 40,
        }}
      >
        <LinearGradient
          style={{ width: "100%", height: "100%", borderRadius: 20, alignItems: "center", justifyContent: "center" }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#63d1dc", "#a28beb", "#e142f7"]}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>LOGIN</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={{ marginTop: 50, color: "#777777" }}>Or Sign Up Using</Text>
      <View style={{ flex: 0.25, flexDirection: "row", marginTop: 20 }}>
        <Image style={{ marginHorizontal: 3 }} source={facebook}></Image>
        <Image style={{ marginHorizontal: 3 }} source={twitter}></Image>
        <Image style={{ marginHorizontal: 3 }} source={google}></Image>
      </View>
      <Text style={{ marginTop: 200, color: "#777777" }}>Or Sign Up Using</Text>
      <Text style={{ marginTop: 15, fontSize: 13 }}>SIGN UP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: { marginLeft: 10, height: 40, width: "90%" },
  textInputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#bfbfbf",
  },
});
