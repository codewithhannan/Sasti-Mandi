import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getData, storeData } from "../service/storage";
import { BLACK } from "../Constants/Colors";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const LocationPicker = ({ show, onClose = () => {} }) => {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const storeSelectedValue = async (value) => {
    try {
      await storeData("USER LOCATION", value);
      let user = await getData("USER");
      user.address = value;
      await storeData("USER", user);

      console.log("Value stored successfully");
      setVisible(!visible);
      onClose(value);
    } catch (e) {
      console.log("Error storing value: ", e);
    }
  };

  const handleValueChange = (value) => {
    setSelectedValue(value);
    storeSelectedValue(value);
  };

  useEffect(() => {
    setVisible(show);
  }, [show]);

  const handleOverlayPress = () => {
    setVisible(false);
    onClose();
  };

  return (
    <>
      {visible && (
        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.overlayTouch}
            onPress={handleOverlayPress}
          />
          <View style={styles.container}>
            <Text style={styles.label}>Select Location:</Text>
            <Picker
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
            >
              <Picker.Item label="Item 1" value="item1" />
              <Picker.Item label="Item 2" value="item2" />
              <Picker.Item label="Item 3" value="item3" />
              <Picker.Item label="Item 4" value="item4" />
              <Picker.Item label="Item 5" value="item5" />
              <Picker.Item label="Item 6" value="item6" />
              <Picker.Item label="Item 7" value="item7" />
              <Picker.Item label="Item 8" value="item8" />
              <Picker.Item label="Item 9" value="item9" />
            </Picker>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: Width,
    zIndex: 4,
    backgroundColor: "rgba(55, 55, 55, 0.84)",
  },
  overlayTouch: {
    height: Height,
    width: Width,
  },
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    padding: 10,
  },
  label: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 18,
    textAlign: "center",
    color: BLACK,
  },
});

export default LocationPicker;
