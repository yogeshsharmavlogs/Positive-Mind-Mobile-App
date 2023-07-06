import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Text, View, Image, ScrollView } from "react-native";

export const MindfulnessScreen = ({ navigation }) => {
  return (
    <ScrollView className="px-2 bg-white">
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
            <Text className="text-base text-gray-700 font-bold">
              {" "}
              Positive Mind Care & Research Centre
            </Text>
          </View>
          <View>
            <Text className="mx-1 text-gray-400">
              Be Positive with Positive Mind Care
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
          Mindfulness is a practice that involves paying deliberate attention to
          the present moment with an attitude of openness, curiosity, and
          non-judgment. It is the quality of being fully engaged and aware of
          one's thoughts, feelings, bodily sensations, and the surrounding
          environment.
        </Text>
      </View>

      <View className="mt-8 flex-row gap-x-8">
        <TouchableOpacity
          onPress={() => navigation.navigate("Yoga")}
          className="h-28 w-[40%] rounded-md"
        >
          <View className="">
            <Image
              className="h-28 w-full"
              source={require("../../assets/images/mindfulness/yoga.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Meditation")}
          className="h-28 w-[40%] rounded-md"
        >
          <View>
            <Image
              className="h-full w-full"
              source={require("../../assets/images/mindfulness/meditation.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View className="gap-x-8">
        <TouchableOpacity
          onPress={() => navigation.navigate("Mobile D-Addiction")}
          className="mt-4 h-28 w-[40%] rounded-md"
        >
          <View>
            <Image
              className="h-full w-full"
              source={require("../../assets/images/mindfulness/mobileAddiction.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
