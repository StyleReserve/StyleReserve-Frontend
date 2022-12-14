import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal, AsyncStorage, ScrollView, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import PlusReservation from "../components/PlusReservation";
import AddReservation from "../components/AddReservation";

// 오늘 날짜의 데이터 불러오기
/**
var d = new Date();
var year = d.getFullYear();
var month = (d.getMonth() + 1);
var date = d.getDate();

*/

const fetchApi = async (setReserveData, openContainer1, setTargetCount, setTargetSr, date) => {
  console.log(date.getFullYear(), date.getMonth(), date.getDate());
    let result = await axios.post('http://15.165.172.198/sr/getDateReserves', {
        access_token: await AsyncStorage.getItem('access_token'),
        year: 2022,
        month: date.getMonth() + 1,
        date: date.getDate(),
    });
    let dates=[];
    console.log(result.data);
    let key =  1;
    for(const i of result.data.data){
        console.log('key')
        let members = [];
        for(const k of i.members){
            members.push(<Text key={key++}>{k.nickname}</Text>);
        }

        let courses = ["미세먼지 제거", "눈/비 건조", "정장/코트", "스팀살균", "표준"];

        const start_time = new Date(i.start_time);
        // 예약한 시간 별로 섹션 묶어서 보여줌
        dates.push(
        <View key={key++} style={styles.box}>
            <View style = {styles.time_group}>
                <Text style = {styles.text_st}>{start_time.getHours()}:{start_time.getMinutes()}</Text>
                <Text style = {styles.text_et}>+{i.course.duration}분</Text>
            </View>
            <View style = {[styles.info_group, i.total_count >= 5 && styles.inactive]}>
              <Image
                style={styles.cloth_image}
                resizeMode="cover"
                source={require("../assets/clothes-hanger-white.png")} />
              <View style={styles.text_position}>
                <Text style={styles.info_text}>예약 코스: {courses[i.course.course_id - 1]}</Text>
                <Text style={styles.info_text}>최초 예약자: {i.owner.nickname}</Text>
                <Text style={styles.info_text}>예약 현황: {i.total_count} / 5</Text>
                <Text style={styles.info_text}>예약 명단: {members}</Text>
              </View>                  
              <Pressable
                style={[styles.addButton, i.total_count >= 5 && styles.invisible]}
                onPress={() => {
                  setTargetCount(i.total_count);
                  setTargetSr(i.sreserve_id);
                  openContainer1();
                }}
              >
                <Image style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/add.png")} />
              </Pressable>
            </View>                     
        </View>
            );
    }
    setReserveData(dates);
   
    
  }
const TodayReservation = ({datetime}) => {
  const [container1Visible, setContainer1Visible] = useState(false);
  const [addContainerVisible, setAddContainerVisible] = useState(false);
  const [targetCount, setTargetCount] = useState(1);
  const [targetSr, setTargetSr] = useState(1);
  const navigation = useNavigation();

  const openContainer1 = useCallback(() => {
    setContainer1Visible(true);
  }, []);

  const closeContainer1 = useCallback(() => {
    setContainer1Visible(false);
  }, []);

  const openAddContainer = useCallback(() => {
    setAddContainerVisible(true);
  }, []);

  const closeAddContainer = useCallback(() => {
    setAddContainerVisible(false);
  }, []);


  const [reserveData, setReserveData] = useState([]);
  useEffect(()=>{
    const func = async ()=>{
        await fetchApi(setReserveData, openContainer1, setTargetCount, setTargetSr, datetime);
    }
    func();
  },[]);


  
  return (
    <>

      <ScrollView style={styles.scheduleView}>
        <Pressable style={styles.pressable} onPress={openAddContainer}>
          <View style={styles.rectangleView6} />
          <Text style={styles.text17}>새로운 예약하기</Text>
        </Pressable>
        {reserveData}
      </ScrollView>


      <Modal animationType="fade" transparent visible={addContainerVisible}>
        <View style={styles.container1Overlay}>
          <Pressable style={styles.container1Bg} onPress={closeAddContainer} />
          <AddReservation onClose={closeAddContainer} datetime={datetime}/>
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={container1Visible}>
        <View style={styles.container1Overlay}>
          <Pressable style={styles.container1Bg} onPress={closeContainer1} />
          <PlusReservation onClose={closeContainer1} targetCount={targetCount} targetSr={targetSr} />
        </View>
      </Modal>

    </>
        
  );
};

const styles = StyleSheet.create({
  ml74: {
    marginLeft: 74,
  },
  container1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  container1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ellipsisV1IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ellipsisV1IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ellipsisV1Icon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  cloth_image: {
    bottom: 5,
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  ellipsisV1Icon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ellipsisV1Icon2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ellipsisV1Icon2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f3f3f3",
    borderWidth: 1,
    width: 144,
    height: 117,
  },
  text_position: {
  },
  text: {
    position: "absolute",
    top: 12,
    left: 18,
    fontSize: 12,
    color: "#adadad",
    textAlign: "left",
    width: 33.92,
  },
  text1: {
    position: "absolute",
    top: 33,
    left: 18,
    fontSize: 12,
    color: "#adadad",
    textAlign: "left",
    width: 33.92,
  },
  text2: {
    position: "absolute",
    top: 54,
    left: 18,
    fontSize: 12,
    color: "#a50034",
    textAlign: "left",
    width: 33.92,
  },
  text3: {
    position: "absolute",
    top: 75,
    left: 18,
    fontSize: 12,
    fontWeight: "800",
    color: "#a50034",
    textAlign: "left",
    width: 33.92,
  },
  text4: {
    position: "absolute",
    top: 96,
    left: 18,
    fontSize: 12,
    color: "#adadad",
    textAlign: "left",
    width: 33.92,
  },
  rectangleView1: {
    position: "absolute",
    top: 9,
    left: 62,
    borderRadius: 3,
    backgroundColor: "#a50034",
    borderStyle: "solid",
    borderColor: "#cacaca",
    borderWidth: 1,
    width: 20.56,
    height: 15,
  },
  rectangleView2: {
    position: "absolute",
    top: 32,
    left: 62,
    borderRadius: 3,
    backgroundColor: "#fcfcfc",
    borderStyle: "solid",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    width: 20.56,
    height: 15,
  },
  aMText: {
    position: "absolute",
    top: 13,
    left: 65,
    fontSize: 8,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    width: 14.39,
  },
  pMText: {
    position: "absolute",
    top: 36,
    left: 66,
    fontSize: 8,
    fontWeight: "800",
    color: "#c0c0c0",
    textAlign: "center",
    width: 13.36,
  },
  startWithSelectionPage: {
    position: "absolute",
    top: 512,
    left: 44,
    width: 144,
    height: 117,
    display: "none",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f3f3f3",
    borderWidth: 1,
    width: 305,
    height: 142,
  },
  text5: {
    position: "absolute",
    top: 13,
    left: 19,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  text6: {
    position: "absolute",
    top: 34,
    left: 19,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  text7: {
    position: "absolute",
    top: 55,
    left: 19,
    fontSize: 11,
    fontWeight: "800",
    color: "#a50034",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  text8: {
    position: "absolute",
    top: 76,
    left: 19,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  text9: {
    position: "absolute",
    top: 97,
    left: 19,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  text10: {
    position: "absolute",
    top: 118,
    left: 19,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139.79,
  },
  courseSelectionPage: {
    position: "absolute",
    top: 571,
    left: 44,
    width: 305,
    height: 142,
    display: "none",
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f3f3f3",
    borderWidth: 1,
    width: 84,
    height: 118,
  },
  text11: {
    position: "absolute",
    top: 9,
    left: 18,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  text12: {
    position: "absolute",
    top: 27,
    left: 18,
    fontSize: 11,
    fontWeight: "800",
    color: "#a50034",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  text13: {
    position: "absolute",
    top: 45,
    left: 18,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  text14: {
    position: "absolute",
    top: 63,
    left: 18,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  text15: {
    position: "absolute",
    top: 81,
    left: 18,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  text16: {
    position: "absolute",
    top: 99,
    left: 18,
    fontSize: 11,
    color: "#adadad",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 8,
  },
  numberOfClothesSelectionPa: {
    position: "absolute",
    top: 630,
    left: 42,
    width: 84,
    height: 118,
    display: "none",
  },
  rectangleView5: {
    position: "absolute",
    top: 45.5,
    left: 141.5,
    borderRadius: 10,
    backgroundColor: "rgba(165, 0, 52, 0.2)",
    width: 34,
    height: 34,
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
    overflow: "hidden",
  },
  brokenEssentionalUIHom: {
    position: "relative",
    width: 24,
    height: 24,
  },
  boldTimeCalendar: {
    position: "relative",
    borderRadius: 5,
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
  clothPressable: {
    position: "relative",
    width: 24,
    height: 24,
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
  view: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: 100,
  },
  rectangleView6: {
    borderRadius: 50,
    backgroundColor: "#a50034",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 233,
    height: 42,
  },
  text17: {
    position: "absolute",  
    fontSize: 16,
    letterSpacing: -0.8,
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 128.53,
    height: 17,
  },
  pressable: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
  sText: {
    position: "absolute",
    top: 0,
    left: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  text18: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    top: 7,
    left: 0,
    width: 15,
    height: 43,
  },
  text19: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  mText: {
    position: "absolute",
    top: 0,
    left: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  groupView1: {
    position: "absolute",
    top: 7,
    left: 48,
    width: 19,
    height: 43,
  },
  text20: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  tText: {
    position: "absolute",
    top: 0,
    left: 5,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  groupView2: {
    position: "absolute",
    top: 7,
    left: 100,
    width: 19,
    height: 43,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#e85483",
    width: 40,
    height: 57,
  },
  text21: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  wText: {
    position: "absolute",
    top: 0,
    left: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#fff",
    textAlign: "left",
  },
  groupView3: {
    position: "absolute",
    top: 7,
    left: 10,
    width: 20,
    height: 43,
  },
  groupView4: {
    position: "absolute",
    top: 0,
    left: 142,
    width: 40,
    height: 57,
  },
  text22: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  tText1: {
    position: "absolute",
    top: 0,
    left: 7,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  groupView5: {
    position: "absolute",
    top: 7,
    left: 202,
    width: 20,
    height: 43,
  },
  text23: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  fText: {
    position: "absolute",
    top: 0,
    left: 7,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  groupView6: {
    position: "absolute",
    top: 7,
    left: 253,
    width: 20,
    height: 43,
  },
  text24: {
    position: "absolute",
    top: 19,
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    color: "#212525",
    textAlign: "center",
  },
  sText1: {
    position: "absolute",
    top: 0,
    left: 6,
    fontSize: 12,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "center",
  },
  groupView7: {
    position: "absolute",
    top: 7,
    left: 305,
    width: 18,
    height: 43,
  },
  groupView8: {
    position: "absolute",
    top: 0,
    left: 25,
    width: 323,
    height: 57,
  },
  calendarView: {
    paddingHorizontal: 30,
    width: '100%',
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 61,
    backgroundColor: "#faf9f9",
    width: 2,
    height: 467,
  },
  text_st: {
    top: 5,
    left: -15,
    fontSize: 20,
    width: 70,
    fontWeight: "700",
    color: "#212525",
    textAlign: "right",
  },
  text_et: {
    position: "absolute",
    top: 28,
    left: 14,
    fontSize: 16,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "right",
  },
  groupView9: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 36,
    height: 49,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#f6f6f5",
    width: 250,
    height: 137,
  },
  barIcon: {
    position: "absolute",
    width: 24,
    height: 24,
    top: 50.5,
    left: 145.5,
    overflow: "hidden",
  },
  ellipsisV1Pressable: {
    position: "absolute",
    left: 218,
    top: 16,
    width: 24,
    height: 24,
  },
  info_text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
  text28: {
    position: "absolute",
    top: 78,
    left: 51,
    fontSize: 12,
    color: "#212525",
    textAlign: "left",
  },
  text29: {
    position: "absolute",
    top: 78,
    left: 40,
    fontSize: 12,
    color: "#212525",
    textAlign: "left",
  },
  text30: {
    position: "absolute",
    top: 103,
    left: 42,
    fontSize: 12,
    color: "#212525",
    textAlign: "left",
    width: 132,
  },
  userIcon: {
    position: "absolute",
    top: 105,
    left: 16,
    width: 14.48,
    height: 14,
    overflow: "hidden",
  },
  brokenEssentionalUITS: {
    position: "absolute",
    height: "9.71%",
    width: "5.6%",
    top: "58.39%",
    right: "88%",
    bottom: "31.9%",
    left: "6.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  info_group: {
    padding: 20,
    flex: '1 1 0', 
    backgroundColor: "#a50034",
    borderRadius: 25,
  },
  time_group: {
    flex: '0 1 0',
  },
  text31: {
    position: "absolute",
    top: 5,
    left: -5,
    fontSize: 17,
    fontWeight: "700",
    width: 50,
    color: "#212525",
    textAlign: "right",
  },
  text32: {
    position: "absolute",
    top: 28,
    left: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#bcc1cd",
    textAlign: "right",
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#f6f6f5",
    width: 250,
    height: 137,
  },
  icon4: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  ellipsisV1Pressable1: {
    position: "absolute",
    left: 218,
    top: 16,
    width: 24,
    height: 24,
  },
  text33: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: 18,
    fontWeight: "600",
    color: "#212525",
    textAlign: "left",
  },
  text34: {
    position: "absolute",
    top: 80,
    left: 51,
    fontSize: 12,
 
    color: "#212525",
    textAlign: "left",
  },
  text35: {
    position: "absolute",
    top: 80,
    left: 40,
    fontSize: 12,
 
    color: "#212525",
    textAlign: "left",
  },
  text36: {
    position: "absolute",
    top: 103,
    left: 42,
    fontSize: 12,
 
    color: "#212525",
    textAlign: "left",
    width: 132,
  },
  userIcon1: {
    position: "absolute",
    top: 105,
    left: 16,
    width: 14.48,
    height: 14,
    overflow: "hidden",
  },
  brokenEssentionalUITS1: {
    position: "absolute",
    height: "9.71%",
    width: "5.6%",
    top: "58.39%",
    right: "88%",
    bottom: "31.9%",
    left: "6.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView12: {
    position: "absolute",
    top: 0,
    left: 74,
    width: 250,
    height: 137,
  },
  groupView13: {
    position: "absolute",
    top: 306,
    left: 5,
    width: 324,
    height: 137,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#a50034",
    width: 250,
    height: 137,
  },
  icon5: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  ellipsisV1Pressable2: {
    position: "absolute",
    left: 218,
    top: 16,
    width: 24,
    height: 24,
  },
  text37: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: 18,
    fontWeight: "600",
 
    color: "#fff",
    textAlign: "left",
  },
  text38: {
    position: "absolute",
    top: 78,
    left: 51,
    fontSize: 12,
 
    color: "#fff",
    textAlign: "left",
  },
  text39: {
    position: "absolute",
    top: 78,
    left: 40,
    fontSize: 12,
 
    color: "#fff",
    textAlign: "left",
  },
  text40: {
    position: "absolute",
    top: 103,
    left: 42,
    fontSize: 12,
 
    color: "#fff",
    textAlign: "left",
    width: 132,
  },
  userIcon2: {
    position: "absolute",
    top: 105,
    left: 16,
    width: 14.48,
    height: 14,
    overflow: "hidden",
  },
  brokenEssentionalUITS2: {
    position: "absolute",
    height: "9.71%",
    width: "5.6%",
    top: "58.39%",
    right: "88%",
    bottom: "31.9%",
    left: "6.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView14: {
    position: "absolute",
    top: 0,
    left: 79,
    width: 250,
    height: 137,
  },
  text41: {
    position: "absolute",
    top: 5,
    left: 0,
    fontSize: 17,
    width: 50,
    fontWeight: "700",
    color: "#212525",
    textAlign: "right",
  },
  text42: {
    position: "absolute",
    top: 28,
    left: 15,
    fontSize: 14,
    fontWeight: "500",
 
    color: "#bcc1cd",
    textAlign: "right",
  },
  groupView15: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 45,
    height: 49,
  },
  groupView16: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 329,
    height: 137,
  },
  groupView17: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 329,
    height: 467,
  },
  scheduleView: {
    paddingBottom: 10,
    paddingHorizontal: 30,
    width: '100%',
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 93,
  },
  rectangleView13: {
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
    width: "48.49%",
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
    top: 73,
    left: 325,
    width: 40,
    height: 40,
  },
  rectangleView14: {
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
  pressable1: {
    position: "absolute",
    top: 73,
    left: 41,
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
    top: 82,
    left: 134,
    width: 161,
    height: 23,
  },
  menuView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'red',
  },
  stylerReservationView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  todaysReservationText: {
    fontSize: 30,
    letterSpacing: -1,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 300,
    height: 47,
  },
  text0: {
    fontSize: 14,
    letterSpacing: -0.6,
 
    color: "#8d8d8d",
    textAlign: "left",
  },
  box: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20
  },
  wrapper: {
    width: '100%',
    height: '100%',
    marginBottom: 500,
  },
  layoutWrapper: {
    position: 'flex',
    width: '100%',
    height: '100%',
  },
  icon: {
    margin: 10,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  addButton: {
    position: 'absolute',
    right: 0,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactive: {
    backgroundColor: 'gray',
  },
  invisible: {
    display: 'none',
  },



});

export default TodayReservation;