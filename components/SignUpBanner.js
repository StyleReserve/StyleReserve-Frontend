import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Signupbanner = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.signupbannerView}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/check.png")}
      />
      <Text style={[styles.text2, styles.mt8]}>
        <Text style={styles.text}>계정 생성이 완료되어{"\n"}로그인 화면으로 돌아갑니다</Text>
      </Text>
      <Pressable
        style={[styles.groupPressable, styles.mt8]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.text3}>로그인 화면으로 돌아가기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 20,
  },
  icon: {
    position: "relative",
    width: 80,
    height: 80,
    flexShrink: 0,
    overflow: "hidden",
  },
  text: {
    marginBlockStart: 10,
    marginBlockEnd: 0,
    width: 350,
  },
  text2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 15,
    color: "#323232",
    textAlign: "center",
    width: 190,
    height: 50,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 14,
    borderRadius: 50,
    backgroundColor: "#a50034",
    width: 200,
    height: 40,
  },
  text3: {
    position: "absolute",
    top: 12,
    left: 19,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 192,
    height: 22,
  },
  groupPressable: {
    position: "relative",
    width: 230,
    height: 40,
    flexShrink: 0,
  },
  signupbannerView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 296,
    height: 297,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 40,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Signupbanner;
