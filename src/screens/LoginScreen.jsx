import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, Image, View } from "react-native";
import { TextInput } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  return (
    <>
      <View className="h-[380px] w-full">
        <View>
          <Image
            className="h-full w-full"
            source={require("../../assets/images/loginImage/loginPage.png")}
          />
        </View>
      </View>
      <View className="rounded-3xl -translate-y-6 bg-white h-full">
        <View className="items-center py-2">
          <Image
            className="h-16 w-14 object-contain"
            source={require("../../assets/images/positive-mind-logo.png")}
          />
        </View>
        <View className="my-6 mx-5">
          <Text className="text-bold font-black text-xl text-gray-700">
            Login
          </Text>
        </View>

        <View className="items-center">
          <TextInput
            className="bg-white w-[90%] border rounded-lg border-gray-300"
            placeholder="Enter Mobile Number"
            activeUnderlineColor="orange"
          />
        </View>
        <View className="items-center my-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="bg-amber-500 w-40 h-14 rounded-full justify-center items-center"
          >
            <Text className="text-white text-lg font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
