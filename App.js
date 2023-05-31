import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { ClinicalTreatment } from "./src/screens/ClinicalTreatment";
// import LoginScreen from "./src/screens/loginScreen";

const App = () => {
  return (
    <View className="mt-7 mx-2">
      {/* First Block -----: */}
      <View className="m-2 flex-row">
        <View>
          <Image
            className="h-12 w-10 object-contain"
            source={require("./assets/images/positive-mind-logo.png")}
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
              <Text className="text-blue-900 font-semibold text-base">
                PMC Awareness Tool
              </Text>
            </View>
            <View>
              <Text className="text-gray-600 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                totam fugit labore of the name list.{" "}
              </Text>
            </View>
          </View>
          <View>
            <Image
              className="h-48 w-36 -translate-y-14"
              source={require("./assets/images/doctor-girl.png")}
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
        <View className="h-24 w-[30%] rounded-md border border-gray-200">
          <View className="h-[70%]">
            <Image
              className="h-full w-full"
              source={require("./assets/images/OurServices/clinical-treatment.png")}
            />
          </View>
          <View>
            <Text className="my-2 text-center font-semibold text-[8px]">
              Clinical Treatment
            </Text>
          </View>
        </View>
        <View className="h-24 w-[30%] rounded-md border border-gray-200">
        <View className="h-[70%]">
            <Image
              className="h-full w-full"
              source={require("./assets/images/OurServices/physchological-counselling.png")}
            />
          </View>
          <View>
            <Text className="my-2 text-center font-semibold text-[8px]">
              Clinical Treatment
            </Text>
          </View>
        </View>
        <View className="h-24 w-[30%] rounded-md border border-gray-200">
        <View className="h-[70%]">
            <Image
              className="h-full w-full"
              source={require("./assets/images/OurServices/mindfulness.png")}
            />
          </View>
          <View>
            <Text className="my-2 text-center font-semibold text-[8px]">
              Clinical Treatment
            </Text>
          </View>
        </View>
      </View>

      <StatusBar className="auto" />
      <View>
        <ClinicalTreatment />
      </View>
      <View>{/* <LoginScreen /> */}</View>
    </View>
  );
};

export default App;
