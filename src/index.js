import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
// import firebase from 'expo-firebase-core';
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import { useNavigation } from "@react-navigation/native";

const Otp = () => {
    const navigation = useNavigation();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState(''); 
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
    const [isMobileVerified, setMobileVerified ] = useState(false);

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
              .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
              .then(setVerificationId);
              setPhoneNumber('');
    };

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
        .then(() => {
            setCode('');
        })
        .catch((error) => {
            //show an alert in case of error
            alert(error);
        })
        setMobileVerified(true)
        Alert.alert(
            'Login Successful. Welcome to Positive Mind Care',
        );
        navigation.navigate("Home");
        // setMobileVerified(false)
        // Alert.alert('Please Enter the Correct Otp');
        // navigation.navigate("login");
    }

    return(
        <View style={styles.container}>
            <FirebaseRecaptchaVerifierModal 
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            />
            <Text style={styles.otpText}>
                Login using Otp
            </Text>
            <TextInput
            placeholder='Phone Number With Country Code'
            onChangeText={setPhoneNumber}
            keyboardType='phone-pad'
            autoCompleteType='tel'
            style={styles.textInput} 
            />

            <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
                <Text style={styles.buttonText}>
                   Send Verification
                </Text>
            </TouchableOpacity>

            <TextInput
            placeholder='Confirm Code'
            onChangeText={setCode}
            keyboardType='number-pad'
            style={styles.textInput} 
            />
            <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
                <Text style={styles.buttonText}>
                   Confirm Verification
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Otp

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center',
    },
    textInput: {
        paddingTop:40,
        paddingBottom:20,
        paddingHorizontal:20,
        fontSize:24,
        borderBottomColor: '#fff',
        borderBottomWidth:2,
        marginBottom:20,
        textAlign:'center',
        color:'#fff'
    },
    sendVerification: {
        padding:20,
        backgroundColor: '#3498db',
        borderRadius:10,
    },
    sendCode: {
        padding:20,
        backgroundColor: '#9b59b6',
        borderRadius:10,
    },
    buttonText: {
        textAlign:'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    otpText: {
        fontSize:24,
        fontWeight:'bold',
        color: '#fff',
        margin:20,

    }
})