import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Pressable } from "react-native";
import { Text, View, Image, ScrollView } from "react-native";
import { MyStoreContext } from "../Context/MyStoreContext";
import { TouchableOpacity } from "react-native";

export const StartTestScreen = ({ navigation }) => {
  const { gender, setGender, age, setAge, categoryType, setCategoryType } =
    useContext(MyStoreContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <ScrollView className="m-2">
      {/* First Box  */}
      <View className="flex-row">
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

      {/* Second Box  */}

      <View className="my-4 mx-20">
        <Text className="text-xl text-center font-semibold text-gray-700">
          You will be tested by these categories
        </Text>
      </View>

      {/* Third Box   */}

      <View>
        <View className="flex-row justify-center gap-x-4">
          <TouchableOpacity
            onPress={() => setSelectedCategory("personal")}
            className="w-[41%] rounded-lg border border-slate-300 bg-white py-2"
          >
            <View className="items-center">
              <Image
                className="h-16 w-16"
                source={require("../../assets/images/startTest/personal.png")}
              />
            </View>
            <View className="mx-6 mt-2">
              <Text className="text-center text-gray-600 font-black">
                Personal, social Family & Relationship
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedCategory("profession")}
            className="w-[41%] rounded-lg border border-slate-300 bg-white"
          >
            <View className="items-center py-2">
              <Image
                className="h-16 w-16"
                source={require("../../assets/images/startTest/proffesion.png")}
              />
            </View>
            <View className="mx-6">
              <Text className="text-center text-gray-600 font-black">
                Profession, Career, Purpose
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center gap-x-4 my-4">
          <TouchableOpacity
            onPress={() => setSelectedCategory("surrounding")}
            className="w-[41%] rounded-lg border border-slate-300 bg-white py-2"
          >
            <View className="items-center">
              <Image
                className="h-16 w-16"
                source={require("../../assets/images/startTest/surroundings.png")}
              />
            </View>
            <View className="mx-6 mt-2">
              <Text className="text-center text-gray-600 font-black">
                Surrounding, Security, Community
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedCategory("health")}
            className="w-[41%] rounded-lg border border-slate-300 bg-white"
          >
            <View className="items-center py-2">
              <Image
                className="h-16 w-16"
                source={require("../../assets/images/startTest/health.png")}
              />
            </View>
            <View className="mx-10">
              <Text className="text-center text-gray-600 font-black">
                Health related
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="items-center">
          <TouchableOpacity
            onPress={() => setSelectedCategory("ethics")}
            className="w-[41%] rounded-lg border border-slate-300 bg-white py-2"
          >
            <View className="items-center py-2">
              <Image
                className="h-16 w-16"
                source={require("../../assets/images/startTest/ethics.png")}
              />
            </View>
            <View className="mx-6 mt-2">
              <Text className="text-center text-gray-600 font-black">
                Ethics and Spirituality
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Button  */}

      <View className="my-10 items-center">
        <TouchableOpacity
          onPress={() => {
            setCategoryType(selectedCategory);
            navigation.navigate("QuestionsAndResultScreen");
          }}
          className="bg-amber-500 w-40 h-10 rounded-full justify-center items-center"
        >
          <Text className="text-white text-lg font-bold">Start Test</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
