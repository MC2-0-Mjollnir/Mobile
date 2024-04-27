import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import API from '../utils/api-client';

const Login = () => {
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigateToSignup = () => {
        navigation.navigate('Signup');
    };

    const handleLogin = async () => {
        try {
            await API.post('users/login/', { email, password });
            Alert.alert('Success', 'Login successful');
            navigation.navigate('Projects');
        } catch (error) {
            console.log(error.message)
            Alert.alert('Error', error?.response?.data?.message ?? 'Something went wrong');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../Images/Bg.png')}
                style={[styles.background, { height: windowHeight }]}
            >
                <View style={styles.content}>
                    <Image
                        source={require('../Images/Logo.png')}
                        style={styles.image}
                    />
                    <View style={styles.inputLabel}>
                        <Text> Email </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                            value={email}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputLabel}>
                        <Text> Password </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setPassword(text)}
                            value={password}
                            placeholder="Enter your password"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.lien}>
                        <Text> You don’t have an account ? <Text style={styles.link} onPress={navigateToSignup}> Register</Text> </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        flex: 1,
    },
    container: {
        width: '100%',
        flex: 1,
        alignSelf: 'center',
    },
    content: {
        width: '100%',
        paddingHorizontal: 30,
        flex: 1,
        display: 'flex',
        alignSelf: 'center',
    },
    image: {
        width: 150,
        height: 170,
        resizeMode: 'contain',
    },
    inputLabel: {
        width: '100%',
        marginTop: 20,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26344F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    lien: {
        alignItems: 'center',
        marginTop: 20,
    },
    link: {
        textDecorationLine: 'underline',
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 5,
        backgroundColor: 'white',
    }
});

export default Login;
