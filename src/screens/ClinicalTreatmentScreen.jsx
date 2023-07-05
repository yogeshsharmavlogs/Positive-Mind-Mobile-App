import React from "react";
import { View, Image, Text } from "react-native";

export const ClinicalTreatmentScreen = () => {
  return (
    <View className="px-4 bg-white h-full">
      {/* First Block -----: */}
      <View className="m-2 flex-row">
        <View className="rounded-lg">
          <Image
            className="h-12 w-10 object-contain rounded-xl"
            source={require("../../assets/images/positive-mind-logo.png")}
          />
        </View>
        <View className="mx-2">
          <View>
            <Text className="text-base text-gray-700 font-bold">
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

      {/* Second Block --: */}
      <View className="h-40">
        <Image
          source={require("../../assets/images/OurServices/clinical-treatment.png")}
        />
      </View>
      <View className="pt-14 mx-5">
        <Text className="text-center text-gray-700 leading-5 justify-start">
          Clinical treatment refers to professional interventions and therapies
          provided by trained healthcare professionals to address physical,
          mental, or emotional conditions and promote healing and recovery.
          Clinical treatment encompasses evidence-based interventions and
          therapies administered by medical and mental health professionals to
          diagnose, manage, and treat various medical, psychological, and
          psychiatric conditions for optimal health outcomes. Clinical treatment
          involves evidence-based interventions by healthcare professionals to
          diagnose, manage, and treat medical and mental health conditions.
        </Text>
      </View>
      <View className="mt-8 flex-row gap-x-8">
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
              source={require("../../assets/images/clinicalTreatment/second.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
