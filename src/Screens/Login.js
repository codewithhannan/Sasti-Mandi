import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Images from "../Constants/Images";
import { BLACK, WHITE, GREY, GRADIENT_2 } from "../Constants/Colors";
import { Formik } from "formik";
import * as yup from "yup";
import { LinearGradient } from "expo-linear-gradient";
import { GRADIENT_1, GRADIENT_3 } from "../Constants/Colors";
import { useState } from "react";
import { postRequestForm } from "../service/request";
import { useEffect } from "react";
import { getData } from "../service/storage";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
const Login = ({ navigation }) => {
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [Error, setError] = useState("");
  const passwordShower = () => {
    setShowPassowrd(!showPassowrd);
    console.log("showPassowrd", showPassowrd);
  };
  const loginValidationSchema = yup.object().shape({
    phone: yup
      .string()
  });
  // const loginHandler = async (values) => {
  //   try {
  //     const res = await postRequestForm(`/api/auth/login`, "", values);
  //     if (res.result.status === 200) {
  //       const response = res.result.data;
  //       if (response?.user) {
  //         const user = response?.user;
  //         navigation.navigate("OTP", { _id: user._id, pathToGo: "Dashboard" });
  //       } else {
  //         setError("You are not allowed to login.");
  //         navigation.navigate("Login");
  //       }
  //     }
  //   } catch (err) {
  //     setError("Please enter correct email or password");
  //     console.log(`Error of login`, err.message);
  //   }
  // };
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.AuthBG} style={styles.loginBGImage}>
        <ScrollView style={styles.loginPage}>
          <View style={styles.logoContainer}>
            <Image
              source={Images.LOGO}
              style={[styles.logo, {
                width: Width, height: 150, resizeMode: 'contain'
              }]}
            />
          </View>
          <View>
            <Formik
              validationSchema={loginValidationSchema}
              validateOnChange={false}
              validateOnBlur={false}
              initialValues={{ number: "" }}
              // onSubmit={loginHandler}
              onSubmit={() => {
                navigation.navigate('OTP', { _id: null, pathToGo: "Home" })
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <>
                  <View style={styles.formContainer}>
                    <Text style={styles.loginHeading}>Log In Now</Text>
                    <Text style={styles.loginText}>
                      Please login to continue using our app
                    </Text>
                    <View style={styles.loginInputsContainers}>
                      <View
                        style={[
                          styles.emailField,
                          errors.email && styles.errorField,
                        ]}
                      >
                        <TextInput
                          style={styles.emailInput}
                          placeholder="Phone Number"
                          onChangeText={handleChange("number")}
                          onBlur={handleBlur("number")}
                          value={values.number}
                          underlineColorAndroid="transparent"
                        />
                        {errors.email ? (
                          <>
                            <Image
                              source={Images.EmailError}
                              style={[
                                styles.emailSuccessImage,
                                { width: 22, height: 22 },
                              ]}
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              source={Images.EmailCheck}
                              style={[
                                styles.emailSuccessImage,
                                { width: 22, height: 22 },
                              ]}
                            />
                          </>
                        )}
                      </View>
                      {errors.number && (
                        <Text style={styles.errorText}>{errors.number}</Text>
                      )}

                      {Error != "" && (
                        <Text style={styles.errorText}>{Error}</Text>
                      )}
                    </View>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.submitButton}
                    >
                      <LinearGradient
                        colors={[GRADIENT_1, GRADIENT_2, GRADIENT_3]}
                        start={[1, 1]}
                        end={[0, 0]}
                        location={[0.25, 0.7, 1]}
                        style={styles.submitButtonGradient}
                      >
                        <Text
                          style={[styles.loginText, styles.submitButtonText]}
                        >
                          Submit
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>

                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
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
  loginBGImage: {
    flex: 1,
    resizeMode: "contain",
    alignSelf: "stretch",
  },
  loginInputsContainers: {
    paddingVertical: 25,
  },
  formContainer: {
    paddingHorizontal: 25,
  },
  loginPage: {
    flex: 1,
    padding: 10,
    height: "100%",
    flexDirection: "column",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "20%",
  },
  loginHeading: {
    fontFamily: "Quicksand-Bold",
    fontSize: 25,
    lineHeight: 37.5,
    textAlign: "center",
    color: BLACK,
  },
  loginText: {
    fontFamily: "Quicksand-Regular",
    fontSize: 13,
    lineHeight: 19.5,
    textAlign: "center",
    color: GREY,
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
    resizeMode: "contain",
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
    resizeMode: "contain",
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
});

export default Login;
