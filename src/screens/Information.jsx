import { Linking } from "react-native";
import { Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";

export const Information = ({ navigation }) => {
  const handleSubmit = async (values) => {
    const user = await createUser(values.email, values.contactNumber);
  };
  const [text, setText] = useState("");
  return (
    <>
      <View className="m-2">
        <View className="h-20 items-center">
          <Image
            className="h-full w-20"
            source={require("../../assets/images/positive-mind-logo.png")}
          />
        </View>
        <View className="my-4">
          {/* <Text className="text-gray-700 font-semibold text-lg">Name</Text> */}
          <TextInput
            className="border rounded-md border-gray-300"
            label="Please enter your name"
            activeUnderlineColor="orange"
            underlineColor="purple"
            textColor="orange"
          />
        </View>
        <View className="my-4">
          {/* <Text className="text-gray-700 font-semibold text-lg">Email</Text> */}
          <TextInput
            className="border rounded-md border-gray-300"
            label="Please enter your email"
            activeUnderlineColor="orange"
            underlineColor="purple"
            textColor="orange"
          />
        </View>
        <View className="my-4">
          {/* <Text className="text-gray-700 font-semibold text-lg">Mobile</Text> */}
          <TextInput
            className="border rounded-md border-gray-300"
            label="Please enter your mobile number"
            activeUnderlineColor="orange"
            underlineColor="purple"
            textColor="orange"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />
        </View>
        {/* <View className="mt-6">
          <Text className=" text-center text-slate-600 font-bold text-xl">
            Please Pay 499 to View Result
          </Text>
        </View> */}
        <View className="my-8 items-center">
          {/* <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://formbuilder.ccavenue.com/live/au-small-finance-bank/positive-mind-care"
              )
            }
            className="bg-amber-500 w-32 h-11 rounded-full justify-center items-center"
          >
            <Text className="text-white text-lg font-bold">Pay</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => navigation.navigate("Result")}
            className="my-10 bg-amber-500 w-52 h-11 rounded-full justify-center items-center"
          >
            <Text className="text-white text-lg font-bold">
              See your result
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
