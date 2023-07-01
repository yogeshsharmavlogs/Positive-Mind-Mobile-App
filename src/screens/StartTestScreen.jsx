import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Pressable } from "react-native";
import { Text, View, Image, ScrollView } from "react-native";
import { MyStoreContext } from "../Context/MyStoreContext";
import { TouchableOpacity } from "react-native";

export const StartTestScreen = ({ navigation }) => {
  const {
    gender,
    setGender,
    age,
    setAge,
    categoryType,
    setCategoryType,
    completedCategory,
    setCompletedCategory,
  } = useContext(MyStoreContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const check = Object.values(completedCategory).length;
  const test = Object.values(completedCategory).filter((item) =>
    Boolean(item)
  ).length;

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
            className={
              completedCategory.personal === true
                ? "w-[41%] rounded-lg border border-slate-400 bg-emerald-100 opacity-50"
                : "w-[41%] rounded-lg border border-slate-300 bg-white py-2"
            }
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
            className={
              completedCategory.profession === true
                ? "w-[41%] rounded-lg border border-slate-400 bg-emerald-100 opacity-50"
                : "w-[41%] rounded-lg border border-slate-300 bg-white py-2"
            }
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
            className={
              completedCategory.surrounding === true
                ? "w-[41%] rounded-lg border border-slate-400 bg-emerald-100 opacity-50"
                : "w-[41%] rounded-lg border border-slate-300 bg-white py-2"
            }
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
            className={
              completedCategory.health === true
                ? "w-[41%] rounded-lg border border-slate-400 bg-emerald-100 opacity-50"
                : "w-[41%] rounded-lg border border-slate-300 bg-white py-2"
            }
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
            className={
              completedCategory.ethics === true
                ? "w-[41%] rounded-lg border border-slate-400 bg-emerald-100 opacity-50"
                : "w-[41%] rounded-lg border border-slate-300 bg-white py-2"
            }
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
      <View>
        {test === 1 ? (
          <Text className="mt-3 text-center font-medium text-slate-600">
            "Congratulations on completing the first section of the tests!
            You're off to a great start”
          </Text>
        ) : undefined}

        {test === 2 ? (
          <Text className="mt-3 text-center font-medium text-slate-600">
            "Fantastic job! You've successfully conquered the second section of
            the tests”
          </Text>
        ) : undefined}

        {test === 3 ? (
          <Text className="mt-3 text-center font-medium text-slate-600">
            "Great work! You've triumphed over the challenges of the third
            section”
          </Text>
        ) : null}

        {test === 4 ? (
          <Text className="mt-3 text-center font-medium text-slate-600">
            "Outstanding achievement! The completion of the fourth section marks
            another milestone in your journey of success”
          </Text>
        ) : null}

        {test === 5 ? (
          <Text className="mt-3 text-center font-medium text-slate-600">
            "Congratulations, you've done it! Completion of the final section
            marks the triumphant conclusion of your tests”
          </Text>
        ) : undefined}
      </View>

      <View className="items-center mt-4">
        <View className="w-24 h-10 bg-teal-100 rounded-full justify-center">
          <Text className="text-center text-lg font-extrabold text-teal-700">
            {test} / {check}
          </Text>
        </View>
      </View>

      {completedCategory.personal === true &&
      completedCategory.profession === true &&
      completedCategory.surrounding === true &&
      completedCategory.ethics === true &&
      completedCategory.health === true ? (
        <View className="my-6 items-center">
          <TouchableOpacity
            onPress={() => {
              setCategoryType(selectedCategory);
              navigation.navigate("Information");
            }}
            className="bg-amber-500 w-72 h-11 rounded-full justify-center items-center"
          >
            <Text className="text-white text-lg font-bold">
              Proceed to view result
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="my-6 items-center">
          <TouchableOpacity
            onPress={() => {
              setCategoryType(selectedCategory);
              navigation.navigate("QuestionsAndResultScreen");
            }}
            className="bg-amber-500 w-48 h-11 rounded-full justify-center items-center"
          >
            <Text className="text-white text-lg font-bold">Start Test</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};
