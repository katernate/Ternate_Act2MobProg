import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/564x/4b/ce/24/4bce245404fe8c5075336e6efb4dfda4.jpg',
      }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up Here</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              placeholderTextColor="#ffffff"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Your Password"
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('Login')}
              color="#800080" 
              style={styles.button}
            />
            <View style={styles.verticalMargin} />
            <Button
              title="Log In"
              onPress={() => navigation.navigate('Login')}
              color="#800080" 
              style={styles.button}
            />
            <View style={styles.verticalMargin} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  inputContainer: {
    width: '60%',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#800080',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#fff',
  },
  buttonContainer: {
    width: '40%',
  },
  button: {
    marginBottom: 5,
  },
  verticalMargin: {
    marginVertical: 3,
  },
});

export default SignUp;
