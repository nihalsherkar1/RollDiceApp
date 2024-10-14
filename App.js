import React, {useState} from 'react';

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import dice1 from './assets/One.png';
import dice2 from './assets/Two.png';
import dice3 from './assets/Three.png';
import dice4 from './assets/Four.png';
import dice5 from './assets/Five.png';
import dice6 from './assets/Six.png';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// NO TYPE ANNOTATION IN JAVASCRIPT
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

const App = () => {
  const [diceImage, setDiceImage] = useState(dice1);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(dice1);
        break;
      case 2:
        setDiceImage(dice2);
        break;
      case 3:
        setDiceImage(dice3);
        break;
      case 4:
        setDiceImage(dice4);
        break;
      case 5:
        setDiceImage(dice5);
        break;
      case 6:
        setDiceImage(dice6);
        break;
      default:
        setDiceImage(dice1);
        break;
    }

    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.diceContainer}>
          <View style={styles.diceImage}>
            <Dice imageUrl={diceImage} />
          </View>
        </View>
        <Pressable onPress={rollDiceOnTap}>
          <Text style={styles.rollDiceBtnText}> Roll the Dice </Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
