import AppLoading from "expo-app-loading";
import React, { Component } from "react";
import * as Font from "expo-font";
import { storeData } from "../service/storage";
import Home from "./Home";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      appReady: false,
      user: null,
      token: null,
    };
  }

  async componentDidMount() {
    await storeData("USER", {
      _id: 1,
      address: "",
      profilePic: "",
      username: "Faizan",
    });
    // let userData = await getData("USER");
    // let tokenData = await getData("TOKEN");

    this.setState({ fontLoaded: true, user: userData, token: tokenData });
  }
  cacheFonts(fonts) {
    return [Font.loadAsync(fonts)];
  }
  async loadInitialAssets() {
    const fontPromise = this.cacheFonts({
      "Quicksand-Light": require("../../assets/fonts/Quicksand-Light.ttf"),
      "Quicksand-Medium": require("../../assets/fonts/Quicksand-Medium.ttf"),
      "Quicksand-Regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
      "Quicksand-SemiBold": require("../../assets/fonts/Quicksand-SemiBold.ttf"),
      "Quicksand-Bold": require("../../assets/fonts/Quicksand-Bold.ttf"),
    });
    return Promise.all([...fontPromise]).catch((err) => {
      console.log(`${DEBUG_KEY} Error in loading assets`, err);
    });
  }
  render() {
    if (!this.state.appReady) {
      return (
        <AppLoading
          startAsync={async () => {
            await this.loadInitialAssets();
          }}
          onFinish={() => this.setState({ appReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    } else {
      return <Home {...this.props} />;
    }
  }
}

export default SplashScreen;
