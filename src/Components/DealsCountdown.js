import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import moment from "moment";
import { BLACK } from "../Constants/Colors";

const DealsCountdown = ({ countdownDate }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = moment(countdownDate);
    const intervalId = setInterval(() => {
      const now = moment();
      const duration = moment.duration(endDate.diff(now));
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const renderCountdown = () => {
    const { days, hours, minutes, seconds } = countdown;
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{borderColor:BLACK,borderWidth:1, alignItems: "center", marginRight: 10,backgroundColor: "#fff",padding:10,width:55,height:65,borderRadius:10 }}>
          <Text style={{ fontSize: 16,marginBottom:10,fontFamily:'Quicksand-SemiBold' }}>{days}</Text>
          <Text style={{ fontSize: 12 }}>Days</Text>
        </View>
        <View style={{borderColor:BLACK,borderWidth:1, alignItems: "center", marginRight: 10,backgroundColor: "#fff",padding:10,width:55,height:65,borderRadius:10 }}>
          <Text style={{ fontSize: 16,marginBottom:10,fontFamily:'Quicksand-SemiBold' }}>{hours}</Text>
          <Text style={{ fontSize: 12 }}>Hours</Text>
        </View>
        <View style={{borderColor:BLACK,borderWidth:1, alignItems: "center", marginRight: 10,backgroundColor: "#fff",padding:10,width:55,height:65,borderRadius:10 }}>
          <Text style={{ fontSize: 16,marginBottom:10,fontFamily:'Quicksand-SemiBold' }}>{minutes}</Text>
          <Text style={{ fontSize: 12 }}>Mins</Text>
        </View>
        <View style={{borderColor:BLACK,borderWidth:1, alignItems: "center", marginRight: 0,backgroundColor: "#fff",padding:10,width:55,height:65,borderRadius:10 }}>
          <Text style={{ fontSize: 16,marginBottom:10,fontFamily:'Quicksand-SemiBold' }}>{seconds}</Text>
          <Text style={{ fontSize: 12 }}>Sec</Text>
        </View>
      </View>
    );
  };

  return <View>{renderCountdown()}</View>;
};

export default DealsCountdown;
