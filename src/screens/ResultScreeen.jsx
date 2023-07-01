import React from "react";
import { Linking, ScrollView, TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import { Text, Image, View } from "react-native";
import { useCountContext } from "../Context/UseCountContext";
// import { QuestionsScreen } from "./QuestionsScreen";

export const ResultScreen = () => {
  const { count } = useCountContext();
  console.log(count);
  return (
    <>
      <ScrollView className="m-2">
        <View>
          <View className="items-center my-2">
            <Image
              className="h-20 w-20 object-contain"
              source={require("../../assets/images/positive-mind-logo.png")}
            />
          </View>
          <View className="my-2 bg-rose-50 rounded-lg border border-slate-400">
            {count >= 32 ? (
              <>
                <View className="m-2">
                  <Text className="my-2 text-gray-600 font-bold text-xl">
                    Personal - Good
                  </Text>
                  <Text className="my-4 text-slate-600 leading-6 font-medium">
                    You may possess the ability to maintain a healthy sense of
                    control over your emotions, which could indicate a high
                    level of emotional intelligence and maturity. Your
                    interactions with friends and family may reflect warmth and
                    understanding, fostering deep and meaningful connections. By
                    prioritising nurturing these relationships it shows in the
                    strong bonds you have formed. Moreover, you may express your
                    emotions in a constructive manner. You may have a check of
                    your own feelings to fuel personal growth and make
                    productive choices. Your balanced approach to emotions is
                    valuable.
                  </Text>
                </View>
                <View className="items-center my-10">
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        "https://calendly.com/positivemindcare/doctors-appointment"
                      )
                    }
                    className="bg-amber-500 w-80 h-11 rounded-full justify-center items-center"
                  >
                    <Text className="text-white text-lg font-bold">
                      Book Appointment
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : null}

            {count >= 24 && count <= 31 ? (
              <>
                <View className="my-6">
                  <View className="m-2">
                    <Text className="my-2 text-gray-600 font-bold text-xl">
                      Personal - Mild
                    </Text>
                    <Text className="my-4 text-slate-600 leading-6 font-medium">
                      You seem to possess a mild level of control over your
                      emotions, which is a promising foundation. There may be
                      moments when you effectively manage your feelings, but
                      with conscious efforts, that could be done consistently.
                      Similarly, your interpersonal connections with friends and
                      family are present, but could be further strengthened. You
                      have the potential to use your emotions in a productive
                      manner. Incorporating mindfulness and meditation into your
                      routine can provide valuable tools for self-reflection and
                      growth. These practices can help you develop a greater
                      sense of self-awareness and enhance your ability to
                      navigate emotions constructively to further improve and
                      cultivate more fulfilling relationships and emotional
                      well-being.
                    </Text>
                  </View>
                  <View className="items-center my-10">
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          "https://calendly.com/positivemindcare/doctors-appointment"
                        )
                      }
                      className="bg-amber-500 w-80 h-11 rounded-full justify-center items-center"
                    >
                      <Text className="text-white text-lg font-bold">
                        Book Appointment
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : null}

            {count >= 16 && count <= 23 ? (
              <>
                <View className="m-2">
                  <Text className="my-2 text-gray-600 font-bold text-xl">
                    Personal - Moderate
                  </Text>
                  <Text className="my-4 text-slate-600 leading-6 font-medium">
                    You demonstrate a moderate level of control over your
                    emotions, indicating potential for growth and improvement.
                    While you may sometimes struggle to manage your feelings
                    effectively, it's important to recognise that with mindful
                    practices, that can be altered. Your interpersonal relations
                    with friends and family may suggest that there is room to
                    develop deeper connections and strengthen those bonds. It is
                    important to utilise your emotions in a productive manner.
                    Incorporating mindfulness and meditation practices into your
                    daily routine can offer valuable techniques for
                    self-reflection and emotional regulation. Additionally,
                    seeking professional help in the form of psychological
                    counselling can provide further guidance and assistance on
                    your journey towards personal growth.
                  </Text>
                </View>
                <View className="items-center my-10">
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        "https://calendly.com/positivemindcare/doctors-appointment"
                      )
                    }
                    className="bg-amber-500 w-80 h-11 rounded-full justify-center items-center"
                  >
                    <Text className="text-white text-lg font-bold">
                      Book Appointment
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : null}

            {count <= 15 ? (
              <>
                <View className="m-2">
                  <Text className="my-2 text-gray-600 font-bold text-xl">
                    Personal - Unsatisfactory
                  </Text>
                  <Text className="my-4 text-slate-600 leading-6 font-medium">
                    You may currently face challenges in maintaining control
                    over your emotions, which can be discouraging. Your
                    interpersonal relations with friends and family may be
                    unsatisfactory, indicating that there is room for
                    improvement in fostering stronger connections. Furthermore,
                    you may tend to use your emotions in a futile manner, which
                    can hinder personal growth. However, in incorporating
                    mindfulness and meditation practices into your daily
                    routine, you can develop self-awareness and learn effective
                    strategies for emotional regulation. Seeking psychological
                    and psychiatric help in the form of counselling, therapy, or
                    other treatments can also provide valuable guidance and
                    support on your journey towards personal development.
                  </Text>
                </View>
                <View className="items-center my-10">
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        "https://calendly.com/positivemindcare/doctors-appointment"
                      )
                    }
                    className="bg-amber-500 w-80 h-11 rounded-full justify-center items-center"
                  >
                    <Text className="text-white text-lg font-bold">
                      Book Appointment
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </>
  );
};
