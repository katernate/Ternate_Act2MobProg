import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/564x/f3/d8/ad/f3d8add11451a0fe92eb53692c2cc4ab.jpg',
      }}
      style={styles.backgroundImage}
      resizeMode="cover" 
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>WELCOME TO HOME PAGE!</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.customButton}>
              <Button
                title="Sign Out"
                onPress={() => navigation.navigate('Landing')}
                color="#800080" 
              />
            </View>
            <View style={styles.verticalMargin} />
            <View style={styles.customButton}>
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
    fontSize: 25,
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

export default Home;
