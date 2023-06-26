import React from "react";
import { Linking, ScrollView } from "react-native";
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
          <View className="items-center">
            <View>
              <Image
                className="h-20 w-20 object-contain"
                source={require("../../assets/images/positive-mind-logo.png")}
              />
            </View>

            {count >= 32 ? (
              <>
               <View className="result-logo-meter flex h-4 rounded-md relative md:top-6">
                      <View
                        className="absolute top-0 w-3 h-6 bg-blue-900 -translate-y-1"
                        style={{
                          left: `${((count - 20) / 60) * 100}%`,
                        }}
                      />
                      <View
                        style={{
                          background: "green",
                          width: `${(24 / 60) * 100}%`,
                        }}
                        className="green h-full rounded-l-md w-full"
                      />
                      <View
                        style={{
                          background: "yellow",
                          width: `${(15 / 60) * 100}%`,
                        }}
                        className="yellow h-full"
                      />
                      <View
                        style={{
                          background: "orange",
                          width: `${(10 / 60) * 100}%`,
                        }}
                        className="orange h-full"
                      />
                      <View
                        style={{
                          background: "red",
                          width: `${(11 / 60) * 100}%`,
                        }}
                        className="red h-full rounded-r-md"
                      />
                    </View>
                <View className="my-6">
                  <Text className="text-gray-800 font-bold text-2xl">
                    Good (keep it up)
                  </Text>
                </View>
              </>
            ) : null}

            {count >= 24 && count <= 31 ? (
              <>
                <View className="my-6">
                  
                  <Text className="text-gray-800 font-bold text-2xl">
                    Mild (Mindfulness)
                  </Text>
                </View>
              </>
            ) : null}

            {count >= 16 && count <= 23 ? (
              <>
                <View className="my-6">
                  <Text className="text-gray-800 font-bold text-2xl">
                    Moderate (psychology/ counseling)
                  </Text>
                </View>
              </>
            ) : null}

            {count <= 15 ? (
              <>
                <View className="my-6">
                  <Text className="text-gray-800 font-bold text-2xl">
                    Severe (psychiatry)
                  </Text>
                </View>
              </>
            ) : null}
          </View>

          <View className="rounded-lg border border-slate-400 items-center">
            <View className="h-52 w-80">
              <Image
                className="h-full w-full"
                source={require("../../assets/images/severe.png")}
              />
            </View>
            <View className="m-4">
              <Text className="text-center text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                accusamus expedita animi dignissimos magni explicabo dolore
                laudantium tenetur natus eos. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Eum at dolorem natus dicta
                necessitatibus optio, nostrum, error deleniti sit in vero quia
                ipsam. Eos ab voluptatum commodi vel similique eligendi
                architecto quia facilis sapiente! Saepe, molestias aperiam
                itaque fugit et sit ea quibusdam dolores maxime.
              </Text>
            </View>
            <View className="my-10 items-center">
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
        </View>
      </ScrollView>
    </>
  );
};
