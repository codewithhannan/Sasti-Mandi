import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import SidebarContent from "./SidebarContent";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const Sidebar = ({ show, onTouchOverlay }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [containerAnimation, setContainerAnimation] = useState(
    new Animated.Value(-300)
  );

  useEffect(() => {
    if (show) {
      Animated.parallel([
        Animated.timing(animation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(containerAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(animation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(containerAnimation, {
          toValue: -300,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [show]);

  const handleOnTouchOverlay = () => {
    Animated.parallel([
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(containerAnimation, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => onTouchOverlay());
  };

  const translateX = containerAnimation;

  return (
    <>
      {show ? (
        <>
          <View style={[styles.sidebar, show ? styles.overlay : null]}>
            <TouchableOpacity
              onPress={handleOnTouchOverlay}
              style={[styles.sidebarOverlayButton]}
            />
            <Animated.View
              style={[styles.container, { transform: [{ translateX }] }]}
            >
              <ScrollView>
                <SidebarContent />
              </ScrollView>
            </Animated.View>
          </View>
        </>
      ) : (
        ""
      )}
    </>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    height: Height,
    width: Width,
    zIndex: 4,
    backgroundColor: "rgba(55, 55, 55, 0.84)",
  },
  sidebarOverlayButton: {
    height: Height,
    width: Width,
  },
  container: {
    flex: 1,
    width: 300,
    position: "absolute",
    zIndex: 5,
    height: Height,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
export default Sidebar;
