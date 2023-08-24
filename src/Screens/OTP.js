import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { BLACK, WHITE, GREY, GRADIENT_2,GRADIENT_1, GRADIENT_3 } from "../Constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import AuthHeader from "../Components/AuthHeader";
import { useRoute } from "@react-navigation/native";
import OtpInput from "./../Components/OtpInput";
import Images from "../Constants/Images";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
const OTP = ({ navigation }) => {
  const routes = useRoute();
  let { _id, pathToGo } = "";
  // console.log(routes)
  if (routes.params) {
    _id = routes.params._id;
    pathToGo = routes.params.pathToGo;
  } 
  // else {
  //   navigation.goBack();
  // }
  const [otp, setOTP] = useState("");
  const [Error, setError] = useState('');

  const handleCodeChange = (newCode) => {
    setOTP(newCode);
  };
  // const otpHandler = async () => {
  //   console.log('clicked')
  //   try {
  //     const res = await postRequestForm(
  //       `/api/auth/verifyOTP`,
  //       "",
  //       {
  //         _id,
  //         otp,
  //       }
  //     );
  //     // console.log('res',res)
  //     if (res?.result?.status === 200) {
  //       const response = res.result.data;
  //       const user = response?.user;
  //       const token = response?.token;
  //       console.log('response',response)
  //       if (
  //         response?.user
  //       ) {
  //         if (pathToGo === "Dashboard") {
  //           storeData("TOKEN", token);
  //           storeData("ROLE", user.role);
  //           storeData("USER", JSON.stringify(user, null, 2));
  //           navigation.navigate(pathToGo,{ _id: user._id })
  //         }else{
  //           navigation.navigate(pathToGo,{ _id: user._id })
  //         }
  //       } else {
  //         setError("You are not allowed to login.");
  //         navigation.navigate("Login")
  //       }
  //     }  else if (res?.error?.response?.status === 400) {
  //       // setError("OTP has been expired!");
  //       // navigation.navigate("Login")
  //     }
  //   } catch (err) {
  //     setError("Please enter correct email or password");
  //     console.log(`Error of login`, err.message);
  //   }
  // };
  // console.log('_id',_id)
  // console.log('pathToGo',pathToGo)

  return (
    <View style={styles.container}>
      <AuthHeader
        isShowBackButton={true}
        screenName="Verify"
        navigation={navigation}
      />
      <ImageBackground source={Images.AuthBG} style={styles.otpBGImage}>
        <View style={styles.otpPage}>
          <View style={styles.logoContainer}>
            <Image
              source={Images.LOGO}
              style={[styles.logo, { width: 200, height: 170,resizeMode: 'contain' }]}
            />
          </View>
          <View>
                <>
                  <View style={styles.formContainer}>
                    <Text style={styles.otpHeading}>Enter OTP Number</Text>
                    <Text style={styles.otpText}>
                      Please Enter The 6 Digit Code Sent to{"\n"}
                      your email address
                    </Text>
                    <View style={styles.otpInputsContainers}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <OtpInput
                          numberOfInputs={6}
                          onCodeChange={handleCodeChange}
                        />
                        
                      {Error != "" && (
                        <Text style={styles.errorText}>{Error}</Text>
                      )}
                      </View>
                    </View>

                    <Text style={styles.otpText}>Didn’t get code?</Text>
                    <TouchableOpacity
                      onPress={()=>{
                        navigation.navigate(pathToGo,{ _id: null })
                      }}
                      // onPress={otpHandler}
                      style={styles.submitButton}
                    >
                      <LinearGradient
                        colors={[GRADIENT_1, GRADIENT_2, GRADIENT_3]}
                        start={[1, 1]}
                        end={[0, 0]}
                        location={[0.25, 0.7, 1]}
                        style={styles.submitButtonGradient}
                      >
                        <Text style={[styles.otpText, styles.submitButtonText]}>
                          Confirm
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </>
              {/* )}
            </Formik> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: Width,
  },
  otpBGImage: {
    flex: 1,
    resizeMode: "contain",
    alignSelf: "stretch",
  },
  otpInputsContainers: {
    paddingVertical: 25,
    paddingBottom: 10,
  },
  formContainer: {
    paddingHorizontal: 25,
  },
  otpPage: {
    flex: 1,
    padding: 10,
    height: "100%",
    flexDirection: "column",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "5%",
  },
  otpHeading: {
    fontFamily: "Quicksand-Bold",
    fontSize: 25,
    lineHeight: 37.5,
    textAlign: "center",
    color: BLACK,
    marginBottom: 10,
  },
  otpText: {
    fontFamily: "Quicksand-Regular",
    fontSize: 13,
    lineHeight: 19.5,
    textAlign: "center",
    color: GREY,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10,
  },
  emailField: {
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "rgba(236, 240, 243, 0.46)",
    borderWidth: 1,
    borderColor: "#E1E1E1",
    marginBottom: 10,
  },
  emailInput: {
    height: 55,
    fontFamily: "Quicksand-Regular",
    // fontWeight:"bold"
  },
  emailSuccessImage: {
    position: "absolute",
    // float:'right',
    right: 10,
    top: "30%",
  },
  passwordField: {
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "rgba(236, 240, 243, 0.46)",
    borderWidth: 1,
    borderColor: "#E1E1E1",
    marginBottom: 10,
    zIndex: 1,
  },
  passwordInput: {
    height: 55,
    fontFamily: "Quicksand-Regular",
    // fontWeight:"bold"
  },
  passwordSuccessImage: {
    position: "absolute",
    right: 10,
    top: "35%",
    zIndex: 10,
  },
  errorText: {
    color: "#FF0000",
    marginBottom: 10,
  },
  errorField: {
    borderWidth: 1,
    borderColor: "#FF0000",
  },
  forgetPasswordButton: {
    textAlign: "left",
    fontFamily: "Quicksand-Regular",
  },
  forgetPasswordCover: {
    marginBottom: 10,
  },
  signupButtonCover: {
    flexDirection: "row",
    justifyContent: "center",
  },
  submitButton: {
    marginBottom: 20,
  },
  submitButtonGradient: {
    borderRadius: 5,
  },
  submitButtonText: {
    fontFamily: "Quicksand-Regular",
    fontSize: 16,
    lineHeight: 19.5,
    textAlign: "center",
    color: WHITE,
    paddingVertical: 18,
    marginBottom: 0,
  },
  signUpText: {
    fontFamily: "Quicksand-Regular",
  },
  signUpButtonCover: {
    paddingLeft: 5,
  },
  signUpButtonButton: {
    color: GRADIENT_3,
    fontFamily: "Quicksand-Regular",
  },
  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: "black",
  },
});
export default OTP;

// 9ksAIWHcN5Px#bfmZus1v!%O
// simoyo8875@aosod.com
