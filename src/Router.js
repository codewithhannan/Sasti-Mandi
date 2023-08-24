import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Login from "./Screens/Login";
import OTP from "./Screens/OTP";
import SplashScreen from "./Screens/SplashScreen";
import Home from "./Screens/Home";
import { WHITE } from "./Constants/Colors";
import { StatusBar, View } from "react-native";
import Profile from "./Screens/Profile";
import Cart from "./Screens/Cart";
import Delivery from "./Screens/Delivery";
import OrderDetail from "./Screens/OrderDetail";

const Stack = createNativeStackNavigator();

const CustomStatusBar = ({ backgroundColor, barStyle = "dark-content" }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CustomStatusBar backgroundColor={WHITE} />
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
            animation:"none"
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Delivery" component={Delivery} />
          <Stack.Screen name="OrderDetail" component={OrderDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
