import { ScrollView } from "react-native";
import { Text, View, Image, Pressable } from "react-native";

export const BookAppointmentScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView classname="mx-2">
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
                Book Appointment
              </Text>
            </View>
            <View>
              <Text className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur sit.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
