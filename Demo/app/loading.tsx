import { View, Text, StyleSheet, Animated, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import Svg, { Circle, Line, G } from 'react-native-svg';
import { Path } from 'react-native-svg';
const AnimatedG = Animated.createAnimatedComponent(G);

export default function LoadingScreen() {
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const [email, setEmail] = useState('');
  
    useEffect(() => {
      const startRotation = () => {
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          rotateAnim.setValue(0);
          startRotation();
        });
      };
  
      startRotation();
  
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const spin = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const formatTime = () => {
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      
      if (hours > 0) {
        return `${hours} hours and ${minutes} minutes`;
      }
      return `${minutes} minutes`;
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          We are matching you with{'\n'}funding opportunities.
        </Text>
        <Text style={styles.subtitle}>
          Check back here in {formatTime()}
        </Text>
        
        <View style={styles.clockContainer}>
          <Svg height="250" width="250" viewBox="0 0 100 100">
            {/* Clock face */}
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="#333333"
              strokeWidth="2"
              fill="none"
            />
            
            {/* Clock hand */}
            <AnimatedG
              origin="50, 50"
              style={{ transform: [{ rotate: spin }] }}
            >
              <Line
                x1="50"
                y1="50"
                x2="50"
                y2="15"
                stroke="#333333"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </AnimatedG>

            {/* Center dot */}
            <Circle
              cx="50"
              cy="50"
              r="3"
              fill="#333333"
            />
          </Svg>
        </View>
        
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              // Handle email submission here
              console.log('Email submitted:', email);
            }}
          >
            <Text style={styles.buttonText}>Get Updates</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F6F6F6',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 30,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 60,
  },
  clockContainer: {
    marginTop: 40,
    transform: [{scale: 1.2}],
  },
  emailContainer: {
    width: '15%',
    marginTop: 80,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});