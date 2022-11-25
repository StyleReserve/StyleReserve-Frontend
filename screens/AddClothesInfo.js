import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, TextInput, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Addclothfin from "../components/addclothfin";
import DropdownList from "../components/DropdownList";
import Layout from "./layout";

const AddClothesInfo = () => {
  const navigation = useNavigation();
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);
  const [outlineArrowsAltArrowDVisible, setOutlineArrowsAltArrowDVisible] =
    useState(false);

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  const openOutlineArrowsAltArrowD = useCallback(() => {
    setOutlineArrowsAltArrowDVisible(true);
  }, []);

  const closeOutlineArrowsAltArrowD = useCallback(() => {
    setOutlineArrowsAltArrowDVisible(false);
  }, []);
  return (
    <Layout title={'Add clothes'}>
      <View style={styles.addClothesInfo}>         
        </View>
        <Text style={styles.addInfoText}>Add Info</Text>
        
        <Pressable style={styles.groupPressable} onPress={openGroupContainer}>
          <View style={styles.rectangleView3} />
          <Text style={styles.text}>등록하기</Text>
        </Pressable>

        <View style={styles.pictureview}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-711.png")}
        />
        <Image
          style={styles.outlineVideoAudioSound}
          resizeMode="cover"
          source={require("../assets/addpic.png")}
        />
        </View>

        <View style={styles.groupView1}>
          <Text style={styles.text1}>제품명</Text>
          <View style={styles.groupView}>
            <View style={styles.rectangleView4} />
            <TextInput
             style={styles.inputtext1}
            placeholder="제품명을 입력하세요"
            onChangeText={newText=>setText(newText)}/>
          </View>
        </View>

        <View style={styles.groupView3}>
          <Text style={styles.text3}>품번(선택)</Text>
          <View style={styles.groupView2}>
            <View style={styles.rectangleView5} />
            <TextInput
             style={styles.inputtext2}
            placeholder="제품번호를 입력하세요"
            onChangeText={newText=>setText(newText)}/>
          </View>
        </View>

        <View style={styles.groupView5}>
          <Text style={styles.text5}>브랜드명</Text>
          <View style={styles.groupView4}>
            <View style={styles.rectangleView6} />
            <TextInput
             style={styles.inputtext3}
            placeholder="브랜드를 입력하세요"
            onChangeText={newText=>setText(newText)}/>
          </View>
          </View>
      
        <View style={styles.groupView7}>
          <Text style={styles.text7}>분류</Text>
          <View style={styles.groupView6}>
            <View style={styles.rectangleView7} />
            <Text style={styles.text8}>선택</Text>
          </View>
        </View>
        <Pressable
          style={styles.outlineArrowsAltArrowD}
          onPress={openOutlineArrowsAltArrowD}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/down-arrow.png")}
          />
        </Pressable>
      

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <Addclothfin onClose={closeGroupContainer} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={outlineArrowsAltArrowDVisible}
      >
        <View style={styles.outlineArrowsAltArrowDOverlay}>
          <Pressable
            style={styles.outlineArrowsAltArrowDBg}
            onPress={closeOutlineArrowsAltArrowD}
          />
          <DropdownList onClose={closeOutlineArrowsAltArrowD} />
        </View>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  ml74: {
    marginLeft: 74,
  },
  groupContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  outlineArrowsAltArrowDOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  outlineArrowsAltArrowDBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowRadius: 96,
    elevation: 96,
    shadowOpacity: 1,
    width: 40,
    height: 40,
  },
  notificationIcon: {
    position: "absolute",
    height: "48.49%",
    width: "48.48%",
    top: "27.27%",
    right: "24.24%",
    bottom: "24.24%",
    left: "27.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  notificationView: {
    position: "absolute",
    top: 0,
    left: 288,
    width: 40,
    height: 40,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowRadius: 96,
    elevation: 96,
    shadowOpacity: 1,
    width: 40,
    height: 40,
  },
  arrowLeft: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  pressable: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  wed15SeptemperText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 19,
 
    fontweight: "bold",
    color: "#a50034",
    textAlign: "center",
  },
  view: {
    position: "absolute",
    top: 9,
    left: 110,
    width: 109,
    height: 23,
  },
  menuView: {
    position: "absolute",
    top: 53,
    left: 31,
    width: 328,
    height: 40,
  },
  navigationBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 390,
    height: 73,
  },
  rectangleView2: {
    position: "absolute",
    top: 17,
    left: 227,
    borderRadius: 10,
    backgroundColor: "rgba(165, 0, 52, 0.2)",
    width: 34,
    height: 34,
  },
  brokenEssentionalUIHom: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  icon: {
    borderRadius: 5,
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  calendarPressable: {
    position: "relative",
    width: 24,
    height: 24,
  },
  boldEssentionalUIHange: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  icon1: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  userPressable: {
    position: "relative",
    width: 24,
    height: 24,
  },
  frameView: {
    position: "absolute",
    top: 21,
    left: 26,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  addInfoText: {
    position: "absolute",
    top: 40,
    left: 31,
    fontSize: 22,
    letterSpacing: -1.1,
    fontWeight: "600",
 
    color: "#252525",
    textAlign: "left",
    width: 174,
    height: 24,
  },
  rectangleView3: {
    position: "absolute",
    top: 20,
    left: 0,
    borderRadius: 50,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: "rgba(165,0,52,1)",
    width: 145,
    height: 36,
  },
  groupPressable: {
    position: "absolute",
    top: 555,
    left: 120,
    width: 118,
    height: 35,
  }, 
  text: {
    position: "absolute",
    top: 30,
    left: 15,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 118,
    height: 22,
  },

  ellipseIcon: {
    position: "absolute",
    top: 206,
    left: 157,
    width: 75,
    height: 75,
  },
  outlineVideoAudioSound: {
    position: "absolute",
    top: 224,
    left: 175,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  text1: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 13,
 
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 95,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 45.2,
  },
  inputtext1: {
    position: "absolute",
    top: 16,
    left: 10,
    fontSize: 14,
    letterSpacing: -1.4,
 
    color: "#b5b5b5",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 195,
    height: 14,
  },
  groupView: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 328,
    height: 45.2,
  },
  groupView1: {
    position: "absolute",
    top: 250,
    left: 31,
    width: 328,
    height: 64.2,
  },
  text3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
 
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 62,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 45.2,
  },
  inputtext2: {
    position: "absolute",
    top: 16,
    left: 10,
    fontSize: 14,
    letterSpacing: -1.4,
 
    color: "#b5b5b5",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 213,
    height: 14,
  },
  groupView2: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 328,
    height: 45.2,
  },
  groupView3: {
    position: "absolute",
    top:330,
    left: 31,
    width: 328,
    height: 64.2,
  },
  text5: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
 
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 86,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 328,
    height: 45.2,
  },
 inputtext3 : {
    position: "absolute",
    top: 16,
    left: 9.81,
    fontSize: 14,
    letterSpacing: -1.4,
 
    color: "#b5b5b5",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 137.36,
    height: 14,
  },
  groupView4: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 328,
    height: 45.2,
  },
  groupView5: {
    position: "absolute",
    top: 410,
    left: 31,
    width: 328,
    height: 64.2,
  },
  text7: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 13,
 
    color: "#6a6a6a",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 86,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b5b5b5",
    borderWidth: 1,
    width: 194,
    height: 45,
  },
  text8: {
    position: "absolute",
    top: 16,
    left: 9.81,
    fontSize: 14,
    letterSpacing: -1.4,
 
    color: "#b5b5b5",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 137.36,
    height: 14,
  },
  groupView6: {
    position: "absolute",
    top: 19,
    left: 0,
    width: 194,
    height: 45,
  },
  groupView7:{
    position: "absolute",
    top: 490,
    left: 30,
    width: 194,
    height: 45,
  },
  pictureview: {
    position: "absolute",
    top: -90,
    left: 0,
    
  },
  icon2: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  outlineArrowsAltArrowD: {
    position: "absolute",
    left: 195,
    top: 524,
    width: 16.48,
    height: 18,
  },
  addClothesInfo: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default AddClothesInfo;