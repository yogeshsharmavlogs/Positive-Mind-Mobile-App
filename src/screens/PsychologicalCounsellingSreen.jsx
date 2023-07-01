import React from "react";
import { Linking } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text, View, Image } from "react-native";

export const PsychologicalCounsellingScreen = () => {
  return (
    <ScrollView className="mx-2">
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
              Psychological Counseliing
            </Text>
          </View>
          <View>
            <Text className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur sit.
            </Text>
          </View>
        </View>
      </View>

      {/* Package starts -----:  */}
      <View className="my-4">
        <View className="h-40 rounded-xl bg-[#ECFEFF] border border-[#D1D5DB]">
          <View className="mx-3 my-2">
            <Text className="font-semibold text text-gray-700">
              PMC Awareness Tool
            </Text>
            <Text className="text-xs mt-2 mr-10 text-gray-800">
              Globally validated 10 Parameter Awareness Summary
            </Text>
            <Text className="text-gray-800 font-bold text-xs mt-2">
              Single Report Fees.
            </Text>
            <View className="flex-row gap-x-3 mt-2">
              <Text className="line-through text-gray-400 text-xs font-semibold">
                Rs 499
              </Text>
              <Text className="text-amber-500 text-xs">Rs 449</Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://formbuilder.ccavenue.com/live/au-small-finance-bank/positive-mind-care"
                  )
                }
                className="h-7 w-16 bg-amber-500 items-center justify-center rounded-[100px] left-40"
              >
                <Text className="font-bold text-xs text-white">BUY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="h-40 rounded-xl bg-[#FFFBEB] border border-[#D1D5DB] mt-6">
          <View className="mx-3 my-2">
            <Text className="font-semibold text text-gray-700">PMC Learn</Text>
            <Text className="text-xs mt-2 mr-10 text-gray-800">
              Enrich yourself with a 24*7 access to 5000+ minutes of curated,
              well researched self-help content that includes videos, audio,
              blogs and more.
            </Text>
            <Text className="text-gray-800 font-bold text-xs mt-2">
              Single Report Fees.
            </Text>
            <View className="flex-row gap-x-3 mt-2">
              <Text className="line-through text-gray-400 text-xs font-semibold">
                Rs 499
              </Text>
              <Text className="text-amber-500 text-xs">Rs 999</Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://formbuilder.ccavenue.com/live/au-small-finance-bank/positive-mind-care"
                  )
                }
                className="h-7 w-16 bg-amber-500 items-center justify-center rounded-[100px] left-40"
              >
                <Text className="font-bold text-xs text-white">BUY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="h-40 rounded-xl bg-[#FDF2F8] border border-[#D1D5DB] mt-6">
          <View className="mx-3 my-2">
            <Text className="font-semibold text text-gray-700">PMC Buddy</Text>
            <Text className="text-xs mt-2 mr-10 text-gray-800">
              We aim to provide a non-judgmental, anonymous, virtual space that
              connects you to a professional expert buddy anytime, anywhere.
            </Text>
            <Text className="text-gray-800 font-bold text-xs mt-2">
              One Time Pay.
            </Text>
            <View className="flex-row gap-x-3 mt-2">
              <Text className="line-through text-gray-400 text-xs font-semibold">
                Rs 2399
              </Text>
              <Text className="text-amber-500 text-xs">Rs 2159</Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://formbuilder.ccavenue.com/live/au-small-finance-bank/positive-mind-care"
                  )
                }
                className="h-7 w-16 bg-amber-500 items-center justify-center rounded-[100px] left-36"
              >
                <Text className="font-bold text-xs text-white">BUY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="h-40 rounded-xl bg-[#F0FDF4] border border-[#D1D5DB] mt-6">
          <View className="mx-3 my-2">
            <Text className="font-semibold text text-gray-700">PMC Talk</Text>
            <Text className="text-xs mt-2 mr-10 text-gray-800">
              100% Confidential, Antonymous and Reliable therapeutic counselling
              through certified psychologists. Each session of max 45 mins each.
            </Text>
            <Text className="text-gray-800 font-bold text-xs mt-2">
              One Time Pay.
            </Text>
            <View className="flex-row gap-x-3 mt-2">
              <Text className="line-through text-gray-400 text-xs font-semibold">
                Rs 5000
              </Text>
              <Text className="text-amber-500 text-xs">Rs 5000</Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://formbuilder.ccavenue.com/live/au-small-finance-bank/positive-mind-care"
                  )
                }
                className="h-7 w-16 bg-amber-500 items-center justify-center rounded-[100px] left-36"
              >
                <Text className="font-bold text-xs text-white">BUY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="h-40 rounded-xl bg-[#F0FDF4] border border-[#D1D5DB] mt-6">
          <View className="mx-3 my-2">
            <Text className="font-semibold text text-gray-700">PMC Talk</Text>
            <Text className="text-xs mt-2 mr-10 text-gray-800">
              100% Confidential, Antonymous and Reliable therapeutic counselling
              through certified psychologists. Each session of max 45 mins each.
            </Text>
            <Text className="text-gray-800 font-bold text-xs mt-2">
              One Time Pay.
            </Text>
            <View className="flex-row gap-x-3 mt-2">
              <Text className="line-through text-gray-400 text-xs font-semibold">
                Rs 5000
              </Text>
              <Text className="text-amber-500 text-xs">Rs 5000</Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://formbuilder.ccavenue.com/live/au-small-finance-bank/positive-mind-care"
                  )
                }
                className="h-7 w-16 bg-amber-500 items-center justify-center rounded-[100px] left-36"
              >
                <Text className="font-bold text-xs text-white">BUY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
