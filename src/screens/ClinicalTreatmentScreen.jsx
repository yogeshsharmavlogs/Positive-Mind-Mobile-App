import React from "react";
import { View, Image, Text } from "react-native";

export const ClinicalTreatmentScreen = () => {
  return (
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
              Clinical Treatment
            </Text>
          </View>
          <View>
            <Text className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur sit.
            </Text>
          </View>
        </View>
      </View>

      {/* Second Block --: */}
      <View className="h-40">
        <Image
          source={require("../../assets/images/OurServices/clinical-treatment.png")}
        />
      </View>
      <View className="pt-14 mx-5">
        <Text className="text-center text-gray-700 leading-5">
          Lorem ipsum dolor sit amet consectetur. Sed integer purus pellentesque
          mauris sed placerat egestas. Velit massa ac massa eu massa.
          Ullamcorper consequat donec eu quis facilisis nulla vulputate euismod
          cursus. Est luctus sed eros vulputate. Iaculis in euismod nulla vitae
          dui nulla auctor.
        </Text>
      </View>
      <View className="mt-8 flex-row gap-x-4">
        <View className="h-28 w-[40%] rounded-md border border-gray-200">
          <View>
            <Image
              className="h-full w-full"
              source={require("../../assets/images/clinicalTreatment/first.png")}
            />
          </View>
        </View>
        <View className="h-28 w-[40%] rounded-md border border-gray-200">
          <View>
            <Image 
            className="h-full w-full"
            source={require("../../assets/images/clinicalTreatment/second.png")} />
          </View>
        </View>
      </View>
    </View>
  );
};
