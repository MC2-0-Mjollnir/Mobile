import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import API from '../utils/api-client';

const Register = () => {
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigateToLogin = () => {
        navigation.navigate('login');
    };

    const handleRegister = async () => {
        try {
            await API.post('users/register/', { email, password, firstName, lastName });
            Alert.alert('Success', 'Register successful');
            navigation.navigate('project');
        } catch (error) {
            Alert.alert('Error', error?.response?.data?.message ?? 'Something went wrong');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../Images/Bg.png')}
                style={[styles.background, { height: windowHeight }]}>
                <View style={styles.content}>
                    <Image
                        source={require('../Images/Logo.png')}
                        style={styles.image}
                    />
                    <View style={styles.inputLabel1}>
                        <View>
                            <Text> First name</Text>
                            <TextInput 
                                style={styles.input2}
                                onChangeText={text => setFirstName(text)}
                                value={firstName}
                                placeholder="Enter your first name"
                            />
                        </View>
                        <View>
                            <Text> Last name</Text>
                            <TextInput 
                                style={styles.input2}
                                onChangeText={text => setLastName(text)}
                                value={lastName}
                                placeholder="Enter your last name"
                            />
                        </View>
                    </View>
                    <View style={styles.inputLabel2}>
                        <Text> Email </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                            value={email}
                            placeholder="Enter your email"
                        />
                    </View>
                    <View style={styles.inputLabel2}>
                        <Text> Password </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setPassword(text)}
                            value={password}
                            placeholder="Enter your password"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <View style={styles.lien}>
                        <Text> Already have an account ? <Text style={styles.link} onPress={navigateToLogin}> Login </Text> </Text>
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
        paddingHorizontal: 25,
        flex: 1,
    },
    content: {
        width: '100%',
        display: 'flex',
        alignSelf: 'center',
    },
    image: {
        width: 150,
        height: 170,
        resizeMode: 'contain',
    },
    inputLabel1: {
        display: 'flex',
        gap: 5,
        width: '49%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputLabel2: {
        width: '100%',
        marginTop: 20,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26344F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 40,
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
        textDecorationLine: 'underline'
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        marginTop: 5,
    },
    input2: {
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        marginTop: 5,
    }
});

export default Register;
