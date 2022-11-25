import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal,TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Alarmcenterbanner from "../components/Alarmcenterbanner";


const Mycloset = () => {
  const [notificationContainerVisible, setNotificationContainerVisible] =
    useState(false);
  const navigation = useNavigation();
  const [search, setsearch] = useState();

  const openNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(true);
  }, []);

  const closeNotificationContainer = useCallback(() => {
    setNotificationContainerVisible(false);
  }, []);
  return (
    <>
      <Layout title={'My Closet'}>
      <View style={styles.myclosetView}>      
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("AddClothesInfo")}
        />
        <Text style={styles.addtext}>새 옷 추가하기</Text>

        <View style={styles.searchView}>
          <View style={styles.searchfieldView} />
          <TextInput style={styles.text1}
          placeholder="Search"
          onChangeText={newText => setsearch(newText)}
          />
        </View>

      
        <Text style={styles.categoriesText}>Categories</Text>
        <View style={styles.categoriesView}>
          <View style={styles.allview}>
             <Text style={styles.allText}>All</Text>
             <Image
               style={styles.ellipseIcon}
               resizeMode="cover"
               source={require("../assets/ellipse-21.png")}
              />
              <Text style={styles.aText}>A</Text>
          </View>
         
          <View style={styles.groupView}>
            <Text style={styles.topsText}>Tops</Text>
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-31.png")}
            />
            <Image
              style={styles.shirtIcon}
              resizeMode="cover"
              source={require("../assets/shirt.png")}
            />
          </View>

          <View style={styles.groupView1}>
            <Text style={styles.bottomsText}>Bottoms</Text>
            <Image
              style={styles.ellipseIcon2}
              resizeMode="cover"
              source={require("../assets/ellipse-31.png")}
            />
            <Image
              style={styles.pantsIcon}
              resizeMode="cover"
              source={require("../assets/pants.png")}
            />
          </View>

          <View style={styles.groupView2}>
            <Text style={styles.dressesText}>Dresses</Text>
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/ellipse-31.png")}
            />
            <Image
              style={styles.outlineEssentionalUIBo}
              resizeMode="cover"
              source={require("../assets/dress.png")}
            />
          </View>
        
        <Text style={styles.topsText1}>Tops</Text>
        </View>

        {/*옷 카드*/}
        <View style={styles.itemCardView}>
          <View style={styles.cardView} />
          <Text style={styles.text2}>핑크 후드티</Text>
          <Text style={styles.mixxoText}>Mixxo</Text>
          <Image
            style={styles.hoodie1Icon}
            resizeMode="cover"
            source={require("../assets/pink-hoodie.png")}
          />
          <View style={styles.cardBorderView} />
        </View>

        <View style={styles.itemCard2View}>
          <View style={styles.cardView1} />
          <Text style={styles.text3}>갈색 무스탕</Text>
          <Text style={styles.romistoryText}>Romistory</Text>
          <Image
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/brown-mustang.png")}
          />
          <View style={styles.cardBorderView1} />
        </View>

        <View style={styles.itemCard3View}>
          <View style={styles.cardView2} />
          <Text style={styles.text4}>하와이안 셔츠</Text>
          <Text style={styles.uniqloText}>Uniqlo</Text>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/hawai-shirts.png")}
          />
          <View style={styles.cardBorderView2} />
        </View>

        <Pressable
          style={styles.itemCard4Pressable}
          onPress={() => navigation.navigate("personalstylingCalendar")}
        >
          <View style={styles.cardView3} />
          <Text style={styles.text5}>블랙 레더 자켓</Text>
          <Text style={styles.lapText}>Lap</Text>
          <Image
            style={styles.jacket1Icon}
            resizeMode="cover"
            source={require("../assets/black-leather.png")}
          />
          <View style={styles.cardBorderView3} />
        </Pressable>
      </View>
      </Layout>

      <Modal
        animationType="fade"
        transparent
        visible={notificationContainerVisible}
      >
        <View style={styles.notificationContainerOverlay}>
          <Pressable
            style={styles.notificationContainerBg}
            onPress={closeNotificationContainer}
          />
          <Alarmcenterbanner onClose={closeNotificationContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  ml74: {
    marginLeft: 74,
  },
  notificationContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  notificationContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
 
  icon1: {
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
  icon2: {
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
    top: 18.12,
    left: 26,
    height: 20.71,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },

  rectanglePressable: {
    position: "absolute",
    top: 90,
    left: 103,
    borderRadius: 50,
    backgroundColor: "rgba(165,0,52,1)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 184,
    height: 40,
  },
  addtext: {
    position: "absolute",
    top: 100,
    left: 136,
    fontSize: 16,
    letterSpacing: -0.8,
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 128.53,
    height: 16.19,
  },
  searchfieldView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 27,
    backgroundColor: "#ebebeb",
  },
  text1: {
    position: "absolute",
    height: "50%",
    width: "77.54%",
    top: "24.32%",
    left: "7%",
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
    color: "#717171",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  iconsearch: {
    position: "absolute",
    height: "51.35%",
    width: "6.1%",
    top: "24.32%",
    right: "88.11%",
    bottom: "24.32%",
    left: "5.79%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchView: {
    position: "absolute",
    top: 35,
    left: 31,
    width: 328,
    height: 37,
  },
  categoriesText: {
    position: "absolute",
    top: 160,
    left: 31,
    fontSize: 22,
    fontWeight: "600",
    color: "#252525",
    textAlign: "left",
    width: 115,
    height: 24,
  },
  allText: {
    position: "absolute",
    top: 57,
    left: 17,
    fontSize: 13, 
    color: "#252525",
    textAlign: "center",
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  topsText: {
    position: "absolute",
    top: 57,
    left: 11,
    fontSize: 13, 
    color: "#252525",
    textAlign: "center",
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  shirtIcon: {
    position: "absolute",
    top: 13,
    left: 13,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  allview: {
    position: "absolute",
    top: -90,
    left: 0,
    width: 50,
    height: 70,
  },
  groupView: {
    position: "absolute",
    top: -90,
    left: 65,
    width: 50,
    height: 70,
  },
  bottomsText: {
    position: "absolute",
    top: 57,
    left: 1,
    fontSize: 13, 
    color: "#252525",
    textAlign: "center",
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  pantsIcon: {
    position: "absolute",
    top: 13,
    left: 13,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  groupView1: {
    position: "absolute",
    top: -90,
    left: 130,
    width: 52,
    height: 70,
  },
  dressesText: {
    position: "absolute",
    top: 57,
    left: 3,
    fontSize: 13, 
    color: "#252525",
    textAlign: "center",
  },
  ellipseIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  outlineEssentionalUIBo: {
    position: "absolute",
    top: 14,
    left: 13,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupView2: {
    position: "absolute",
    top: -90,
    left: 195,
    width: 50,
    height: 70,
  },
  aText: {
    position: "absolute",
    top: 12,
    left: 18,
    fontSize: 22,
     
    color: "#fff",
    textAlign: "center",
  },
  categoriesView: {
    position: "absolute",
    top: 299,
    left: 31,
    width: 331,
    height: 62,
  },
  topsText1: {
    position: "absolute",
    top: 394,
    left: 31,
    fontSize: 22,
    letterSpacing: -1.1,
    fontWeight: "600",
      
    color: "#252525",
    textAlign: "left",
    width: 70,
    height: 24,
  },
  cardView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  text2: {
    position: "absolute",
    height: "13%",
    top: "73%",  
    left: "10%",
    width: "81.92%",
    fontSize: 16,
    fontWeight: "700",
    color: "#3d3d3d",
    textAlign: "center",
  },
  mixxoText: {
    position: "absolute",
    height: "15%",
    width: "29.22%",
    top: "85.33%",
    left: "34%",
    fontSize: 12,
    color: "rgba(69, 69, 69, 0.5)",
    textAlign: "center",
  },
  hoodie1Icon: {
    position: "absolute",
    height: "50%",
    width: "52.08%",
    top: "17.93%",
    right: "25.27%",
    bottom: "32.88%",
    left: "22.64%",
    borderRadius: 30,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cardBorderView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "rgba(69, 69, 69, 0.5)",
    borderWidth: 1,
  },
  itemCardView: {
    position: "absolute",
    height: "23%",
    width: "39.49%",
    top: "48%",
    right: "52.82%",
    bottom: "29.74%",
    left: "7.69%",
    borderRadius: 15,
  },
  cardView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  text3: {
    position: "absolute",
    height: "13%",
    width: "81.92%",
    top: "73%",
    left: "27%",
    fontSize: 16,
    fontWeight: "700",
    color: "#3d3d3d",
    textAlign: "ceter",
  },
  romistoryText: {
    position: "absolute",
    height: "17%",
    width: "51.3%",
    top: "85.33%",
    left: "25%",
    fontSize: 12,
    color: "rgba(69, 69, 69, 0.5)",
    textAlign: "center",
  },
  image1Icon: {
    position: "absolute",
    top: 23,
    left: 32,
    borderRadius: 15,
    width: 85,
    height: 80,
  },
  cardBorderView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "rgba(69, 69, 69, 0.5)",
    borderWidth: 1,
  },
  itemCard2View: {
    position: "absolute",
    height: "23%",
    width: "39.49%",
    top: "48%",
    right: "7.95%",
    bottom: "29.74%",
    left: "52.56%",
    borderRadius: 15,
  },
  cardView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  text4: {
    position: "absolute",
    height: "13%",
    width: "81.92%",
    top: "73.37%",
    left: "10%",
    fontSize: 16,
    fontWeight: "700",
    color: "#3d3d3d",
    textAlign: "center",
  },
  uniqloText: {
    position: "absolute",
    height: "18%",
    width: "29.22%",
    top: "85.33%",
    left: "34%",
    fontSize: 12,
    color: "rgba(69, 69, 69, 0.5)",
    textAlign: "center",
  },
  rectangleIcon: {
    position: "absolute",
    top: 13,
    left: 14,
    borderRadius: 59,
    width: 128,
    height: 90,
  },
  cardBorderView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "rgba(69, 69, 69, 0.5)",
    borderWidth: 1,
  },
  itemCard3View: {
    position: "absolute",
    height: "23%",
    width: "39.49%",
    top: "74%",
    right: "52.82%",
    bottom: "8.65%",
    left: "7.69%",
    borderRadius: 15,
  },
  cardView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  text5: {
    position: "absolute",
    height: "13%",
    width: "81.92%",
    top: "73.37%",
    left: "9%",
    fontSize: 17,
    fontWeight: "700",
    color: "#3d3d3d",
    textAlign: "center",
  },

  lapText: {
    position: "absolute",
    height: "15%",
    width: "29.22%",
    top: "85.33%",
    left: "34%",
    fontSize: 12,
    color: "rgba(69, 69, 69, 0.5)",
    textAlign: "center",
  },
  jacket1Icon: {
    position: "absolute",
    top: 18,
    left: 26,
    borderRadius: 15,
    width: 98,
    height: 85,
  },
  cardBorderView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "rgba(69, 69, 69, 0.5)",
    borderWidth: 1,
  },
  itemCard4Pressable: {
    position: "absolute",
    height: "23%",
    width: "39.49%",
    top: "74%",
    right: "7.95%",
    bottom: "8.65%",
    left: "52.56%",
    borderRadius: 15,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 93,
  },
  rectangleView2: {
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
    height: "49.41%",
    width: "48.48%",
    top: "30.32%",
    right: "24.24%",
    bottom: "20.27%",
    left: "27.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  notificationPressable: {
    position: "absolute",
    top: 53,
    left: 319,
    width: 40,
    height: 40,
  },
  rectangleView3: {
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
    top: 53,
    left: 31,
    width: 40,
    height: 40,
  },
  wed15SeptemperText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
               
    color: "#a50034",
    textAlign: "center",
  },
  view1: {
    position: "absolute",
    top: 62,
    left: 134,
    width: 123,
    height: 23,
  },
  menuView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 93,
  },
  myclosetView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Mycloset;