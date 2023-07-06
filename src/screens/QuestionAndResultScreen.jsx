import { useCallback, useState } from "react";
import {
  femaleAdultsEthics,
  femaleAdultsHealth,
  femaleAdultsPersonal,
  femaleAdultsProfession,
  femaleAdultsSurrounding,
  femaleMiddleAgeEthics,
  femaleMiddleAgeHealth,
  femaleMiddleAgePersonal,
  femaleMiddleAgeProfession,
  femaleMiddleAgeSurrounding,
  femaleOldAgeEthics,
  femaleOldAgeHealth,
  femaleOldAgePersonal,
  femaleOldAgeProfession,
  femaleOldAgeSurrounding,
  femaleUnderSeventeenEthics,
  femaleUnderSeventeenHealth,
  femaleUnderSeventeenPersonal,
  femaleUnderSeventeenProfession,
  femaleUnderSeventeenSurrounding,
  femaleYoungAdultsEthics,
  femaleYoungAdultsHealth,
  femaleYoungAdultsPersonal,
  femaleYoungAdultsProfession,
  femaleYoungAdultsSurrounding,
  maleAdultsEthics,
  maleAdultsHealth,
  maleAdultsPersonal,
  maleAdultsProfession,
  maleAdultsSurrounding,
  maleMiddleAgeEthics,
  maleMiddleAgeHealth,
  maleMiddleAgePersonal,
  maleMiddleAgeProfession,
  maleMiddleAgeSurrounding,
  maleOldAgeEthics,
  maleOldAgeHealth,
  maleOldAgePersonal,
  maleOldAgeProfession,
  maleOldAgeSurrounding,
  maleUnderSeventeenEthics,
  maleUnderSeventeenHealth,
  maleUnderSeventeenPersonal,
  maleUnderSeventeenProfession,
  maleUnderSeventeenSurrounding,
  maleYoungAdultsEthics,
  maleYoungAdultsHealth,
  maleYoungAdultsPersonal,
  maleYoungAdultsProfession,
  maleYoungAdultsSurrounding,
} from "../utils";
import { Result } from "./ResultScreen";
import { QuestionsScreen } from "./QuestionsScreen";
import { Button } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import { useAnswerGivenContext } from "../Context/AnswerGivenContext";
import { useContext } from "react";
import { MyStoreContext } from "../Context/MyStoreContext";

export default function QuestionsAndResult({ navigation }) {
  const { gender, age, categoryType, completedCategory, setCompletedCategory } =
    useContext(MyStoreContext);
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
  } else if (
    age === "under 17" &&
    gender === "male" &&
    categoryType === "health"
  ) {
    questions = maleUnderSeventeenHealth;
  } else if (
    age === "under 17" &&
    gender === "male" &&
    categoryType === "ethics"
  ) {
    questions = maleUnderSeventeenEthics;
  } else if (
    age === "under 17" &&
    gender === "female" &&
    categoryType === "personal"
  ) {
    questions = femaleUnderSeventeenPersonal;
  } else if (
    age === "under 17" &&
    gender === "female" &&
    categoryType === "profession"
  ) {
    questions = femaleUnderSeventeenProfession;
  } else if (
    age === "under 17" &&
    gender === "female" &&
    categoryType === "surrounding"
  ) {
    questions = femaleUnderSeventeenSurrounding;
  } else if (
    age === "under 17" &&
    gender === "female" &&
    categoryType === "health"
  ) {
    questions = femaleUnderSeventeenHealth;
  } else if (
    age === "under 17" &&
    gender === "female" &&
    categoryType === "ethics"
  ) {
    questions = femaleUnderSeventeenEthics;
  } else if (
    age === "young adults" &&
    gender === "male" &&
    categoryType === "personal"
  ) {
    questions = maleYoungAdultsPersonal;
  } else if (
    age === "young adults" &&
    gender === "male" &&
    categoryType === "profession"
  ) {
    questions = maleYoungAdultsProfession;
  } else if (
    age === "young adults" &&
    gender === "male" &&
    categoryType === "surrounding"
  ) {
    questions = maleYoungAdultsSurrounding;
  } else if (
    age === "young adults" &&
    gender === "male" &&
    categoryType === "health"
  ) {
    questions = maleYoungAdultsHealth;
  } else if (
    age === "young adults" &&
    gender === "male" &&
    categoryType === "ethics"
  ) {
    questions = maleYoungAdultsEthics;
  } else if (
    age === "young adults" &&
    gender === "female" &&
    categoryType === "personal"
  ) {
    questions = femaleYoungAdultsPersonal;
  } else if (
    age === "young adults" &&
    gender === "female" &&
    categoryType === "profession"
  ) {
    questions = femaleYoungAdultsProfession;
  } else if (
    age === "young adults" &&
    gender === "female" &&
    categoryType === "surrounding"
  ) {
    questions = femaleYoungAdultsSurrounding;
  } else if (
    age === "young adults" &&
    gender === "female" &&
    categoryType === "health"
  ) {
    questions = femaleYoungAdultsHealth;
  } else if (
    age === "young adults" &&
    gender === "female" &&
    categoryType === "ethics"
  ) {
    questions = femaleYoungAdultsEthics;
  } else if (
    age === "adults" &&
    gender === "male" &&
    categoryType === "personal"
  ) {
    questions = maleAdultsPersonal;
  } else if (
    age === "adults" &&
    gender === "male" &&
    categoryType === "profession"
  ) {
    questions = maleAdultsProfession;
  } else if (
    age === "adults" &&
    gender === "male" &&
    categoryType === "surrounding"
  ) {
    questions = maleAdultsSurrounding;
  } else if (
    age === "adults" &&
    gender === "male" &&
    categoryType === "health"
  ) {
    questions = maleAdultsHealth;
  } else if (
    age === "adults" &&
    gender === "male" &&
    categoryType === "ethics"
  ) {
    questions = maleAdultsEthics;
  } else if (
    age === "adults" &&
    gender === "female" &&
    categoryType === "personal"
  ) {
    questions = femaleAdultsPersonal;
  } else if (
    age === "adults" &&
    gender === "female" &&
    categoryType === "profession"
  ) {
    questions = femaleAdultsProfession;
  } else if (
    age === "adults" &&
    gender === "female" &&
    categoryType === "surrounding"
  ) {
    questions = femaleAdultsSurrounding;
  } else if (
    age === "adults" &&
    gender === "female" &&
    categoryType === "health"
  ) {
    questions = femaleAdultsHealth;
  } else if (
    age === "adults" &&
    gender === "female" &&
    categoryType === "ethics"
  ) {
    questions = femaleAdultsEthics;
  } else if (
    age === "middle age" &&
    gender === "male" &&
    categoryType === "personal"
  ) {
    questions = maleMiddleAgePersonal;
  } else if (
    age === "middle age" &&
    gender === "male" &&
    categoryType === "profession"
  ) {
    questions = maleMiddleAgeProfession;
  } else if (
    age === "middle age" &&
    gender === "male" &&
    categoryType === "surrounding"
  ) {
    questions = maleMiddleAgeSurrounding;
  } else if (
    age === "middle age" &&
    gender === "male" &&
    categoryType === "health"
  ) {
    questions = maleMiddleAgeHealth;
  } else if (
    age === "middle age" &&
    gender === "male" &&
    categoryType === "ethics"
  ) {
    questions = maleMiddleAgeEthics;
  } else if (
    age === "middle age" &&
    gender === "female" &&
    categoryType === "personal"
  ) {
    questions = femaleMiddleAgePersonal;
  } else if (
    age === "middle age" &&
    gender === "female" &&
    categoryType === "profession"
  ) {
    questions = femaleMiddleAgeProfession;
  } else if (
    age === "middle age" &&
    gender === "female" &&
    categoryType === "surrounding"
  ) {
    questions = femaleMiddleAgeSurrounding;
  } else if (
    age === "middle age" &&
    gender === "female" &&
    categoryType === "health"
  ) {
    questions = femaleMiddleAgeHealth;
  } else if (
    age === "middle age" &&
    gender === "female" &&
    categoryType === "ethics"
  ) {
    questions = femaleMiddleAgeEthics;
  } else if (
    age === "old age" &&
    gender === "male" &&
    categoryType === "personal"
  ) {
    questions = maleOldAgePersonal;
  } else if (
    age === "old age" &&
    gender === "male" &&
    categoryType === "profession"
  ) {
    questions = maleOldAgeProfession;
  } else if (
    age === "old age" &&
    gender === "male" &&
    categoryType === "surrounding"
  ) {
    questions = maleOldAgeSurrounding;
  } else if (
    age === "old age" &&
    gender === "male" &&
    categoryType === "health"
  ) {
    questions = maleOldAgeHealth;
  } else if (
    age === "old age" &&
    gender === "male" &&
    categoryType === "ethics"
  ) {
    questions = maleOldAgeEthics;
  } else if (
    age === "old age" &&
    gender === "female" &&
    categoryType === "personal"
  ) {
    questions = femaleOldAgePersonal;
  } else if (
    age === "old age" &&
    gender === "female" &&
    categoryType === "profession"
  ) {
    questions = femaleOldAgeProfession;
  } else if (
    age === "old age" &&
    gender === "female" &&
    categoryType === "surrounding"
  ) {
    questions = femaleOldAgeSurrounding;
  } else if (
    age === "old age" &&
    gender === "female" &&
    categoryType === "health"
  ) {
    questions = femaleOldAgeHealth;
  } else if (
    age === "old age" &&
    gender === "female" &&
    categoryType === "ethics"
  ) {
    questions = femaleOldAgeEthics;
  } else {
    questions = [];
  }

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const { title, questionImage, options, question } =
    questions[activeQuestionIndex] ?? {};

  const { answersGiven } = useAnswerGivenContext();

  if (activeQuestionIndex === questions.length - 1) {
    setCompletedCategory((prev) => ({ ...prev, [categoryType]: true }));
    navigation.navigate("Start Test");
  }

  const handlePrevious = useCallback(() => {
    setActiveQuestionIndex((prevState) => Math.max(prevState - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
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
          activeQuestionIndex={activeQuestionIndex}
          title={title}
          questionImage={questionImage}
          question={question}
          options={options}
          categoryType={categoryType}
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
