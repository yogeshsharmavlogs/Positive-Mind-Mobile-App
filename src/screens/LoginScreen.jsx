import React from "react";
import { Text, Image, View } from "react-native";

const LoginScreen = () => {
  return (
    <View className="h-5 w-4 object-contain">
      <Image
        className="h-screen object-contain"
        source={require("../../assets/images/loginImage/login-page-image.png")}
      />
      <Text>This is a first page</Text>
    </View>
  );
};

export default LoginScreen;
