import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const Landing = ({ navigation }) => {
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
          <Text style={styles.title}>WELCOME!</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.customButton}>
              <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
                color="#800080" 
              />
            </View>
            <View style={styles.verticalMargin} />
            <View style={styles.customButton}>
              <Button
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
                color="#800080" 
              />
            </View>
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
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '30%',
  },
  customButton: {
    width: '100%',
    marginBottom: 5,
  },
  verticalMargin: {
    marginVertical: 1,
  },
});

export default Landing;
