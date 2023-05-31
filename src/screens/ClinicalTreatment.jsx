import React from "react";
import { View, Image, Text } from "react-native";

export const ClinicalTreatment = () => {
  return (
    <View className="mt-7 mx-2">
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

      {/* Second Block --: */}
      <View className="h-40">
        <Image
          source={require("../../assets/images/OurServices/clinical-treatment.png")}
        />
      </View>
      <View className="mt-8">
        <Text className="text-center">
          Lorem ipsum dolor sit amet consectetur. Sed integer purus pellentesque
          mauris sed placerat egestas. Velit massa ac massa eu massa.
          Ullamcorper consequat donec eu quis facilisis nulla vulputate euismod
          cursus. Est luctus sed eros vulputate. Iaculis in euismod nulla vitae
          dui nulla auctor.
        </Text>
      </View>
    </View>
  );
};
