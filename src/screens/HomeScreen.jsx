import { useContext } from "react";
import { Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { MyStoreContext } from "../Context/MyStoreContext";

export const HomeScreen = ({ navigation }) => {
  const { gender, setGender, age, setAge, categoryType, setCategoryType } =
    useContext(MyStoreContext);
  return (
    <>
      <View className="mx-2">
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
              <Text className="text-lg text-gray-700 font-bold">
                Hello Yogesh Sharma
              </Text>
            </View>
            <View>
              <Text className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur sit.
              </Text>
            </View>
          </View>
        </View>

        {/* Second Block ---: */}

        <View className="mt-5 h-40 rounded-xl bg-red-100">
          <View className="mt-6 mx-2 flex-row">
            <View className="w-[60%]">
              <View>
                <Text className="text-blue-900 font-black text-[15px]">
                  Samevdan Awareness Tool
                </Text>
              </View>
              <View>
                <Text className="pt-2 text-gray-600 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  totam fugit labore of the name list.
                </Text>
              </View>
              <View className="my-3">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Result", {
                      message: "hello world",
                    })
                  }
                  className="h-7 w-20 rounded-md bg-indigo-700 justify-center items-center"
                >
                  <Text className="text-white text-xs font-semibold">
                    Take a Test
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image
                className="h-48 w-36 -translate-y-14"
                source={require("../../assets/images/doctor-girl.png")}
              />
            </View>
          </View>
        </View>

        {/* Third Block -----: */}
        <View className="mt-6">
          <View>
            <Text className="text-gray-700 text-base font-semibold">
              Our Services
            </Text>
          </View>
          <View>
            <Text className="text-gray-400 font-normal text-xs">
              Lorem ipsum dolor sit amet consectetur sit.
            </Text>
          </View>
        </View>

        {/* Fourth Block -----: */}

        <View className="my-3 flex-row gap-x-3">
          <TouchableOpacity
            onPress={() => navigation.navigate("Clinical Treatment")}
            className="h-24 w-[30%] rounded-md border border-gray-200"
          >
            <View className="h-[70%]">
              <Image
                className="h-full w-full"
                source={require("../../assets/images/OurServices/clinical-treatment.png")}
              />
            </View>
            <View>
              <Text className="my-1 text-center font-semibold text-[11px]">
                Clinical Treatment
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Psychological Counselling")}
            className="h-24 w-[30%] rounded-md border border-gray-200"
          >
            <View className="h-[70%]">
              <Image
                className="h-full w-full"
                source={require("../../assets/images/OurServices/physchological-counselling.png")}
              />
            </View>
            <View>
              <Text className="text-center font-semibold text-[10px]">
                Psychological Counselling
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Mindfulness")}
            className="h-24 w-[30%] rounded-md border border-gray-200"
          >
            <View className="h-[70%]">
              <Image
                className="h-full w-full"
                source={require("../../assets/images/OurServices/mindfulness.png")}
              />
            </View>
            <View>
              <Text className="my-1 text-center font-semibold text-[11px]">
                Mindfulness
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
