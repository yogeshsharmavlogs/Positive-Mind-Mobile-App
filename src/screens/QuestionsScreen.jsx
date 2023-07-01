import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { maleUnderSeventeenPersonal } from "../utils";
import { RadioButton } from "react-native-paper";
import { useAnswerGivenContext } from "../Context/AnswerGivenContext";
import { useCountContext } from "../Context/UseCountContext";
import { useState } from "react";
import { useEffect } from "react";

export const QuestionsScreen = (props) => {
  const { setCount } = useCountContext();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  console.log("selected answer is " + selectedAnswer);

  return (
    <ScrollView>
      {/* First Block -----: */}
      <View className="m-2 flex-row">
        <View>
          <Image
            className="h-14 w-12 object-contain"
            source={require("../../assets/images/positive-mind-logo.png")}
          />
        </View>
        <View className="mx-3 mr-32 justify-center">
          <View>
            <Text className="text-lg text-gray-700 font-bold">
              {props.title}
            </Text>
          </View>
        </View>
      </View>
      {/* Image  */}
      <View className="my-3 h-56">
        <Image className="h-full w-full" source={props.questionImage} />
      </View>
      {/* Question Numbers  */}
      <View className="my-2">
        <Text className="text-gray-700 font-bold text-xl text-center">
          {props.index + 1}/{maleUnderSeventeenPersonal.length}
        </Text>
      </View>
      {/* Question Title  */}
      <View className="flex-row">
        <View className="mx-2">
          <Text className="text-gray-700 font-bold text-lg">
            {props.index + 1}.
          </Text>
        </View>
        <View className="mr-10 pr-3">
          <Text className="text-gray-700 font-bold text-lg">
            {props.question}
          </Text>
        </View>
      </View>
      {/* Options  */}
      <View className="mx-2">
        <RadioButton.Group
          onValueChange={(event) => {
            setSelectedAnswer((prevSelectedAnswer) => event);
            setCount((prevValues) => prevValues + event);
          }}
          value={selectedAnswer}
        >
          {props.options.map((option, index) => {
            console.log(option);
            return (
              <View className="flex-row" key={index}>
                <RadioButton
                  value={option.value}
                  onValueChange={() => {
                    props.SelectOption(index);
                    props.setActiveAnswerIndex(index);
                  }}
                />
                <Text className="text-lg pt-0.5"> {option.option} </Text>
              </View>
            );
          })}
        </RadioButton.Group>
      </View>
    </ScrollView>
  );
};
