import React, { useState, useEffect, useRef } from "react";
import { TextInput } from "react-native";

const OtpInput = ({ numberOfInputs, onCodeChange }) => {
  const [inputValues, setInputValues] = useState(
    Array(numberOfInputs).fill("")
  );
  const inputRefs = useRef([]);

    useEffect(() => {
      onCodeChange(inputValues.join(""));
    }, [inputValues]);

  const handleInputChange = (index, value) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = value;
    setInputValues(updatedInputValues);

    if (value.length === 1 && index < numberOfInputs - 1) {
      inputRefs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    // setFromClipboard(false);
  };

  return (
    <>
      {Array(numberOfInputs)
        .fill(0)
        .map((_, index) => (
          <TextInput
            key={index}
            keyboardType = 'numeric'
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={{
              borderRadius: 5,
              backgroundColor: "rgba(236, 240, 243, 0.46)",
              borderWidth: 1,
              borderColor: "#E1E1E1",
              width: 50,
              height: 47,
              textAlign: "center",
              fontFamily: "Quicksand-Medium",
            }}
            value={inputValues[index]}
            onChangeText={(text) => handleInputChange(index, text)}
            maxLength={1}
          />
        ))}
    </>
  );
};

export default OtpInput;
