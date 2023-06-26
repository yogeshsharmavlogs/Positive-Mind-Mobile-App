import { useCallback, useState } from "react";
import {
  maleUnderSeventeenPersonal,
  maleUnderSeventeenProfession,
  maleUnderSeventeenSurrounding,
} from "../utils";
import Result from "./ResultScreen";
import { QuestionsScreen } from "./QuestionsScreen";
import { Button } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import { useAnswerGivenContext } from "../Context/AnswerGivenContext";
import { useContext } from "react";
import { MyStoreContext } from "../Context/MyStoreContext";

export default function QuestionsAndResult({ navigation }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const { title, questionImage, options, question } =
    maleUnderSeventeenPersonal[activeQuestionIndex] ?? {};
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(undefined);

  const { answersGiven, setAnswersGiven } = useAnswerGivenContext();

  const { gender, setGender, age, setAge, categoryType, setCategoryType } =
    useContext(MyStoreContext);

  console.log(age, gender, categoryType);

  let questions;

  if (age === "under 17" && gender === "male" && categoryType === "personal") {
    questions = maleUnderSeventeenPersonal;
  } else if (
    age === "under 17" &&
    gender === "male" &&
    categoryType === "profession"
  ) {
    questions = maleUnderSeventeenProfession;
  } else if (
    age === "under 17" &&
    gender === "male" &&
    categoryType === "surrounding"
  ) {
    questions = maleUnderSeventeenSurrounding;
  } else {
    questions = [];
  }

  console.log(questions);

  const handleSelectOption = useCallback((answerIndex, questionIndex) => {
    setAnswersGiven((prevState) => ({
      ...prevState,
      [questionIndex]: answerIndex,
    }));
  }, []);

  const handlePrevious = useCallback(() => {
    setActiveQuestionIndex((prevState) => Math.max(prevState - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    setActiveAnswerIndex(undefined);
    if (activeQuestionIndex === questions.length - 1) {
      return navigation.navigate("Result");
    }
    setActiveQuestionIndex((prevState) =>
      Math.min(prevState + 1, questions.length)
    );
  }, [activeQuestionIndex, questions]);

  return (
    <View>
      {activeQuestionIndex === questions.length ? (
        <Result questions={questions} answersGiven={answersGiven} />
      ) : (
        <QuestionsScreen
          index={activeQuestionIndex}
          title={title}
          questionImage={questionImage}
          question={question}
          options={options}
          activeAnswerIndex={activeAnswerIndex}
          setActiveAnswerIndex={setActiveAnswerIndex}
          onSelectOption={(answerIndex) => {
            handleSelectOption(answerIndex, activeQuestionIndex);
          }}
        />
      )}
      <View className="mt-5 items-center">
        <TouchableOpacity className="rounded-lg bg-amber-500 w-80 my-2 text-white">
          <Button disabled={activeQuestionIndex === 0} onPress={handlePrevious}>
            Prev
          </Button>
        </TouchableOpacity>
        {activeQuestionIndex === 9 ? (
          <TouchableOpacity className="rounded-lg bg-amber-500 w-80">
            <Button onPress={handleNext}>Submit</Button>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity className="rounded-lg bg-amber-500 w-80">
            <Button onPress={handleNext}>Next</Button>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
