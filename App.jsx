import React from "react";
import { StatusBar } from "expo-status-bar";
import { HomeScreen } from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClinicalTreatmentScreen } from "./src/screens/ClinicalTreatmentScreen";
import { PsychologicalCounsellingScreen } from "./src/screens/PsychologicalCounsellingSreen";
import { MindfulnessScreen } from "./src/screens/MindfulnessScreen";
import { YogaScreen } from "./src/screens/YogaScreen";
import { BookAppointmentScreen } from "./src/screens/BookAppointmentScreen";
import { MeditationScreen } from "./src/screens/MeditationScreen";
import { MobileAddictionScreen } from "./src/screens/MobileAddictionScreen";
import { DetailsScreen } from "./src/screens/DetailsScreen";
import { StartTestScreen } from "./src/screens/StartTestScreen";
import { QuestionsScreen } from "./src/screens/QuestionsScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { useState } from "react";
import { MyStoreContext } from "./src/Context/MyStoreContext";
import QuestionsAndResult from "./src/screens/QuestionAndResultScreen";
import { ResultScreen } from "./src/screens/ResultScreeen";
import { AnswerGivenProvider } from "./src/Context/AnswerGivenContext";
import { CountProvider } from "./src/Context/UseCountContext";
import { Information } from "./src/screens/Information";

const ThemeContext = React.createContext("light");

const Stack = createNativeStackNavigator();

const App = () => {
  // const message = "Hello, World!";
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(null);
  const [categoryType, setCategoryType] = useState(null);
  const [completedCategory, setCompletedCategory] = useState({
    personal: false,
    profession: false,
    surrounding: false,
    health: false,
    ethics: false,
  });

  return (
    <>
      <MyStoreContext.Provider
        value={{
          gender,
          setGender,
          age,
          setAge,
          categoryType,
          setCategoryType,
          completedCategory,
          setCompletedCategory,
        }}
      >
        <AnswerGivenProvider>
          <CountProvider>
            <StatusBar className="auto" />

            <NavigationContainer>
              <Stack.Navigator>
                {/* <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} /> */}
                <Stack.Screen
                  name=" "
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Clinical Treatment"
                  component={ClinicalTreatmentScreen}
                />
                <Stack.Screen
                  name="Psychological Counselling"
                  component={PsychologicalCounsellingScreen}
                />
                <Stack.Screen
                  name="Mindfulness"
                  component={MindfulnessScreen}
                />
                <Stack.Screen name="Yoga" component={YogaScreen} />
                <Stack.Screen name="Meditation" component={MeditationScreen} />
                <Stack.Screen
                  name="Mobile D-Addiction"
                  component={MobileAddictionScreen}
                />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Start Test" component={StartTestScreen} />
                <Stack.Screen name="Questions" component={QuestionsScreen} />
                <Stack.Screen
                  name="QuestionsAndResultScreen"
                  component={QuestionsAndResult}
                />
                <Stack.Screen
                  name="Book Appointment"
                  component={BookAppointmentScreen}
                />
                <Stack.Screen name="Information" component={Information} />
                <Stack.Screen name="Result" component={ResultScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </CountProvider>
        </AnswerGivenProvider>
      </MyStoreContext.Provider>
    </>
  );
};

export default App;
