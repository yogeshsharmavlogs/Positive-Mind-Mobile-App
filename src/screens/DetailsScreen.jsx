import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
// import DropDownPicker from "react-native-dropdown-picker";
import { Dropdown } from "react-native-element-dropdown";
import { useContext } from "react";
import { MyStoreContext } from "../Context/MyStoreContext";
// import {route } from 'react-'

export const DetailsScreen = ({ route, navigation }) => {
  const { gender, setGender, age, setAge, categoryType, setCategoryType } =
    useContext(MyStoreContext);

  console.log(route.params.message);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const genderList = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  const [ageValue, setAgeValue] = useState(null);
  const [genderInput, setGenderInput] = useState(null);
  return (
    <>
      <ScrollView className="m-2" scrollEnabled={true}>
        <View className="h-20 items-center">
          <Image
            className="h-full w-20"
            source={require("../../assets/images/positive-mind-logo.png")}
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold text-lg">Name</Text>
          <TextInput
            className="border rounded-md border-gray-300"
            placeholder="Enter Your Name"
          />
        </View>

        <View className="">
          <Text className="text-gray-700 font-semibold text-lg">Mobile</Text>
          <TextInput
            className="border rounded-md border-gray-300"
            placeholder="Enter Your Contact Number"
          />
        </View>

        <View className="my-4">
          <Text className="text-gray-700 font-semibold text-lg">
            Email (Optional)
          </Text>
          <TextInput
            className="border rounded-md border-gray-300"
            placeholder="Enter Your Email"
          />
        </View>

        <View className="">
          <Text className="text-gray-700 font-semibold text-lg">Gender</Text>
          <Dropdown
            data={genderList}
            labelField="label"
            valueField="value"
            value={value}
            onChange={(item) => {
              setValue(item.label);
              setGenderInput(item.value);
            }}
          />
        </View>

        <View className="mt-5">
          <Text className="text-gray-700 font-semibold text-lg"> Age </Text>
          <RadioButton.Group
            onValueChange={(newValue) => setAgeValue(newValue)}
            value={ageValue}
          >
            <View className="flex-row">
              <RadioButton value="under 17" />
              <Text className="text-lg text-gray-700 pt-0.5">Under 17</Text>
            </View>
            <View className="flex-row">
              <RadioButton value="young adults" />
              <Text className="text-lg text-gray-700 pt-0.5">
                Young Adults 18-28
              </Text>
            </View>
            <View className="flex-row">
              <RadioButton value="adults" />
              <Text className="text-lg text-gray-700 pt-0.5">Adults 29-48</Text>
            </View>
            <View className="flex-row">
              <RadioButton value="middle age" />
              <Text className="text-lg text-gray-700 pt-0.5">
                Middle Age 49-64
              </Text>
            </View>
            <View className="flex-row">
              <RadioButton value="old age" />
              <Text className="text-lg text-gray-700 pt-0.5">Old Age 64+</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View className="my-6 items-center">
          <TouchableOpacity
            onPress={() => {
              setGender(genderInput);
              setAge(ageValue);
              navigation.navigate("Start Test");
            }}
            className="bg-amber-500 w-40 h-10 rounded-full justify-center items-center"
          >
            <Text className="text-white text-lg font-bold">Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
