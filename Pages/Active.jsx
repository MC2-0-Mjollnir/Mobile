import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Active = ({ route }) => {
    const windowHeight = Dimensions.get('window').height;
    const { projectName, projectDescription } = route.params;
    const [active, setActive] = useState(false);
    const navigation = useNavigation();

    const handleViewTasks = () => {
        navigation.navigate('tasks');
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../Images/Bg.png')}
                style={[styles.background, { height: windowHeight }]}
            >
                <View style={styles.content}>
                    <Text style={styles.titre}>{projectName} </Text>
                    <Text style={styles.paragraph}>{projectDescription} </Text>
                    <TouchableOpacity onPress={() => setActive(prev => !prev)} style={[styles.imageContainer, { backgroundColor: active ? '#26344F' : '#AAAAAA' }]}>
                        <Image
                            source={require('../Images/icon.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titre}> {active ? 'Active' : 'Inactive'} </Text>

                    <View style={[styles.currentTask, { opacity: active ? 1 : 0.25 }]}>
                        <Text> Current Task </Text>
                        <Text> Working on the Corner N15 </Text>
                    </View>
                    <Text style={styles.link} onPress={handleViewTasks}> View All Tasks </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: Dimensions.get('window').width,
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 100,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        borderRadius: 10, // Optional: Adding border radius for better UI
    },
    image: {
        width: 50,
        height: 50,
    },
    titre: {
        fontSize: 30,
        color: '#26344F',
        marginTop: 10,
        textAlign: 'center',
    },
    paragraph: {
        color: '#8A8A8A',
    },

    currentTask: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 75,
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 40,
        color: '#26344F',
        borderColor: '#26344F',
        borderWidth: 1,
    },
    link: {
        color: '#26344F',
        marginTop: 20,
        textDecorationLine: 'underline',
    }
});

export default Active;
