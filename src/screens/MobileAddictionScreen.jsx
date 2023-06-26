import React from "react";
import { Linking, Pressable } from "react-native";
import { Text, View, Image, ScrollView } from "react-native";

export const MobileAddictionScreen = ({ navigation }) => {
  return (
    <ScrollView className="mx-2">
      {/* First Block -----: */}
      <View className="m-2 flex-row">
        <View>
          <Image
            className="h-12 w-10 object-contain"
            source={require("../../assets/images/positive-mind-logo.png")}
          />
        </View>
        <View className="mx-2">
          <View>
            <Text className="text-lg text-gray-700 font-bold">Mindfulness</Text>
          </View>
          <View>
            <Text className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur sit.
            </Text>
          </View>
        </View>
      </View>

      {/* Second Block --: */}
      <View className="h-56">
        <Image
          className="h-56 w-full"
          source={require("../../assets/images/OurServices/mindfulness.png")}
        />
      </View>
      <View className="mt-4">
        <Text className="text-center text-gray-700 leading-5 mx-4">
          Lorem ipsum dolor sit amet consectetur. Sed integer purus pellentesque
          mauris sed placerat egestas. Velit massa ac massa eu massa.
          Ullamcorper consequat donec eu quis facilisis nulla vulputate euismod
          cursus. Est luctus sed eros vulputate. Iaculis in euismod nulla vitae
          dui nulla auctor.
        </Text>
      </View>

      {/* <View className="mt-8 flex-row gap-x-8">
        <View className="h-28 w-[40%] rounded-md">
          <View className="">
            <Image
              className="h-28 w-full"
              source={require("../../assets/images/mindfulness/yoga.png")}
            />
          </View>
        </View>
        <View className="h-28 w-[40%] rounded-md">
          <View>
            <Image
              className="h-full w-full"
              source={require("../../assets/images/mindfulness/meditation.png")}
            />
          </View>
        </View>
      </View>
      <View className="gap-x-8">
        <View className="mt-4 h-28 w-[40%] rounded-md">
          <View>
            <Image
              className="h-full w-full"
              source={require("../../assets/images/mindfulness/mobileAddiction.png")}
            />
          </View>
        </View>
      </View> */}

      {/* Yoga Description  */}

      <View className="my-8">
        <View>
          <Text className="font-extrabold text-2xl text-gray-700 text-center">
            Mobile D-Addiction
          </Text>
          <Text className="my-2 text-gray-400 text-center">
            Lorem ipsum dolor sit amet consectetur sit. Lorem ipsum dolor sit
            amet consectetur sit.Lorem ipsum dolor sit amet consectetur sit.
            consectetur sit.Lorem ipsum dolor sit amet consectetur sit.
          </Text>
        </View>
        <View className="items-center my-6">
        <Pressable
                onPress={() =>
                  Linking.openURL(
                    "https://www.positivemindcare.com/appointments/"
                  )
                }
                className="bg-amber-500 w-80 h-11 rounded-full justify-center items-center"
              >
                <Text className="text-white text-lg font-bold">
                  Book Appointment
                </Text>
              </Pressable>
              </View>
      </View>
    </ScrollView>
  );
};
