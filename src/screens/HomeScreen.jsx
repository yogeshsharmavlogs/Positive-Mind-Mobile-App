import { useContext } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MyStoreContext } from "../Context/MyStoreContext";

export const HomeScreen = ({ navigation }) => {
  const { gender, setGender, age, setAge, categoryType, setCategoryType } =
    useContext(MyStoreContext);
  return (
    <>
      <ScrollView className="px-2 mt-8 bg-white h-full">
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
              <Text className="text-base text-gray-700 font-bold text-center">
                Positive Mind Care & Research Centre
              </Text>
            </View>
            <View>
              <Text className="text-gray-400">
                Be Positive with Positive Mind Care
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
                  Samvedan Awareness Tool
                </Text>
              </View>
              <View>
                <Text className="pt-2 text-gray-600 text-xs">
                  Samvedan serves as a reminder to slow down, observe, and
                  capture a particular experience.
                </Text>
              </View>
              <View className="my-3">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Details", {
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
        <View className="mt-6 mb-2">
          <View>
            <Text className="text-center text-gray-700 text-2xl font-semibold">
              Our Services
            </Text>
          </View>
          {/* <View>
            <Text className="text-gray-400 font-normal text-xs">
              Lorem ipsum dolor sit amet consectetur sit.
            </Text>
          </View> */}
        </View>

        {/* Fourth Block -----: */}

        {/* <View className="my-3 flex-row gap-x-3">
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
        </View> */}

        <View className="mt-3 items-center gap-y-5">
          <TouchableOpacity
            onPress={() => navigation.navigate("Clinical Treatment")}
            className="h-36 w-[100%] rounded-lg border border-gray-300"
          >
            <View className="h-[70%]">
              <Image
                className="h-full w-full"
                source={require("../../assets/images/OurServices/clinical-treatment.png")}
              />
            </View>
            <View className="text-center">
              <Text className="my-2 w-full font-medium text-center text-gray-700 text-[16px]">
                Clinical Treatment
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Psychological Counselling")}
            className="h-36 w-[100%] rounded-md border border-gray-300"
          >
            <View className="h-[70%]">
              <Image
                className="h-full w-full"
                source={require("../../assets/images/OurServices/physchological-counselling.png")}
              />
            </View>
            <View className="text-center">
              <Text className="my-2 font-medium text-center text-gray-700 text-[16px]">
                Psychological Counselling
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Mindfulness")}
            className="h-36 w-[100%] rounded-md border border-gray-300"
          >
            <View className="h-[70%]">
              <Image
                className="h-full w-full"
                source={require("../../assets/images/OurServices/mindfulness.png")}
              />
            </View>
            <View className="text-center">
              <Text className="my-2 font-medium text-center text-gray-700 text-[16px]">
                Mindfulness
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
